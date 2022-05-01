import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@prisma/client"
import os from "os"
import prisma from "../../../lib/prisma"

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "string", required: true },
      },
      async authorize(credentials): Promise<User> {
        const userInfo = os.userInfo().username
        console.log("user info", userInfo)
        //check credential.username if it matches username
        if (!credentials?.email) throw new Error("Invalid User details")
        if (credentials.email !== userInfo) throw new Error("Invalid details")
        if (credentials.email === userInfo) {
          // if (credentials.email) {
          const user = await prisma.user.findUnique({
            where: {
              // username: userInfo,
              username: credentials.email,
            },
          })
          if (!user) {
            //create user in db
            const newUser = await prisma.user.create({
              data: {
                // username: userInfo,
                username: credentials.email,
              },
            })
            console.log("new user", newUser)
            return newUser

            // throw new Error("User not found")
          }
          console.log("user ", user)
          return user
        }

        throw new Error("No user found!")
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("jwt", user)
      user && (token.user = user)
      return token
    },
    async session({ session, user, token }) {
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
