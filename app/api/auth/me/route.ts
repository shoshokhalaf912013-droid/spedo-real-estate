import { NextRequest, NextResponse } from "next/server";

import { hashSessionToken } from "@/Modules/Identity/SessionToken";
import { sessionRepository } from "@/Modules/Identity/SessionRepository";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("spedo_session")?.value;

    if (!token) {
      return NextResponse.json(
        {
          authenticated: false,
        },
        {
          status: 401,
        }
      );
    }

    const tokenHash = hashSessionToken(token);

    const session =
      await sessionRepository.findActiveSessionByTokenHash(
        tokenHash
      );

    if (!session) {
      const response = NextResponse.json(
        {
          authenticated: false,
        },
        {
          status: 401,
        }
      );

      response.cookies.delete("spedo_session");

      return response;
    }

    await sessionRepository.updateLastActiveAt(session.id);

    const user = session.user;

    const permissions = user.role.rolePermissions.map(
      (rolePermission) => rolePermission.permission.key
    );

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role.key,
        permissions,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        authenticated: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}