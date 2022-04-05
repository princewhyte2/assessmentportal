import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from "formidable";
import { PrismaClient,Project} from "@prisma/client"
import { saveFile } from '../assessment/[id]'






type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false
  }
};

const prisma = new PrismaClient();

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data|Project>
) {

    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' })
    }
  
    const form = formidable({multiples: true});
    
    form.parse(req, async function (err, fields, files) {
        const {
          email,fullName, refIndicator,jobTitle,yrsOfExp,projects,priSkillPool,secSkillPool,lastApprovedProjectLevel,education,supervisor,relevantTrainings
        } = JSON.parse(fields.data as string)

        if (err) {
            console.log(err)
            return res.status(400).send({ message: 'Invalid form data' })
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


         console.log('files', cvAssessmentFiles);
        console.log('fields',fields.data );
    

        const { id } = req.query

        const data = {
            refIndicator,jobTitle,cvAssessmentFiles,yrsOfExp,projects,priSkillPool,secSkillPool,lastApprovedProjectLevel,education,supervisor,relevantTrainings,fullName,email,
            user: {
                connect: {
                    id: id as string
                }
            }
        }




        try {
            const userProject = await prisma.project.create({
                data
            })
            console.log('success', userProject)

            return res.status(200).json(userProject)
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: 'Internal server error' })
        }

    })

} 