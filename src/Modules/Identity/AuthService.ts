import bcrypt from "bcryptjs";

import {
  LoginLockMinutes,
  MaximumFailedLoginAttempts,
  SessionDurationDays,
} from "./IdentityConstants";

import {
  createSessionToken,
  hashSessionToken,
} from "./SessionToken";

import { auditRepository } from "./AuditRepository";
import { sessionRepository } from "./SessionRepository";
import { userRepository } from "./UserRepository";

interface LoginInput {
  email: string;
  password: string;
  ipAddress?: string | null;
  userAgent?: string | null;
}

export interface AuthenticatedUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  permissions: string[];
}

interface LoginSuccess {
  success: true;
  token: string;
  expiresAt: Date;
  user: AuthenticatedUser;
}

interface LoginFailure {
  success: false;
  status: number;
  message: string;
}

export type LoginResult = LoginSuccess | LoginFailure;

export class AuthService {
  async login(input: LoginInput): Promise<LoginResult> {
    const email = input.email.trim().toLowerCase();

    if (!email || !input.password) {
      return {
        success: false,
        status: 400,
        message: "Email and password are required.",
      };
    }

    const user =
      await userRepository.findAuthenticationUserByEmail(email);

    if (!user) {
      await auditRepository.createAuditLog({
        action: "LOGINFAILED",
        entityType: "USER",
        description: "Login failed because the account was not found.",
        metadata: {
          email,
        },
        ipAddress: input.ipAddress,
        userAgent: input.userAgent,
      });

      return {
        success: false,
        status: 401,
        message: "Invalid email or password.",
      };
    }

    if (!user.isActive) {
      await auditRepository.createAuditLog({
        actorId: user.id,
        action: "LOGINBLOCKED",
        entityType: "USER",
        entityId: user.id,
        description: "Login blocked because the account is inactive.",
        ipAddress: input.ipAddress,
        userAgent: input.userAgent,
      });

      return {
        success: false,
        status: 403,
        message: "This account is inactive.",
      };
    }

    if (
      user.lockedUntil &&
      user.lockedUntil.getTime() > Date.now()
    ) {
      await auditRepository.createAuditLog({
        actorId: user.id,
        action: "LOGINBLOCKED",
        entityType: "USER",
        entityId: user.id,
        description: "Login blocked because the account is temporarily locked.",
        metadata: {
          lockedUntil: user.lockedUntil.toISOString(),
        },
        ipAddress: input.ipAddress,
        userAgent: input.userAgent,
      });

      return {
        success: false,
        status: 423,
        message: "Account temporarily locked. Try again later.",
      };
    }

    const passwordMatches = await bcrypt.compare(
      input.password,
      user.passwordHash
    );

    if (!passwordMatches) {
      const failedLoginCount = user.failedLoginCount + 1;

      const shouldLock =
        failedLoginCount >= MaximumFailedLoginAttempts;

      const lockedUntil = shouldLock
        ? new Date(
            Date.now() +
              LoginLockMinutes * 60 * 1000
          )
        : null;

      await userRepository.recordFailedLogin(
        user.id,
        shouldLock ? 0 : failedLoginCount,
        lockedUntil
      );

      await auditRepository.createAuditLog({
        actorId: user.id,
        action: "LOGINFAILED",
        entityType: "USER",
        entityId: user.id,
        description: shouldLock
          ? "Account locked after repeated failed login attempts."
          : "Login failed because the password was incorrect.",
        metadata: {
          failedLoginCount,
          lockedUntil: lockedUntil?.toISOString() ?? null,
        },
        ipAddress: input.ipAddress,
        userAgent: input.userAgent,
      });

      return {
        success: false,
        status: 401,
        message: shouldLock
          ? "Account temporarily locked. Try again later."
          : "Invalid email or password.",
      };
    }

    await userRepository.recordSuccessfulLogin(user.id);

    const token = createSessionToken();
    const tokenHash = hashSessionToken(token);

    const expiresAt = new Date(
      Date.now() +
        SessionDurationDays * 24 * 60 * 60 * 1000
    );

    await sessionRepository.createSession({
      userId: user.id,
      tokenHash,
      expiresAt,
      ipAddress: input.ipAddress,
      userAgent: input.userAgent,
    });

    await auditRepository.createAuditLog({
      actorId: user.id,
      action: "LOGINSUCCESS",
      entityType: "USER",
      entityId: user.id,
      description: "User logged in successfully.",
      ipAddress: input.ipAddress,
      userAgent: input.userAgent,
    });

    const permissions = user.role.rolePermissions.map(
      (rolePermission) =>
        rolePermission.permission.key
    );

    return {
      success: true,
      token,
      expiresAt,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role.key,
        permissions,
      },
    };
  }

  async logout(
    token: string,
    ipAddress?: string | null,
    userAgent?: string | null
  ) {
    const tokenHash = hashSessionToken(token);

    const session =
      await sessionRepository.findActiveSessionByTokenHash(
        tokenHash
      );

    await sessionRepository.revokeSessionByTokenHash(
      tokenHash
    );

    if (session) {
      await auditRepository.createAuditLog({
        actorId: session.userId,
        action: "LOGOUT",
        entityType: "USER",
        entityId: session.userId,
        description: "User logged out successfully.",
        ipAddress,
        userAgent,
      });
    }
  }
}

export const authService = new AuthService();