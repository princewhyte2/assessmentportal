// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import fs from "fs"
import { join, parse, extname } from "path"
import { PrismaClient, Assessment } from "@prisma/client"

export const saveFile = async (file: any) => {
  if (!file) return null

  const data = fs.readFileSync(file.filepath)
  const url = `/uploads/${file.newFilename}${extname(file.originalFilename)}`
  const path = `./public/${url}`

  fs.writeFileSync(path, data)
  await fs.unlinkSync(file.filepath)
  return url
}

type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Assessment>) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).send({ message: "Only POST|Delete requests allowed" })
  }
  const { id } = req.query
  if (req.method === "DELETE") {
    try {
      const clearUserAssessment = await prisma.assessment.delete({
        where: {
          userId: id as string,
        },
      })
      return res.status(200).json(clearUserAssessment)
    } catch (err) {
      console.log(err)
      return res.status(500).send({ message: "Something went wrong" })
    }
  }
  const form = new formidable.IncomingForm()

  form.parse(req, async function (err, fields, files) {
    const {
      evaluateAndFrameOpportunities,
      deliverCommercialValue,
      costEstimating,
      probablisticCost,
      driveProjectPerformance,
      projectRiskManagement,
      competitiveAndAffordableScope,
      leveragePortfolioBenefit,
      projectPortfolioBenchmarking,
      manageDesignEngineering,
      developProjectExecutionStrategiesAndPlans,
      contractAndContractorManagement,
      setUpLeadProjectTeams,
      workEfficientlyWithStakeholders,
      manageProjectComplexities,
      manageQuality,
      implementProcurement,
      manageFabrication,
      costControl,
      planningAndScheduling,
      deliverSuccessfulStartUp,
      handOver,
      manageSchedulesAndResources,
      manageCosts,
      LeadInterfaceManagement,
    } = JSON.parse(fields.data as string)

    if (err) {
      console.log(err)
      return res.status(400).send({ message: "Invalid form data" })
    }

    // console.log('files', files);
    // console.log('fields',typeof JSON.parse(fields.data as string));
    const evaluateAndFrameOpportunitiesFile = await saveFile(files.evaluateAndFrameOpportunitiesFile)
    const deliverCommercialValueFile = await saveFile(files.deliverCommercialValueFile)
    const costEstimatingFile = await saveFile(files.costEstimatingFile)
    const probablisticCostFile = await saveFile(files.probablisticCostFile)
    const driveProjectPerformanceFile = await saveFile(files.driveProjectPerformanceFile)
    const projectRiskManagementFile = await saveFile(files.projectRiskManagementFile)
    const competitiveAndAffordableScopeFile = await saveFile(files.competitiveAndAffordableScopeFile)
    const leveragePortfolioBenefitFile = await saveFile(files.leveragePortfolioBenefitFile)
    const projectPortfolioBenchmarkingFile = await saveFile(files.projectPortfolioBenchmarkingFile)
    const manageDesignEngineeringFile = await saveFile(files.manageDesignEngineeringFile)
    const developProjectExecutionStrategiesAndPlansFile = await saveFile(
      files.developProjectExecutionStrategiesAndPlansFile,
    )
    const contractAndContractorManagementFile = await saveFile(files.contractAndContractorManagementFile)
    const setUpLeadProjectTeamsFile = await saveFile(files.setUpLeadProjectTeamsFile)
    const workEfficientlyWithStakeholdersFile = await saveFile(files.workEfficientlyWithStakeholdersFile)
    const manageProjectComplexitiesFile = await saveFile(files.manageProjectComplexitiesFile)
    const manageQualityFile = await saveFile(files.manageQualityFile)
    const implementProcurementFile = await saveFile(files.implementProcurementFile)
    const manageFabricationFile = await saveFile(files.manageFabricationFile)
    const costControlFile = await saveFile(files.costControlFile)
    const planningAndSchedulingFile = await saveFile(files.planningAndSchedulingFile)
    const deliverSuccessfulStartUpFile = await saveFile(files.deliverSuccessfulStartUpFile)
    const handOverFile = await saveFile(files.handOverFile)
    const manageSchedulesAndResourcesFile = await saveFile(files.manageSchedulesAndResourcesFile)
    const manageCostsFile = await saveFile(files.manageCostsFile)
    const LeadInterfaceManagementFile = await saveFile(files.LeadInterfaceManagementFile)

    const data = {
      evaluateAndFrameOpportunities,
      deliverCommercialValue,
      costEstimating,
      probablisticCost,
      driveProjectPerformance,
      projectRiskManagement,
      competitiveAndAffordableScope,
      leveragePortfolioBenefit,
      projectPortfolioBenchmarking,
      manageDesignEngineering,
      developProjectExecutionStrategiesAndPlans,
      contractAndContractorManagement,
      setUpLeadProjectTeams,
      workEfficientlyWithStakeholders,
      manageProjectComplexities,
      manageQuality,
      implementProcurement,
      manageFabrication,
      costControl,
      planningAndScheduling,
      deliverSuccessfulStartUp,
      handOver,
      manageSchedulesAndResources,
      manageCosts,
      LeadInterfaceManagement,
      evaluateAndFrameOpportunitiesFile,
      deliverCommercialValueFile,
      costEstimatingFile,
      probablisticCostFile,
      driveProjectPerformanceFile,
      projectRiskManagementFile,
      competitiveAndAffordableScopeFile,
      leveragePortfolioBenefitFile,
      projectPortfolioBenchmarkingFile,
      manageDesignEngineeringFile,
      developProjectExecutionStrategiesAndPlansFile,
      contractAndContractorManagementFile,
      setUpLeadProjectTeamsFile,
      workEfficientlyWithStakeholdersFile,
      manageProjectComplexitiesFile,
      manageQualityFile,
      implementProcurementFile,
      manageFabricationFile,
      costControlFile,
      planningAndSchedulingFile,
      deliverSuccessfulStartUpFile,
      handOverFile,
      manageSchedulesAndResourcesFile,
      manageCostsFile,
      LeadInterfaceManagementFile,
      user: {
        connect: {
          id: id as string,
        },
      },
    }

    try {
      const userAssessment = await prisma.assessment.create({
        data,
      })
      console.log("success", userAssessment)

      return res.status(200).json(userAssessment)
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: "Internal server error" })
    }
  })
}
