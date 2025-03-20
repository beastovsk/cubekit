import jwt from "jsonwebtoken";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ error: "Token not found" }, { status: 404 });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

    if (!decoded || !decoded.email) {
      return NextResponse.json({ error: "Token invalid" }, { status: 401 });
    }

    const email = decoded.email;

    const user = await db.user.findUnique({
      where: { email },
      select: {
        email: true,
        name: true,
        id: true,
        plan: true,
        tryCounter: true,
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Token invalid" }, { status: 401 });
  }
}
