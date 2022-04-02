// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient,Department } from "@prisma/client"


type Data = {
    message?: string,
    userDepartment? :Department
    
}
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|Department>
) {

    if (req.method !== 'POST') {
   return res.status(405).send({ message: 'Only POST requests allowed' })
    
    }
    const { department:userDept, projectLevel } = req.body
    
    const {id }= req.query
      
    try {
        const userDepartment = await prisma.department.create({
            data: {
                name: userDept,
                projectLevel: projectLevel,
                user: {
                    connect: {
                        id: id as string
                    }
                }
            }
        })
        console.log('success',userDepartment)

       return res.status(200).json(userDepartment)
        
    } catch (error) {
        console.log(error)
      return  res.status(500).send({ message: 'Internal server error' })
    }
        
    

}
