import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import { verifyPassword } from "../../../lib/auth"

const prisma = new PrismaClient()

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: Record): Promise<User> {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })
        if (!user) {
          throw new Error("No user found!")
        }
        const isValid = await verifyPassword(credentials.password, user.password)
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
