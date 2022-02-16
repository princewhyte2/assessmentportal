import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient, User } from "@prisma/client"
import { verifyPassword } from "../../../lib/auth"

const prisma = new PrismaClient()

export default NextAuth({
  session: {
    strategy: "jwt",
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
  pages: {
    signIn: "/",
  },
})
