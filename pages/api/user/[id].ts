// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient, User } from "@prisma/client"
// import { getSession } from "next-auth/react"
import { getToken } from "next-auth/jwt"

type Data = {
  message?: string
}
const secret = process.env.JWT_SECRET
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | User>) {
  if (req.method !== "GET") {
    return res.status(405).send({ message: "Only POST requests allowed" })
  }

  const id = req.query.id as string

  if (!id) return res.status(400).send({ message: "No id provided" })

  try {
    const uniqueUser: User | null = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        department: true,
        assessment: true,
        project: {
          include: {
            //@ts-ignore
            relevantTrainings: true,
            projects: true,
            education: true,
            cvAssessmentFiles: true,
          },
        },
      },
    })

    if (!uniqueUser) {
      return res.status(404).send({ message: "User not found" })
    }

    return res.status(200).json(uniqueUser)
  } catch (error) {
    console.log("backend", error)
    return res.status(500).send({ message: "Internal server error" })
  }
}
