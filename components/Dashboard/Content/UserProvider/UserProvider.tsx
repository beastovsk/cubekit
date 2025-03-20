"use client";

import { useUserStore } from "@/store/user";
import { useEffect } from "react";

export function UserProvider({
  user,
  children,
}: {
  user: any;
  children: React.ReactNode;
}) {
  const updateUser = useUserStore((state: any) => state.updateUser);

  useEffect(() => {
    if (!user) return;

    updateUser(user.data);
  }, [user, updateUser]);

  return <>{children}</>;
}
