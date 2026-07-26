import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string | undefined
      }
      return session
    },
    async jwt({ token, account }) {
      if (account) {
        token.role = "member"
      }
      return token
    },
  },
})

declare module "next-auth" {
  interface User {
    role?: string
  }
  interface Session {
    user: {
      role?: string
    } & import("next-auth").DefaultSession["user"]
  }
}
