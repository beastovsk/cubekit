import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const cookieStore = await cookies();

    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Incorrect email" },
        { status: 400 }
      );
    }

    const isPasswordCorrect = bcrypt.compareSync(
      password,
      user.password as string
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { success: false, message: "Incorrect password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { email: user.email, id: user.id },
      process.env.JWT_SECRET as string
    );

    await cookieStore.set("token", token);

    return NextResponse.json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
