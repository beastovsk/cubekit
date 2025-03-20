"use server";

import { signIn } from "@/lib/auth";

export async function handleSignInGoogle() {
  await signIn("google");
}
