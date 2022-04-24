import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import { PrismaClient, Project } from "@prisma/client"
import { saveFile } from "../assessment/[id]"

type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Project>) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).send({ message: "Only POST|Delete requests allowed" })
  }
  const { id } = req.query
  if (req.method === "DELETE") {
    try {
      const clearUserProject = await prisma.project.delete({
        where: {
          userId: id as string,
        },
      })
      return res.status(200).json(clearUserProject)
    } catch (err) {
      console.log(err)
      return res.status(500).send({ message: "Something went wrong" })
    }
  }

  const form = formidable({ multiples: true })

  form.parse(req, async function (err, fields, files) {
    const {
      email,
      fullName,
      refIndicator,
      jobTitle,
      yrsOfExp,
      projects,
      priSkillPool,
      secSkillPool,
      lastApprovedProjectLevel,
      education,
      supervisor,
      relevantTrainings,
    } = JSON.parse(fields.data as string)

    if (err) {
      console.log(err)
      return res.status(400).send({ message: "Invalid form data" })
    }

    const cvAssessmentFiles = []

    if (files.cvAssessmentFiles) {
      if (Array.isArray(files.cvAssessmentFiles)) {
        for (const file of files.cvAssessmentFiles as any) {
          const filepath = await saveFile(file)
          cvAssessmentFiles.push(filepath)
        }
      } else {
        const filepath = await saveFile(files.cvAssessmentFiles)
        cvAssessmentFiles.push(filepath)
      }
    }

    console.log("education array", education)
    console.log("relevantTrainings array", relevantTrainings)
    console.log("cvAssessmentFiles array", cvAssessmentFiles)
    const cv = cvAssessmentFiles.map((file) => ({
      file,
    }))
    console.log("cv array", cv)
    // const data = {
    //   refIndicator,
    //   jobTitle,
    //   cvAssessmentFiles: {
    //     create: cv,
    //   },
    //   yrsOfExp,
    //   projects: {
    //     create: projects,
    //   },
    //   priSkillPool,
    //   secSkillPool,
    //   lastApprovedProjectLevel,
    //   education: {
    //     create: education.map((edu: any) => ({
    //       ...edu,
    //       keyDate: new Date(edu.keyDate),
    //     })),
    //   },
    //   supervisor,
    //   relevantTrainings: {
    //     create: relevantTrainings.map((train: any) => ({
    //       ...train,
    //       keyDate: new Date(train.keyDate),
    //     })),
    //   },
    //   fullName,
    //   email,
    //   user: {
    //     connect: {
    //       id: id as string,
    //     },
    //   },
    // }

    try {
      const userProject: Project = await prisma.project.create({
        data: {
          refIndicator,
          jobTitle,
          cvAssessmentFiles: {
            create: [...cv],
          },
          yrsOfExp,
          projects: {
            create: [...projects],
          },
          priSkillPool,
          secSkillPool,
          lastApprovedProjectLevel,
          education: {
            create: [
              ...education.map((edu: any) => ({
                ...edu,
                keyDate: new Date(edu.keyDate),
              })),
            ],
          },
          supervisor,
          relevantTrainings: {
            create: relevantTrainings.map((train: any) => ({
              ...train,
              keyDate: new Date(train.keyDate),
            })),
          },
          fullName,
          email,
          user: {
            connect: {
              id: id as string,
            },
          },
        },
      })

      return res.status(200).json(userProject)
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: "Internal server error" })
    }
  })
}
