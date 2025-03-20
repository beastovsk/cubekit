import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Google],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "google") {
        token.google = true;
      }

      return token;
    },
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  jwt: {
    encode: async ({ token }) => {
      return token as any;
    },
    decode: async ({ token }) => {
      return token as any;
    },
  },
  secret: process.env.AUTH_SECRET!,
});
