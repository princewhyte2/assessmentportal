// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient,User } from "@prisma/client"
// import { getSession } from "next-auth/react"
import { getToken } from "next-auth/jwt"


type Data = {
    message?: string,
    
    
}
const secret = process.env.JWT_SECRET
const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data|any>
) {

    if (req.method !== 'GET') {
   return res.status(405).send({ message: 'Only POST requests allowed' })
    
    }

  
      
    try {
 
        
        const users = await prisma.user.findMany({
            include: {
                department: true,
                assessment: true,
                project: true
            }
        })
        if (!users) {
            return res.status(404).send({ message: 'Users not found' })
        }
        return res.status(200).json(users)
        
    } catch (error) {
        console.log('backend',error)
      return  res.status(500).send({ message: 'Internal server error' })
    }
        
    

}
