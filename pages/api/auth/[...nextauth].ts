import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient, User } from "@prisma/client"
import { verifyPassword } from "../../../lib/auth"

const prisma = new PrismaClient()

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials): Promise<User> {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })
        if (!user) {
          throw new Error("No user found!")
        }
        const isValid = await verifyPassword(credentials?.password, user.password)
        if (!isValid) {
          throw new Error("Could not log you in!")
        }
        return user
      },
    }),
  ],
  callbacks: {
    async jwt ({ token, user, account, profile, isNewUser }) {
     
       user && (token.user = user)
      return token
    },
    async session ({ session, user, token }) {
      
      //@ts-ignore
      session.user = token.user
      return session
    },
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.JWT_SECRET,
})
