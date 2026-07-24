import { NextRequest, NextResponse } from "next/server";

import { authService } from "@/Modules/Identity/AuthService";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await authService.login({
      email: body.email,
      password: body.password,
      ipAddress:
        request.headers.get("x-forwarded-for") ??
        request.headers.get("x-real-ip"),
      userAgent: request.headers.get("user-agent"),
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
        },
        {
          status: result.status,
        }
      );
    }

    const response = NextResponse.json({
      success: true,
      user: result.user,
    });

    response.cookies.set({
      name: "spedo_session",
      value: result.token,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      expires: result.expiresAt,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}