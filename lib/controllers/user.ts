import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  const res = await fetch(`${process.env.API_URL}/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  if (!res.ok) return null;
  return res.json();
};
