import react, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import axios from "axios"

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }),
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

const Assessment = ({ user }: any) => {
  const router = useRouter()
  const { department } = router.query

  const [isLoading, setIsLoading] = useState(false)
  const [evaluateAndFrameOpportunities, setEvaluateAndFrameOpportunities] = useState(0)
  const [evaluateAndFrameOpportunitiesFile, setEvaluateAndFrameOpportunitiesFile] = useState<File>()
  const [deliverCommercialValue, setDeliverCommercialValue] = useState(0)
  const [deliverCommercialValueFile, setDeliverCommercialValueFile] = useState<File>()
  const [costEstimating, setCostEstimating] = useState(0)
  const [costEstimatingFile, setCostEstimatingFile] = useState<File>()
  const [probablisticCost, setProbablisticCost] = useState(0)
  const [probablisticCostFile, setProbablisticCostFile] = useState<File>()
  const [driveProjectPerformance, setDriveProjectPerformance] = useState(0)
  const [driveProjectPerformanceFile, setDriveProjectPerformanceFile] = useState<File>()
  const [projectRiskManagement, setProjectRiskManagement] = useState(0)
  const [projectRiskManagementFile, setProjectRiskManagementFile] = useState<File>()
  const [competitiveAndAffordableScope, setCompetitiveAndAffordableScope] = useState(0)
  const [competitiveAndAffordableScopeFile, setCompetitiveAndAffordableScopeFile] = useState<File>()
  const [leveragePortfolioBenefit, setLeveragePortfolioBenefit] = useState(0)
  const [leveragePortfolioBenefitFile, setLeveragePortfolioBenefitFile] = useState<File>()
  const [projectPortfolioBenchmarking, setProjectPortfolioBenchmarking] = useState(0)
  const [projectPortfolioBenchmarkingFile, setProjectPortfolioBenchmarkingFile] = useState<File>()
  const [manageDesignEngineering, setManageDesignEngineering] = useState(0)
  const [manageDesignEngineeringFile, setManageDesignEngineeringFile] = useState<File>()
  const [developProjectExecutionStrategiesAndPlans, setDevelopProjectExecutionStrategiesAndPlans] = useState(0)
  const [developProjectExecutionStrategiesAndPlansFile, setDevelopProjectExecutionStrategiesAndPlansFile] =
    useState<File>()
  const [contractAndContractorManagement, setContractAndContractorManagement] = useState(0)
  const [contractAndContractorManagementFile, setContractAndContractorManagementFile] = useState<File>()
  const [setUpLeadProjectTeams, setSetUpLeadProjectTeams] = useState(0)
  const [setUpLeadProjectTeamsFile, setSetUpLeadProjectTeamsFile] = useState<File>()
  const [workEfficientlyWithStakeholders, setWorkEfficientlyWithStakeholders] = useState(0)
  const [workEfficientlyWithStakeholdersFile, setWorkEfficientlyWithStakeholdersFile] = useState<File>()
  const [manageProjectComplexities, setManageProjectComplexities] = useState(0)
  const [manageProjectComplexitiesFile, setManageProjectComplexitiesFile] = useState<File>()
  const [manageQuality, setManageQuality] = useState(0)
  const [manageQualityFile, setManageQualityFile] = useState<File>()
  const [implementProcurement, setImplementProcurement] = useState(0)
  const [implementProcurementFile, setImplementProcurementFile] = useState<File>()
  const [manageFabrication, setManageFabrication] = useState(0)
  const [manageFabricationFile, setManageFabricationFile] = useState<File>()
  const [costControl, setCostControl] = useState(0)
  const [costControlFile, setCostControlFile] = useState<File>()
  const [planningAndScheduling, setPlanningAndScheduling] = useState(0)
  const [planningAndSchedulingFile, setPlanningAndSchedulingFile] = useState<File>()
  const [deliverSuccessfulStartUp, setDeliverSuccessfulStartUp] = useState(0)
  const [deliverSuccessfulStartUpFile, setDeliverSuccessfulStartUpFile] = useState<File>()
  const [handOver, setHandOver] = useState(0)
  const [handOverFile, setHandOverFile] = useState<File>()
  const [manageSchedulesAndResources, setManageSchedulesAndResources] = useState(0)
  const [manageSchedulesAndResourcesFile, setManageSchedulesAndResourcesFile] = useState<File>()
  const [manageCosts, setManageCosts] = useState(0)
  const [manageCostsFile, setManageCostsFile] = useState<File>()
  const [LeadInterfaceManagement, setLeadInterfaceManagement] = useState(0)
  const [LeadInterfaceManagementFile, setLeadInterfaceManagementFile] = useState<File>()

  const [expanded, setExpanded] = useState<string | false>("panel1")

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const handleContinue = async (e: any) => {
    e.preventDefault()
    if (department === "TF") {
      if (
        !evaluateAndFrameOpportunities ||
        !deliverCommercialValue ||
        !LeadInterfaceManagement ||
        !driveProjectPerformance ||
        !leveragePortfolioBenefit ||
        !projectPortfolioBenchmarking ||
        !manageDesignEngineering ||
        !developProjectExecutionStrategiesAndPlans ||
        !contractAndContractorManagement ||
        !setUpLeadProjectTeams ||
        !workEfficientlyWithStakeholders ||
        !manageProjectComplexities ||
        !manageCosts
      ) {
        window.alert("you have empty fields")
        return
      }
    } else {
      if (
        !evaluateAndFrameOpportunities ||
        !deliverCommercialValue ||
        !costEstimating ||
        !probablisticCost ||
        !driveProjectPerformance ||
        !projectRiskManagement ||
        !leveragePortfolioBenefit ||
        !projectPortfolioBenchmarking ||
        !manageDesignEngineering ||
        !developProjectExecutionStrategiesAndPlans ||
        !contractAndContractorManagement ||
        !setUpLeadProjectTeams ||
        !workEfficientlyWithStakeholders ||
        !manageProjectComplexities ||
        !manageQuality ||
        !implementProcurement ||
        !manageFabrication ||
        !planningAndScheduling ||
        !manageCosts ||
        !costControl ||
        !deliverSuccessfulStartUp ||
        !handOver ||
        !competitiveAndAffordableScope
      ) {
        window.alert("you have empty fields")
        return
      }
    }
    const response = window.confirm("Are you sure all fields are filled correctly ?")
    if (!response) return
    setIsLoading(true)
    const formData = new FormData()
    const data = JSON.stringify({
      implementProcurement,
      manageFabrication,
      costControl,
      planningAndScheduling,
      deliverSuccessfulStartUp,
      handOver,
      manageSchedulesAndResources,
      manageCosts,
      LeadInterfaceManagement,
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
    })

    formData.append("data", data)
    formData.append("evaluateAndFrameOpportunitiesFile", evaluateAndFrameOpportunitiesFile as Blob)
    formData.append("deliverCommercialValueFile", deliverCommercialValueFile as Blob)
    formData.append("costEstimatingFile", costEstimatingFile as Blob)
    formData.append("probablisticCostFile", probablisticCostFile as Blob)
    formData.append("driveProjectPerformanceFile", driveProjectPerformanceFile as Blob)
    formData.append("projectRiskManagementFile", projectRiskManagementFile as Blob)
    formData.append("competitiveAndAffordableScopeFile", competitiveAndAffordableScopeFile as Blob)
    formData.append("leveragePortfolioBenefitFile", leveragePortfolioBenefitFile as Blob)
    formData.append("projectPortfolioBenchmarkingFile", projectPortfolioBenchmarkingFile as Blob)
    formData.append("manageDesignEngineeringFile", manageDesignEngineeringFile as Blob)
    formData.append(
      "developProjectExecutionStrategiesAndPlansFile",
      developProjectExecutionStrategiesAndPlansFile as Blob,
    )
    formData.append("contractAndContractorManagementFile", contractAndContractorManagementFile as Blob)
    formData.append("setUpLeadProjectTeamsFile", setUpLeadProjectTeamsFile as Blob)
    formData.append("workEfficientlyWithStakeholdersFile", workEfficientlyWithStakeholdersFile as Blob)
    formData.append("manageProjectComplexitiesFile", manageProjectComplexitiesFile as Blob)
    formData.append("manageQualityFile", manageQualityFile as Blob)
    formData.append("implementProcurementFile", implementProcurementFile as Blob)
    formData.append("manageFabricationFile", manageFabricationFile as Blob)
    formData.append("costControlFile", costControlFile as Blob)
    formData.append("planningAndSchedulingFile", planningAndSchedulingFile as Blob)
    formData.append("deliverSuccessfulStartUpFile", deliverSuccessfulStartUpFile as Blob)
    formData.append("handOverFile", handOverFile as Blob)
    formData.append("manageSchedulesAndResourcesFile", manageSchedulesAndResourcesFile as Blob)
    formData.append("manageCostsFile", manageCostsFile as Blob)
    formData.append("LeadInterfaceManagementFile", LeadInterfaceManagementFile as Blob)

    try {
      const { data } = await axios.post(`/api/assessment/${user.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log("success", data)
      router.push("/project")
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-center w-screen h-full min-h-screen text-white bg-blue-400">
      <div className="w-full px-12 py-6">
        <h1 className="text-xl font-bold text-center ">Assessment Checks</h1>
        <form onSubmit={handleContinue} className="w-full p-4 text-black bg-white">
          <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Business Case Study</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col space-y-2">
              <section>
                <h3>Evaluate & Frame Oppportunities</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setEvaluateAndFrameOpportunities(Number(target.value))}
                        type="radio"
                        value={1}
                        name="evaluateframeopportunities"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setEvaluateAndFrameOpportunities(Number(target.value))}
                        value={2}
                        type="radio"
                        name="evaluateframeopportunities"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setEvaluateAndFrameOpportunities(Number(target.value))}
                        value={3}
                        type="radio"
                        name="evaluateframeopportunities"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setEvaluateAndFrameOpportunitiesFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Deliver Commercial Value</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <label className="block">
                      <input
                        onChange={({ target }) => setDeliverCommercialValue(Number(target.value))}
                        name="deliverCommercialValue"
                        type="radio"
                        value={1}
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setDeliverCommercialValue(Number(target.value))}
                        value={2}
                        name="deliverCommercialValue"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setDeliverCommercialValue(Number(target.value))}
                        value={3}
                        name="deliverCommercialValue"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setDeliverCommercialValueFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Drive Project Performance</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <label className="block">
                      <input
                        onChange={({ target }) => setDriveProjectPerformance(Number(target.value))}
                        value={1}
                        name="driveProjectPerformance"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setDriveProjectPerformance(Number(target.value))}
                        value={2}
                        name="driveProjectPerformance"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setDriveProjectPerformance(Number(target.value))}
                        value={3}
                        name="driveProjectPerformance"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setDriveProjectPerformanceFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              {department === "TP" && (
                <>
                  <section>
                    <h3>Cost Estimating</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <label className="block">
                          <input
                            value={1}
                            name="costEstimating"
                            onChange={({ target }) => setCostEstimating(Number(target.value))}
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            value={2}
                            name="costEstimating"
                            onChange={({ target }) => setCostEstimating(Number(target.value))}
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            value={3}
                            name="costEstimating"
                            onChange={({ target }) => setCostEstimating(Number(target.value))}
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) =>
                            target?.files?.length ? setCostEstimatingFile(target.files[0]) : null
                          }
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3>Probablistic Cost & Schedule Risk Analysis</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <label className="block">
                          <input
                            onChange={({ target }) => setProbablisticCost(Number(target.value))}
                            value={1}
                            name="probablisticCost"
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            onChange={({ target }) => setProbablisticCost(Number(target.value))}
                            value={2}
                            name="probablisticCost"
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            onChange={({ target }) => setProbablisticCost(Number(target.value))}
                            value={3}
                            name="probablisticCost"
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) =>
                            target?.files?.length ? setProbablisticCostFile(target.files[0]) : null
                          }
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                </>
              )}
              <section>
                <h3>Project Risk Management</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setProjectRiskManagement(Number(target.value))}
                        value={1}
                        name="projectRiskManagement"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setProjectRiskManagement(Number(target.value))}
                        value={2}
                        name="projectRiskManagement"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setProjectRiskManagement(Number(target.value))}
                        value={3}
                        name="projectRiskManagement"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setProjectRiskManagementFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Competitive & Affordable Scope</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col space-y-2">
              <section>
                <h3>Select & Optimise Capital Efficient Project Concept</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setCompetitiveAndAffordableScope(Number(target.value))}
                        value={1}
                        name="competitiveAndAffordableScope"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setCompetitiveAndAffordableScope(Number(target.value))}
                        value={2}
                        name="competitiveAndAffordableScope"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setCompetitiveAndAffordableScope(Number(target.value))}
                        value={3}
                        name="competitiveAndAffordableScope"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setCompetitiveAndAffordableScopeFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Leverage Portfolio Benefit</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <label className="block">
                      <input
                        onChange={({ target }) => setLeveragePortfolioBenefit(Number(target.value))}
                        value={1}
                        name="leveragePortfolioBenefit"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setLeveragePortfolioBenefit(Number(target.value))}
                        value={2}
                        name="leveragePortfolioBenefit"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setLeveragePortfolioBenefit(Number(target.value))}
                        value={3}
                        name="leveragePortfolioBenefit"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setLeveragePortfolioBenefitFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Project/Portfolio Benchmarking</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setProjectPortfolioBenchmarking(Number(target.value))}
                        value={1}
                        name="projectPortfolioBenchmarking"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setProjectPortfolioBenchmarking(Number(target.value))}
                        value={2}
                        name="projectPortfolioBenchmarking"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setProjectPortfolioBenchmarking(Number(target.value))}
                        value={3}
                        name="projectPortfolioBenchmarking"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setProjectPortfolioBenchmarkingFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Manage Design Engineering</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setManageDesignEngineering(Number(target.value))}
                        value={1}
                        name="manageDesignEngineering"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setManageDesignEngineering(Number(target.value))}
                        value={2}
                        name="manageDesignEngineering"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setManageDesignEngineering(Number(target.value))}
                        value={3}
                        name="manageDesignEngineering"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setManageDesignEngineeringFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Lead Efficient Execution</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col space-y-2">
              <section>
                <h3>Develop Project Execution Strategies & Plans </h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setDevelopProjectExecutionStrategiesAndPlans(Number(target.value))}
                        value={1}
                        name="developProjectExecutionStrategiesAndPlans"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setDevelopProjectExecutionStrategiesAndPlans(Number(target.value))}
                        value={2}
                        name="developProjectExecutionStrategiesAndPlans"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setDevelopProjectExecutionStrategiesAndPlans(Number(target.value))}
                        value={3}
                        name="developProjectExecutionStrategiesAndPlans"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setDevelopProjectExecutionStrategiesAndPlansFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Contract & Contractor Management</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <label className="block">
                      <input
                        onChange={({ target }) => setContractAndContractorManagement(Number(target.value))}
                        value={1}
                        name="contractAndContractorManagement"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setContractAndContractorManagement(Number(target.value))}
                        value={2}
                        name="contractAndContractorManagement"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setContractAndContractorManagement(Number(target.value))}
                        value={3}
                        name="contractAndContractorManagement"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setContractAndContractorManagementFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Set up & Lead Project Teams</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setSetUpLeadProjectTeams(Number(target.value))}
                        value={1}
                        name="setUpLeadProjectTeams"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setSetUpLeadProjectTeams(Number(target.value))}
                        value={2}
                        name="setUpLeadProjectTeams"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setSetUpLeadProjectTeams(Number(target.value))}
                        value={3}
                        name="setUpLeadProjectTeams"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setSetUpLeadProjectTeamsFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Work Efficiently With Stakeholders</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setWorkEfficientlyWithStakeholders(Number(target.value))}
                        value={1}
                        name="workEfficientlyWithStakeholders"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setWorkEfficientlyWithStakeholders(Number(target.value))}
                        value={2}
                        name="workEfficientlyWithStakeholders"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setWorkEfficientlyWithStakeholders(Number(target.value))}
                        value={3}
                        name="workEfficientlyWithStakeholders"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setWorkEfficientlyWithStakeholdersFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Manage Project Complexities</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setManageProjectComplexities(Number(target.value))}
                        value={1}
                        name="manageProjectComplexities"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setManageProjectComplexities(Number(target.value))}
                        value={2}
                        name="manageProjectComplexities"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setManageProjectComplexities(Number(target.value))}
                        value={3}
                        name="manageProjectComplexities"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setManageProjectComplexitiesFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              {department === "TP" && (
                <section>
                  <h3>Manage Quality</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 ">
                      <label className="block">
                        <input
                          onChange={({ target }) => setManageQuality(Number(target.value))}
                          value={1}
                          name="manageQuality"
                          type="radio"
                        />{" "}
                        Awareness = Can describe in basic terms
                      </label>

                      <label className="block">
                        <input
                          onChange={({ target }) => setManageQuality(Number(target.value))}
                          value={2}
                          name="manageQuality"
                          type="radio"
                        />{" "}
                        Knowledge = Awareness plus, can explain and have an informed debate and participation
                      </label>
                      <label className="block">
                        <input
                          onChange={({ target }) => setManageQuality(Number(target.value))}
                          value={3}
                          name="manageQuality"
                          type="radio"
                        />{" "}
                        Skill = Knowledge plus, can do the work
                      </label>
                    </div>
                    <div>
                      <input
                        onChange={({ target }) =>
                          target?.files?.length ? setManageQualityFile(target.files[0]) : null
                        }
                        type={"file"}
                        placeholder="File:Attach file evidence"
                      />
                    </div>
                  </div>
                </section>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>Manage Efficient Execution</Typography>
            </AccordionSummary>

            <AccordionDetails className="flex flex-col space-y-2">
              {department === "TP" && (
                <>
                  <section>
                    <h3>Implement Procurement, Material Management & Logistics</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 ">
                        <label className="block">
                          <input
                            onChange={({ target }) => setImplementProcurement(Number(target.value))}
                            value={1}
                            name="implementProcurement"
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            onChange={({ target }) => setImplementProcurement(Number(target.value))}
                            value={2}
                            name="implementProcurement"
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            onChange={({ target }) => setImplementProcurement(Number(target.value))}
                            value={3}
                            name="implementProcurement"
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) =>
                            target?.files?.length ? setImplementProcurementFile(target.files[0]) : null
                          }
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3>Manage Fabrication & Construction</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1">
                        <label className="block">
                          <input
                            onChange={({ target }) => setManageFabrication(Number(target.value))}
                            value={1}
                            name="manageFabrication"
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            name="manageFabrication"
                            onChange={({ target }) => setManageFabrication(Number(target.value))}
                            value={2}
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            name="manageFabrication"
                            onChange={({ target }) => setManageFabrication(Number(target.value))}
                            value={3}
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) =>
                            target?.files?.length ? setManageFabricationFile(target.files[0]) : null
                          }
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3>Cost Controls</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 ">
                        <label className="block">
                          <input
                            onChange={({ target }) => setCostControl(Number(target.value))}
                            value={1}
                            name="costControl"
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            onChange={({ target }) => setCostControl(Number(target.value))}
                            value={2}
                            name="costControl"
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            onChange={({ target }) => setCostControl(Number(target.value))}
                            value={3}
                            name="costControl"
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) =>
                            target?.files?.length ? setCostControlFile(target.files[0]) : null
                          }
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3>Planning & Scheduling</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 ">
                        <label className="block">
                          <input
                            onChange={({ target }) => setPlanningAndScheduling(Number(target.value))}
                            value={1}
                            name="planningAndScheduling"
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            name="planningAndScheduling"
                            onChange={({ target }) => setPlanningAndScheduling(Number(target.value))}
                            value={2}
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            name="planningAndScheduling"
                            onChange={({ target }) => setPlanningAndScheduling(Number(target.value))}
                            value={3}
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) =>
                            target?.files?.length ? setPlanningAndSchedulingFile(target.files[0]) : null
                          }
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3>Deliver Successful Start Up & Operations</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 ">
                        <label className="block">
                          <input
                            onChange={({ target }) => setDeliverSuccessfulStartUp(Number(target.value))}
                            value={1}
                            name="deliverSuccessfulStartUp"
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            name="deliverSuccessfulStartUp"
                            onChange={({ target }) => setDeliverSuccessfulStartUp(Number(target.value))}
                            value={2}
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            name="deliverSuccessfulStartUp"
                            onChange={({ target }) => setDeliverSuccessfulStartUp(Number(target.value))}
                            value={3}
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) =>
                            target?.files?.length ? setDeliverSuccessfulStartUpFile(target.files[0]) : null
                          }
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3>Hand Over and Close Out Work</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 ">
                        <label className="block">
                          <input
                            name="handOver"
                            onChange={({ target }) => setHandOver(Number(target.value))}
                            value={1}
                            type="radio"
                          />{" "}
                          Awareness = Can describe in basic terms
                        </label>

                        <label className="block">
                          <input
                            name="handOver"
                            onChange={({ target }) => setHandOver(Number(target.value))}
                            value={2}
                            type="radio"
                          />{" "}
                          Knowledge = Awareness plus, can explain and have an informed debate and participation
                        </label>
                        <label className="block">
                          <input
                            name="handOver"
                            onChange={({ target }) => setHandOver(Number(target.value))}
                            value={3}
                            type="radio"
                          />{" "}
                          Skill = Knowledge plus, can do the work
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={({ target }) => (target?.files?.length ? setHandOverFile(target.files[0]) : null)}
                          type={"file"}
                          placeholder="File:Attach file evidence"
                        />
                      </div>
                    </div>
                  </section>
                </>
              )}
              <section>
                <h3>Manage Schedules & Resources </h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 ">
                    <label className="block">
                      <input
                        onChange={({ target }) => setManageSchedulesAndResources(Number(target.value))}
                        value={1}
                        name="manageSchedulesAndResources"
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        onChange={({ target }) => setManageSchedulesAndResources(Number(target.value))}
                        value={2}
                        name="manageSchedulesAndResources"
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        onChange={({ target }) => setManageSchedulesAndResources(Number(target.value))}
                        value={3}
                        name="manageSchedulesAndResources"
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) =>
                        target?.files?.length ? setManageSchedulesAndResourcesFile(target.files[0]) : null
                      }
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
              <section>
                <h3>Manage Costs</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <label className="block">
                      <input
                        name="manageCost"
                        onChange={({ target }) => setManageCosts(Number(target.value))}
                        value={1}
                        type="radio"
                      />{" "}
                      Awareness = Can describe in basic terms
                    </label>

                    <label className="block">
                      <input
                        name="manageCost"
                        onChange={({ target }) => setManageCosts(Number(target.value))}
                        value={2}
                        type="radio"
                      />{" "}
                      Knowledge = Awareness plus, can explain and have an informed debate and participation
                    </label>
                    <label className="block">
                      <input
                        name="manageCost"
                        onChange={({ target }) => setManageCosts(Number(target.value))}
                        value={3}
                        type="radio"
                      />{" "}
                      Skill = Knowledge plus, can do the work
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={({ target }) => (target?.files?.length ? setManageCostsFile(target.files[0]) : null)}
                      type={"file"}
                      placeholder="File:Attach file evidence"
                    />
                  </div>
                </div>
              </section>
            </AccordionDetails>
          </Accordion>
          {department === "TF" && (
            <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
              <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography>Interface Management</Typography>
              </AccordionSummary>
              <AccordionDetails className="flex flex-col space-y-2">
                <section>
                  <h3>Lead Interface Management</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 ">
                      <label className="block">
                        <input
                          onChange={({ target }) => setLeadInterfaceManagement(Number(target.value))}
                          value={1}
                          name="leadInterfaceManagement"
                          type="radio"
                        />{" "}
                        Awareness = Can describe in basic terms
                      </label>

                      <label className="block">
                        <input
                          onChange={({ target }) => setLeadInterfaceManagement(Number(target.value))}
                          value={2}
                          name="leadInterfaceManagement"
                          type="radio"
                        />{" "}
                        Knowledge = Awareness plus, can explain and have an informed debate and participation
                      </label>
                      <label className="block">
                        <input
                          onChange={({ target }) => setLeadInterfaceManagement(Number(target.value))}
                          value={3}
                          name="leadInterfaceManagement"
                          type="radio"
                        />{" "}
                        Skill = Knowledge plus, can do the work
                      </label>
                    </div>
                    <div>
                      <input
                        onChange={({ target }) =>
                          target?.files?.length ? setLeadInterfaceManagementFile(target.files[0]) : null
                        }
                        type={"file"}
                        placeholder="File:Attach file evidence"
                      />
                    </div>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
          )}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isLoading}
              onClick={handleContinue}
              className="px-4 py-2 text-white bg-blue-600 "
            >
              {isLoading ? "Processing..." : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { req, res } = context
  const session = await getSession({ req })
  console.log("session", session?.user)
  if (!!!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/?redirect=/assessment",
      },
    }
  }
  try {
    const { data } = await axios.get(`http://localhost:3000/api/user/${session.user.id}`)
    console.log("data", data)
    if (data && data.assessment && data.assessment.id) {
      return {
        redirect: {
          permanent: false,
          destination: "/project",
        },
      }
    }
  } catch (error: any) {
    console.log(error.message)
  }

  return {
    props: { user: session?.user },
  }
}

export default Assessment
