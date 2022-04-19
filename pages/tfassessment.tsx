import { useEffect, useState } from "react"
import EducationTable from "../components/templates/EducationTable"
import SummaryTable from "../components/templates/SummaryTable"
import CvDashboard from "../components/templates/cvdashboard"
import axios from "axios"
import { getSession } from "next-auth/react"

const pone = {
  evaluateAndFrameOpportunitiesLineEntry: "S",
  deliverCommercialValueLineEntry: "S",
  costEstimatingLineEntry: "K",
  projectRiskManagementLineEntry: "S",
  probablisticCostLineEntry: "S",
  driveProjectPerformanceLineEntry: "S",
  leveragePortfolioBenefitLineEntry: "S",
  projectPortfolioBenchmarkingLineEntry: "S",
  manageDesignEngineeringLineEntry: "S",
  developProjectExecutionStrategiesAndPlansLineEntry: "S",
  contractAndContractorManagementLineEntry: "S",
  setUpLeadProjectTeamsLineEntry: "S",
  workEfficientlyWithStakeholdersLineEntry: "S",
  manageProjectComplexitiesLineEntry: "S",
  manageQualityLineEntry: "S",
  implementProcurementLineEntry: "S",
  manageFabricationLineEntry: "S",
  planningAndSchedulingLineEntry: "S",
  manageCostsLineEntry: "S",
  costControlLineEntry: "S",
  deliverSuccessfulStartUpLineEntry: "S",
  handOverLineEntry: "S",
}
const ptwo = {
  evaluateAndFrameOpportunitiesLineEntry: "S",
  deliverCommercialValueLineEntry: "K",
  costEstimatingLineEntry: "K",
  projectRiskManagementLineEntry: "S",
  probablisticCostLineEntry: "S",
  driveProjectPerformanceLineEntry: "S",
  leveragePortfolioBenefitLineEntry: "S",
  projectPortfolioBenchmarkingLineEntry: "S",
  manageDesignEngineeringLineEntry: "S",
  developProjectExecutionStrategiesAndPlansLineEntry: "S",
  contractAndContractorManagementLineEntry: "S",
  setUpLeadProjectTeamsLineEntry: "K",
  workEfficientlyWithStakeholdersLineEntry: "S",
  manageProjectComplexitiesLineEntry: "K",
  manageQualityLineEntry: "S",
  implementProcurementLineEntry: "S",
  manageFabricationLineEntry: "S",
  planningAndSchedulingLineEntry: "S",
  manageCostsLineEntry: "S",
  costControlLineEntry: "S",
  deliverSuccessfulStartUpLineEntry: "S",
  handOverLineEntry: "S",
}
const pthree = {
  evaluateAndFrameOpportunitiesLineEntry: "A",
  deliverCommercialValueLineEntry: "K",
  costEstimatingLineEntry: "K",
  projectRiskManagementLineEntry: "S",
  probablisticCostLineEntry: "K",
  driveProjectPerformanceLineEntry: "S",
  leveragePortfolioBenefitLineEntry: "K",
  projectPortfolioBenchmarkingLineEntry: "S",
  manageDesignEngineeringLineEntry: "K",
  developProjectExecutionStrategiesAndPlansLineEntry: "S",
  contractAndContractorManagementLineEntry: "S",
  setUpLeadProjectTeamsLineEntry: "K",
  workEfficientlyWithStakeholdersLineEntry: "K",
  manageProjectComplexitiesLineEntry: "K",
  manageQualityLineEntry: "K",
  implementProcurementLineEntry: "S",
  manageFabricationLineEntry: "K",
  planningAndSchedulingLineEntry: "S",
  manageCostsLineEntry: "S",
  costControlLineEntry: "K",
  deliverSuccessfulStartUpLineEntry: "S",
  handOverLineEntry: "S",
}

const pfour = {
  evaluateAndFrameOpportunitiesLineEntry: "A",
  deliverCommercialValueLineEntry: "K",
  costEstimatingLineEntry: "A",
  projectRiskManagementLineEntry: "S",
  probablisticCostLineEntry: "K",
  driveProjectPerformanceLineEntry: "K",
  leveragePortfolioBenefitLineEntry: "A",
  projectPortfolioBenchmarkingLineEntry: "K",
  manageDesignEngineeringLineEntry: "K",
  developProjectExecutionStrategiesAndPlansLineEntry: "S",
  contractAndContractorManagementLineEntry: "K",
  setUpLeadProjectTeamsLineEntry: "A",
  workEfficientlyWithStakeholdersLineEntry: "K",
  manageProjectComplexitiesLineEntry: "A",
  manageQualityLineEntry: "K",
  implementProcurementLineEntry: "K",
  manageFabricationLineEntry: "K",
  planningAndSchedulingLineEntry: "S",
  manageCostsLineEntry: "S",
  costControlLineEntry: "K",
  deliverSuccessfulStartUpLineEntry: "K",
  handOverLineEntry: "K",
}

const pfive = {
  evaluateAndFrameOpportunitiesLineEntry: "A",
  deliverCommercialValueLineEntry: "K",
  costEstimatingLineEntry: "A",
  projectRiskManagementLineEntry: "K",
  probablisticCostLineEntry: "K",
  driveProjectPerformanceLineEntry: "K",
  leveragePortfolioBenefitLineEntry: "A",
  projectPortfolioBenchmarkingLineEntry: "K",
  manageDesignEngineeringLineEntry: "K",
  developProjectExecutionStrategiesAndPlansLineEntry: "K",
  contractAndContractorManagementLineEntry: "K",
  setUpLeadProjectTeamsLineEntry: "A",
  workEfficientlyWithStakeholdersLineEntry: "K",
  manageProjectComplexitiesLineEntry: "A",
  manageQualityLineEntry: "S",
  implementProcurementLineEntry: "S",
  manageFabricationLineEntry: "K",
  planningAndSchedulingLineEntry: "S",
  manageCostsLineEntry: "S",
  costControlLineEntry: "K",
  deliverSuccessfulStartUpLineEntry: "K",
  handOverLineEntry: "K",
}

function getTargetLevel(projectLevel: string) {
  switch (projectLevel) {
    case "Project Practitioner  - Level 1":
      return pfour
    case "Project Services - Level 1":
      return pfive
    case "Project Services - Level 2":
      return pthree
    case "Project Practioner - Level 2":
      return ptwo
    case "Project Services - Level 3":
      return pone
    default:
      break
  }
}

function getCompetenceLevel(projectLevel: string) {
  switch (projectLevel) {
    case "Project Practitioner  - Level 1":
      return 2
    case "Project Services - Level 1":
      return 1
    case "Project Services - Level 2":
      return 3
    case "Project Practioner - Level 2":
      return 4
    case "Project Services - Level 3":
      return 5
    default:
      break
  }
}

function getEntry(entry: number) {
  switch (entry) {
    case 1:
      return "A"
      break
    case 2:
      return "K"
      break
    case 3:
      return "S"
      break
    default:
      return "E"
      break
  }
}

function getEntryScore(entry: string) {
  switch (entry) {
    case "A":
      return 1
      break
    case "K":
      return 2
      break
    case "S":
      return 3
      break
    default:
      return 0
      break
  }
}

const lineEntry = [
  {
    key: "A",
    value: 1,
  },
  {
    key: "K",
    value: 2,
  },
  {
    key: "S",
    value: 3,
  },
]

const TFAssessment = ({ user }: any) => {
  const [evaluateAndFrameOpportunitiesLineEntry, setEvaluateAndFrameOpportunitiesLineEntry] = useState(0)
  const [evaluateAndFrameOpportunitiesAssessorEntry, setEvaluateAndFrameOpportunitiesAssessorEntry] = useState(0)
  const [deliverCommercialValueLineEntry, setDeliverCommercialValueLineEntry] = useState(0)
  const [deliverCommercialValueAssessorEntry, setDeliverCommercialValueAssessorEntry] = useState(0)
  const [costEstimatingLineEntry, setCostEstimatingLineEntry] = useState(0)
  const [costEstimatingAssessorEntry, setCostEstimatingAssessorEntry] = useState(0)
  const [projectRiskManagementLineEntry, setProjectRiskManagementLineEntry] = useState(0)
  const [projectRiskManagementAssesorEntry, setProjectRiskManagementAssesorEntry] = useState(0)
  const [probablisticCostLineEntry, setProbablisticCostLineEntry] = useState(0)
  const [probablisticCostAssessorEntry, setProbablisticCostAssesorEntry] = useState(0)
  const [driveProjectPerformanceLineEntry, setDriveProjectPerformanceLineEntry] = useState(0)
  const [driveProjectPerformanceAssesorEntry, setDriveProjectPerformanceAssesorEntry] = useState(0)
  const [leveragePortfolioBenefitLineEntry, setLeveragePortfolioBenefitLineEntry] = useState(0)
  const [leveragePortfolioBenefitAssesorEntry, setLeveragePortfolioBenefitAssesorEntry] = useState(0)
  const [projectPortfolioBenchmarkingLineEntry, setProjectPortfolioBenchmarkingLineEntry] = useState(0)
  const [projectPortfolioBenchmarkingAssesorEntry, setProjectPortfolioBenchmarkingAssesorEntry] = useState(0)
  const [manageDesignEngineeringLineEntry, setManageDesignEngineeringLineEntry] = useState(0)
  const [manageDesignEngineeringAssesorEntry, setManageDesignEngineeringAssesorEntry] = useState(0)
  const [developProjectExecutionStrategiesAndPlansLineEntry, setDevelopProjectExecutionStrategiesAndPlansLineEntry] =
    useState(0)
  const [
    developProjectExecutionStrategiesAndPlansAssesorEntry,
    setDevelopProjectExecutionStrategiesAndPlansAssesorEntry,
  ] = useState(0)
  const [contractAndContractorManagementLineEntry, setContractAndContractorManagementLineEntry] = useState(0)
  const [contractAndContractorManagementAssesorEntry, setContractAndContractorManagementAssesorEntry] = useState(0)
  const [setUpLeadProjectTeamsLineEntry, setSetUpLeadProjectTeamsLineEntry] = useState(0)
  const [setUpLeadProjectTeamsAssessorEntry, setSetUpLeadProjectTeamsAssessorEntry] = useState(0)
  const [workEfficientlyWithStakeholdersLineEntry, setWorkEfficientlyWithStakeholdersLineEntry] = useState(0)
  const [workEfficientlyWithStakeholdersAssesorEntry, setWorkEfficientlyWithStakeholdersAssesorEntry] = useState(0)
  const [manageProjectComplexitiesLineEntry, setManageProjectComplexitiesLineEntry] = useState(0)
  const [manageProjectComplexitiesAssesorEntry, setManageProjectComplexitiesAssesorEntry] = useState(0)
  const [manageQualityLineEntry, setManageQualityLineEntry] = useState(0)
  const [manageQualityAssesorEntry, setManageQualityAssesorEntry] = useState(0)
  const [implementProcurementLineEntry, setImplementProcurementLineEntry] = useState(0)
  const [implementProcurementAssesorEntry, setImplementProcurementAssesorEntry] = useState(0)
  const [manageFabricationLineEntry, setManageFabricationLineEntry] = useState(0)
  const [manageFabricationAssesorEntry, setManageFabricationAssesorEntry] = useState(0)
  const [planningAndSchedulingLineEntry, setPlanningAndSchedulingLineEntry] = useState(0)
  const [planningAndSchedulingAssesorEntry, setPlanningAndSchedulingAssesorEntry] = useState(0)
  const [manageCostsLineEntry, setManageCostsLineEntry] = useState(0)
  const [manageCostsAssesorEntry, setManageCostsAssesorEntry] = useState(0)
  const [costControlLineEntry, setCostControlLineEntry] = useState(0)
  const [costControlAssesorEntry, setCostControlAssesorEntry] = useState(0)
  const [deliverSuccessfulStartUpLineEntry, setDeliverSuccessfulStartUpLineEntry] = useState(0)
  const [deliverSuccessfulStartUpAssesorEntry, setDeliverSuccessfulStartUpAssesorEntry] = useState(0)
  const [handOverLineEntry, setHandOverLineEntry] = useState(0)
  const [handOverAssesorEntry, setHandOverAssesorEntry] = useState(0)

  const [targetLevel, _] = useState(() => getTargetLevel(user.department.projectLevel))
  const totalAssessorEntry =
    evaluateAndFrameOpportunitiesAssessorEntry +
    deliverCommercialValueAssessorEntry +
    costEstimatingAssessorEntry +
    projectRiskManagementAssesorEntry +
    probablisticCostAssessorEntry +
    driveProjectPerformanceAssesorEntry +
    leveragePortfolioBenefitAssesorEntry +
    projectPortfolioBenchmarkingAssesorEntry +
    manageDesignEngineeringAssesorEntry +
    developProjectExecutionStrategiesAndPlansAssesorEntry +
    contractAndContractorManagementAssesorEntry +
    setUpLeadProjectTeamsAssessorEntry +
    workEfficientlyWithStakeholdersAssesorEntry +
    manageProjectComplexitiesAssesorEntry +
    manageQualityAssesorEntry +
    implementProcurementAssesorEntry +
    manageFabricationAssesorEntry +
    planningAndSchedulingAssesorEntry +
    manageCostsAssesorEntry +
    costControlAssesorEntry +
    deliverSuccessfulStartUpAssesorEntry +
    handOverAssesorEntry

  const totalLineEntry =
    evaluateAndFrameOpportunitiesLineEntry +
    deliverCommercialValueLineEntry +
    costEstimatingLineEntry +
    projectRiskManagementLineEntry +
    probablisticCostLineEntry +
    driveProjectPerformanceLineEntry +
    leveragePortfolioBenefitLineEntry +
    projectPortfolioBenchmarkingLineEntry +
    manageDesignEngineeringLineEntry +
    developProjectExecutionStrategiesAndPlansLineEntry +
    contractAndContractorManagementLineEntry +
    setUpLeadProjectTeamsLineEntry +
    workEfficientlyWithStakeholdersLineEntry +
    manageProjectComplexitiesLineEntry +
    manageQualityLineEntry +
    implementProcurementLineEntry +
    manageFabricationLineEntry +
    planningAndSchedulingLineEntry +
    manageCostsLineEntry +
    costControlLineEntry +
    deliverSuccessfulStartUpLineEntry +
    handOverLineEntry

  function totalLinePercent() {
    console.log(totalLineEntry)
    return Math.floor((totalLineEntry / 67) * 100)
  }
  function totalAssessorPercent() {
    return Math.floor((totalAssessorEntry / 67) * 100)
  }
  useEffect(() => {
    console.log("users", user)

    return () => {}
  }, [user])

  function calcWeighedLineScore(lineScore: number, competence: number) {
    //linescore / competence standard * 5
    return (lineScore / competence) * 5
  }

  return (
    <div className="w-screen h-full min-h-screen ">
      <h1 className="text-2xl font-bold text-purple-600 ">TF Assessment</h1>
      <div className="flex items-center pr-16 mr-16 space-x-52">
        <div className="flex-1">
          <div className="flex border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Staff Name:</div>
              <div className="p-3 border-r border-black">{user.project.fullName ?? ""}</div>
            </div>
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Ref Indicator</div>
              <div className="p-3 border-r border-black">{user.project?.refIndicator ?? ""}</div>
            </div>
          </div>
          <div className="flex mt-3 border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Assessor</div>
              <div className="p-3 border-r border-black">
                <input type="text" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Assessment Date</div>
              <div className="p-3 border-r border-black">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="flex mt-3 border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">PL Designation</div>
              <div className="p-3 border-r border-black">Front End Engineer</div>
            </div>
          </div>
          <div className="flex mt-3 border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Project Level</div>
              <div className="p-3 border-r border-black">{user.department?.projectLevel ?? ""}</div>
            </div>
          </div>
        </div>
        <div className="h-32 text-white bg-red-500 border-2 border-black w-60">
          <div>
            Proceed to final Assessment by an independent assessor only when Line Head agrees project JCP score has met
            minimum criteria of 80%
          </div>
        </div>
      </div>
      <div className="my-4 ">
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>Project Discipline Job Competence Profiles</th>
              <th style={{ border: "1px solid black" }}>Target Levels</th>
              <th style={{ border: "1px solid black" }}>Staff Entry</th>
              <th style={{ border: "1px solid black" }}>Evidence</th>
              <th style={{ border: "1px solid black" }}>Line Entry</th>
              <th style={{ border: "1px solid black" }}>Staff Score</th>
              <th style={{ border: "1px solid black" }}>Line Score</th>
              <th style={{ border: "1px solid black" }}>Weighted Line Score</th>
              <th style={{ border: "1px solid black" }}>Assessor Entry</th>
              <th style={{ border: "1px solid black" }}>Weighted Assessor Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                <div className="font-bold text-blue-600">
                  <h1 className="text-xl font-bold text-blue-600 ">COMPETENCY LEVELS</h1>
                  <p>A = Awareness and Understanding</p>
                  <p>K = Working Knowledge</p>
                  <p>S = Skill</p>
                </div>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <div className="flex items-center justify-center h-full text-2xl font-extrabold">{`${totalLinePercent()}%`}</div>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <div className="flex items-center justify-center h-full text-2xl font-extrabold">{`${totalAssessorPercent()}%`}</div>
              </td>
            </tr>
            <tr>
              <td
                className="text-base font-bold text-center text-blue-600"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                competence level
              </td>
              <td className="text-center" style={{ border: "1px solid black", padding: "10px" }}>
                {getCompetenceLevel(user.department.projectLevel)}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td
                className={`text-lg font-extrabold ${totalLinePercent() > 50 ? " text-green-500" : "text-red-500 "} `}
                style={{ border: "1px solid black", padding: "10px" }}
              >
                {totalLinePercent() > 80 ? "Achieved" : "Not Achieved"}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td
                className={`text-lg font-extrabold ${
                  totalAssessorPercent() > 80 ? " text-green-500" : "text-red-500 "
                } `}
                style={{ border: "1px solid black", padding: "10px" }}
              >
                {totalAssessorPercent() > 80 ? "Achieved" : "Not Achieved"}
              </td>
            </tr>
            <tr className="font-bold text-center text-black bg-yellow-400 ">
              <td style={{ border: "1px solid black" }}>Project competence</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr className="font-bold text-center text-black bg-pink-200 ">
              <td style={{ border: "1px solid black" }}>Business Case Value</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>
                Evaluate & Frame Opportunities
                {/* <a href={evaluateAndFrameOpportunitiesFile}>Evaluate & Frame Opportunities</a> */}
              </td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.evaluateAndFrameOpportunitiesLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.evaluateAndFrameOpportunities ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setEvaluateAndFrameOpportunitiesLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.evaluateAndFrameOpportunities ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{evaluateAndFrameOpportunitiesLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  evaluateAndFrameOpportunitiesLineEntry,
                  getEntryScore(targetLevel?.evaluateAndFrameOpportunitiesLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setEvaluateAndFrameOpportunitiesAssessorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  evaluateAndFrameOpportunitiesAssessorEntry,
                  getEntryScore(targetLevel?.evaluateAndFrameOpportunitiesLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Deliver Commercial Values</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.deliverCommercialValueLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.deliverCommercialValue ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setDeliverCommercialValueLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.deliverCommercialValue ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{deliverCommercialValueLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  deliverCommercialValueLineEntry,
                  getEntryScore(targetLevel?.deliverCommercialValueLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setDeliverCommercialValueAssessorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  deliverCommercialValueAssessorEntry,
                  getEntryScore(targetLevel?.deliverCommercialValueLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Cost Estimating</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.costEstimatingLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.costEstimating ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setCostEstimatingLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.costEstimating ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{costEstimatingLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  costEstimatingLineEntry,
                  getEntryScore(targetLevel?.costEstimatingLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setCostEstimatingAssessorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  costEstimatingAssessorEntry,
                  getEntryScore(targetLevel?.costEstimatingLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Project Risk Management</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.projectRiskManagementLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.projectRiskManagement ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setProjectRiskManagementLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.projectRiskManagement ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{projectRiskManagementLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  projectRiskManagementLineEntry,
                  getEntryScore(targetLevel?.projectRiskManagementLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setProjectRiskManagementAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  projectRiskManagementAssesorEntry,
                  getEntryScore(targetLevel?.projectRiskManagementLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Probablistic Cost & schedule Risk Analysis</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.probablisticCostLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.probablisticCost ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setProbablisticCostLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.probablisticCost ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{probablisticCostLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  probablisticCostLineEntry,
                  getEntryScore(targetLevel?.probablisticCostLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setProbablisticCostAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  probablisticCostAssessorEntry,
                  getEntryScore(targetLevel?.probablisticCostLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Drive & project performance</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.driveProjectPerformanceLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.driveProjectPerformance ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setDriveProjectPerformanceLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.driveProjectPerformance ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{driveProjectPerformanceLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  driveProjectPerformanceLineEntry,
                  getEntryScore(targetLevel?.driveProjectPerformanceLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setDriveProjectPerformanceAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  driveProjectPerformanceAssesorEntry,
                  getEntryScore(targetLevel?.driveProjectPerformanceLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="font-bold text-center text-black bg-pink-200 ">
              <td style={{ border: "1px solid black" }}>Competitive and Affordable Scope</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Select & Optimize Capital Efficient Project Concepts</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.driveProjectPerformance ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.driveProjectPerformance ?? 0}</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>0</td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Leverage Portfolio benefits</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.leveragePortfolioBenefitLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.leveragePortfolioBenefit ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setLeveragePortfolioBenefitLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.leveragePortfolioBenefit ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{leveragePortfolioBenefitLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  leveragePortfolioBenefitLineEntry,
                  getEntryScore(targetLevel?.leveragePortfolioBenefitLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setLeveragePortfolioBenefitAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  leveragePortfolioBenefitAssesorEntry,
                  getEntryScore(targetLevel?.leveragePortfolioBenefitLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Project/Portfolio Benchmarking</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.projectPortfolioBenchmarkingLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.projectPortfolioBenchmarking ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setProjectPortfolioBenchmarkingLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.projectPortfolioBenchmarking ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{projectPortfolioBenchmarkingLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  projectPortfolioBenchmarkingLineEntry,
                  getEntryScore(targetLevel?.projectPortfolioBenchmarkingLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setProjectPortfolioBenchmarkingAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  projectPortfolioBenchmarkingAssesorEntry,
                  getEntryScore(targetLevel?.projectPortfolioBenchmarkingLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Design & Engineering</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageDesignEngineeringLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageDesignEngineering ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageDesignEngineeringLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageDesignEngineering ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{manageDesignEngineeringLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageDesignEngineeringLineEntry,
                  getEntryScore(targetLevel?.manageDesignEngineeringLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageDesignEngineeringAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageDesignEngineeringAssesorEntry,
                  getEntryScore(targetLevel?.manageDesignEngineeringLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="font-bold text-center text-black bg-pink-200 ">
              <td style={{ border: "1px solid black" }}>Lead Efficient Execution</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Develop project Execution Strategies and plans</td>
              <td style={{ border: "1px solid black" }}>
                {targetLevel?.developProjectExecutionStrategiesAndPlansLineEntry ?? ""}
              </td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.developProjectExecutionStrategiesAndPlans ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setDevelopProjectExecutionStrategiesAndPlansLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {user.assessment?.developProjectExecutionStrategiesAndPlans ?? 0}
              </td>
              <td style={{ border: "1px solid black" }}>{developProjectExecutionStrategiesAndPlansLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  developProjectExecutionStrategiesAndPlansLineEntry,
                  getEntryScore(targetLevel?.developProjectExecutionStrategiesAndPlansLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  onChange={({ target }) => setDevelopProjectExecutionStrategiesAndPlansAssesorEntry(+target.value)}
                >
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  developProjectExecutionStrategiesAndPlansAssesorEntry,
                  getEntryScore(targetLevel?.developProjectExecutionStrategiesAndPlansLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Contract and Contractor Management</td>
              <td style={{ border: "1px solid black" }}>
                {targetLevel?.contractAndContractorManagementLineEntry ?? ""}
              </td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.contractAndContractorManagement ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setContractAndContractorManagementLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.contractAndContractorManagement ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{contractAndContractorManagementLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  contractAndContractorManagementLineEntry,
                  getEntryScore(targetLevel?.contractAndContractorManagementLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setContractAndContractorManagementAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  contractAndContractorManagementAssesorEntry,
                  getEntryScore(targetLevel?.contractAndContractorManagementLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Set up and & Lead Project Teams</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.setUpLeadProjectTeamsLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.setUpLeadProjectTeams ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setSetUpLeadProjectTeamsLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.setUpLeadProjectTeams ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{setUpLeadProjectTeamsLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  setUpLeadProjectTeamsLineEntry,
                  getEntryScore(targetLevel?.setUpLeadProjectTeamsLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setSetUpLeadProjectTeamsAssessorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  setUpLeadProjectTeamsAssessorEntry,
                  getEntryScore(targetLevel?.setUpLeadProjectTeamsLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Work Effectively with Stakeholders</td>
              <td style={{ border: "1px solid black" }}>
                {targetLevel?.workEfficientlyWithStakeholdersLineEntry ?? ""}
              </td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.workEfficientlyWithStakeholders ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setWorkEfficientlyWithStakeholdersLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.workEfficientlyWithStakeholders ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{workEfficientlyWithStakeholdersLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  workEfficientlyWithStakeholdersLineEntry,
                  getEntryScore(targetLevel?.workEfficientlyWithStakeholdersLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setWorkEfficientlyWithStakeholdersAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  workEfficientlyWithStakeholdersAssesorEntry,
                  getEntryScore(targetLevel?.workEfficientlyWithStakeholdersLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Project Complexity</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageProjectComplexitiesLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageProjectComplexities ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageProjectComplexitiesLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageProjectComplexities ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{manageProjectComplexitiesLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageProjectComplexitiesLineEntry,
                  getEntryScore(targetLevel?.manageProjectComplexitiesLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageProjectComplexitiesAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageProjectComplexitiesAssesorEntry,
                  getEntryScore(targetLevel?.manageProjectComplexitiesLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Quality</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageQualityLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageQuality ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageQualityLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageQuality ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{manageQualityLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(manageQualityLineEntry, getEntryScore(targetLevel?.manageQualityLineEntry ?? ""))}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageQualityAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageQualityAssesorEntry,
                  getEntryScore(targetLevel?.manageQualityLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="font-bold text-center text-black bg-pink-200 ">
              <td style={{ border: "1px solid black" }}>Manage Efficient Execution</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Implement Procurement Material Management & Logistics</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.implementProcurementLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.implementProcurement ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setImplementProcurementLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.implementProcurement ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{implementProcurementLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  implementProcurementLineEntry,
                  getEntryScore(targetLevel?.implementProcurementLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setImplementProcurementAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  implementProcurementAssesorEntry,
                  getEntryScore(targetLevel?.implementProcurementLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Fabrication & Construction</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageFabricationLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageFabrication ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageFabricationLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageFabrication ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{manageFabricationLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageFabricationLineEntry,
                  getEntryScore(targetLevel?.manageFabricationLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageFabricationAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageFabricationAssesorEntry,
                  getEntryScore(targetLevel?.manageFabricationLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Planning & Scheduling</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.planningAndSchedulingLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.planningAndScheduling ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setPlanningAndSchedulingLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.planningAndScheduling ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{planningAndSchedulingLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  planningAndSchedulingLineEntry,
                  getEntryScore(targetLevel?.planningAndSchedulingLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setPlanningAndSchedulingAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  planningAndSchedulingAssesorEntry,
                  getEntryScore(targetLevel?.planningAndSchedulingLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Cost</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageCostsLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageCosts ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageCostsLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageCosts ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{manageCostsLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(manageCostsLineEntry, getEntryScore(targetLevel?.manageCostsLineEntry ?? ""))}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setManageCostsAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(manageCostsAssesorEntry, getEntryScore(targetLevel?.manageCostsLineEntry ?? ""))}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Cost Controls</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.costControlLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.costControl ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setCostControlLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.costControl ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{costControlLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(costControlLineEntry, getEntryScore(targetLevel?.costControlLineEntry ?? ""))}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setCostControlAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(costControlAssesorEntry, getEntryScore(targetLevel?.costControlLineEntry ?? ""))}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Deliver Successfull Start Up & Operation</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.deliverSuccessfulStartUpLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.deliverSuccessfulStartUp ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setDeliverSuccessfulStartUpLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.deliverSuccessfulStartUp ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{deliverSuccessfulStartUpLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  deliverSuccessfulStartUpLineEntry,
                  getEntryScore(targetLevel?.deliverSuccessfulStartUpLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setDeliverSuccessfulStartUpAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  deliverSuccessfulStartUpAssesorEntry,
                  getEntryScore(targetLevel?.deliverSuccessfulStartUpLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Hand Over & Close out Work</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.handOverLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.handOver ?? 0)}</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setHandOverLineEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.handOver ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{handOverLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(handOverLineEntry, getEntryScore(targetLevel?.handOverLineEntry ?? ""))}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select onChange={({ target }) => setHandOverAssesorEntry(+target.value)}>
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(handOverAssesorEntry, getEntryScore(targetLevel?.handOverLineEntry ?? ""))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <CvDashboard user={user} />
      </div>
      <div className="my-8">
        <SummaryTable project={user?.project?.projects ?? []} />
      </div>
      <div className="my-8">
        <EducationTable education={user?.project?.education ?? []} />
      </div>
      <div className="p-3">
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}></th>
              <th style={{ border: "1px solid black" }}>Signature</th>
              <th style={{ border: "1px solid black" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>Employee</td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Assessor</td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Supervisor</td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
              <td style={{ border: "1px solid black" }}>
                <input type={"text"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { req, res, query } = context
  const session = await getSession({ req })
  console.log("session", session?.user)
  if (!!!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/?redirect=/department",
      },
    }
  } else {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/user/${query.id}`)
      console.log("data", data)
      if (data) {
        return {
          props: {
            user: data,
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
}

export default TFAssessment
