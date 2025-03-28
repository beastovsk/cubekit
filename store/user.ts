import { create } from "zustand";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface UserState {
  user: User | null;
  updateUser: (user: User | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  updateUser: (user) => set({ user }),
}));
