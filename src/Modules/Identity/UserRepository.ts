import { prisma } from "@/lib/prisma";

export class UserRepository {
  async findAuthenticationUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email: email.trim().toLowerCase(),
      },
      include: {
        role: {
          include: {
            rolePermissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });
  }

  async findUserById(userId: string) {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        role: {
          include: {
            rolePermissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });
  }

  async recordFailedLogin(
    userId: string,
    failedLoginCount: number,
    lockedUntil: Date | null
  ) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        failedLoginCount,
        lockedUntil,
      },
    });
  }

  async recordSuccessfulLogin(userId: string) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        failedLoginCount: 0,
        lockedUntil: null,
        lastLoginAt: new Date(),
      },
    });
  }
}

export const userRepository = new UserRepository();