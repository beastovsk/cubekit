"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogoutServer = async () => {
  const cookieStore = await cookies();

  await cookieStore.delete("token");
  redirect("/");
};
