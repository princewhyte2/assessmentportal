import { useEffect, useState } from "react"
import EducationTable from "../components/templates/EducationTable"
import SummaryTable from "../components/templates/SummaryTable"
import CvDashboard from "../components/templates/cvdashboard"
import axios from "axios"
import { getSession } from "next-auth/react"

const pone = {
  evaluateAndFrameOpportunitiesLineEntry: "S",
  deliverCommercialValueLineEntry: "S",
  projectRiskManagementLineEntry: "S",
  competitiveAndAffordableScopeLineEntry: "S",
  driveProjectPerformanceLineEntry: "S",
  leveragePortfolioBenefitLineEntry: "S",
  projectPortfolioBenchmarkingLineEntry: "S",
  manageDesignEngineeringLineEntry: "S",
  manageSchedulesAndResourcesLineEntry: "S",
  developProjectExecutionStrategiesAndPlansLineEntry: "S",
  contractAndContractorManagementLineEntry: "S",
  setUpLeadProjectTeamsLineEntry: "S",
  workEfficientlyWithStakeholdersLineEntry: "S",
  manageProjectComplexitiesLineEntry: "S",
  manageCostsLineEntry: "S",
  leadInterfaceManagementLineEntry: "S",
}
const ptwo = {
  evaluateAndFrameOpportunitiesLineEntry: "S",
  deliverCommercialValueLineEntry: "S",
  projectRiskManagementLineEntry: "S",
  driveProjectPerformanceLineEntry: "K",
  competitiveAndAffordableScopeLineEntry: "S",
  leveragePortfolioBenefitLineEntry: "K",
  projectPortfolioBenchmarkingLineEntry: "S",
  manageDesignEngineeringLineEntry: "S",
  developProjectExecutionStrategiesAndPlansLineEntry: "S",
  contractAndContractorManagementLineEntry: "K",
  setUpLeadProjectTeamsLineEntry: "K",
  workEfficientlyWithStakeholdersLineEntry: "K",
  manageProjectComplexitiesLineEntry: "K",
  manageSchedulesAndResourcesLineEntry: "S",
  manageCostsLineEntry: "S",
  leadInterfaceManagementLineEntry: "S",
}
const pthree = {
  evaluateAndFrameOpportunitiesLineEntry: "S",
  deliverCommercialValueLineEntry: "K",
  projectRiskManagementLineEntry: "K",
  driveProjectPerformanceLineEntry: "K",
  competitiveAndAffordableScopeLineEntry: "S",
  leveragePortfolioBenefitLineEntry: "A",
  projectPortfolioBenchmarkingLineEntry: "K",
  manageDesignEngineeringLineEntry: "K",
  developProjectExecutionStrategiesAndPlansLineEntry: "K",
  contractAndContractorManagementLineEntry: "K",
  setUpLeadProjectTeamsLineEntry: "A",
  workEfficientlyWithStakeholdersLineEntry: "A",
  manageProjectComplexitiesLineEntry: "K",
  manageSchedulesAndResourcesLineEntry: "K",
  manageCostsLineEntry: "K",
  leadInterfaceManagementLineEntry: "K",
}

function getTargetLevel(projectLevel: string) {
  switch (projectLevel.trim()) {
    case "Front-End Engineer - Level 3".trim():
      return pone
    case "Front-End Engineer - Level 2".trim():
      return ptwo
    case "Front-End Engineer - Level 1".trim():
      return pthree
    default:
      break
  }
}

function getCompetenceLevel(projectLevel: string) {
  switch (projectLevel.trim()) {
    case "Front-End Engineer - Level 1".trim():
      return 1
    case "Front-End Engineer - Level 2".trim():
      return 2
    case "Front-End Engineer - Level 3".trim():
      return 3
    default:
      break
  }
}
function getDivisor(projectLevel: string) {
  switch (projectLevel.trim()) {
    case "Front-End Engineer - Level 1".trim():
      return 7
    case "Front-End Engineer - Level 2".trim():
      return 7
    case "Front-End Engineer - Level 3".trim():
      return 6
    default:
      return 0
  }
}

function getEntry(entry: number) {
  switch (entry) {
    case 1:
      return "A"
    case 2:
      return "K"
    case 3:
      return "S"
    default:
  }
}

function getEntryScore(entry: string) {
  switch (entry) {
    case "A":
      return 1
    case "K":
      return 2
    case "S":
      return 3
    default:
      return 0
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
  const [evaluateAndFrameOpportunitiesLineEntry, setEvaluateAndFrameOpportunitiesLineEntry] = useState(
    user.assessment.evaluateAndFrameOpportunitiesLineEntry ?? 1,
  )
  const [evaluateAndFrameOpportunitiesAssessorEntry, setEvaluateAndFrameOpportunitiesAssessorEntry] = useState(
    user.assessment.evaluateAndFrameOpportunitiesAssessorEntry ?? 1,
  )
  const [deliverCommercialValueLineEntry, setDeliverCommercialValueLineEntry] = useState(
    user.assessment.deliverCommercialValueLineEntry ?? 1,
  )
  const [deliverCommercialValueAssessorEntry, setDeliverCommercialValueAssessorEntry] = useState(
    user.assessment.deliverCommercialValueAssessorEntry ?? 1,
  )
  const [leadInterfaceManagementLineEntry, setLeadInterfaceManagementLineEntry] = useState(
    user.assessment.leadInterfaceManagementLineEntry ?? 1,
  )
  const [projectRiskManagementLineEntry, setProjectRiskManagementLineEntry] = useState(
    user.assessment.projectRiskManagementLineEntry ?? 1,
  )
  const [projectRiskManagementAssesorEntry, setProjectRiskManagementAssesorEntry] = useState(
    user.assessment.projectRiskManagementAssesorEntry ?? 1,
  )
  const [driveProjectPerformanceLineEntry, setDriveProjectPerformanceLineEntry] = useState(
    user.assessment.driveProjectPerformanceLineEntry ?? 1,
  )
  const [driveProjectPerformanceAssesorEntry, setDriveProjectPerformanceAssesorEntry] = useState(
    user.assessment.driveProjectPerformanceAssesorEntry ?? 1,
  )
  const [leveragePortfolioBenefitLineEntry, setLeveragePortfolioBenefitLineEntry] = useState(
    user.assessment.leveragePortfolioBenefitLineEntry ?? 1,
  )
  const [leveragePortfolioBenefitAssesorEntry, setLeveragePortfolioBenefitAssesorEntry] = useState(
    user.assessment.leveragePortfolioBenefitAssesorEntry ?? 1,
  )
  const [projectPortfolioBenchmarkingLineEntry, setProjectPortfolioBenchmarkingLineEntry] = useState(
    user.assessment.projectPortfolioBenchmarkingLineEntry ?? 1,
  )
  const [projectPortfolioBenchmarkingAssesorEntry, setProjectPortfolioBenchmarkingAssesorEntry] = useState(
    user.assessment.projectPortfolioBenchmarkingAssesorEntry ?? 1,
  )
  const [manageDesignEngineeringLineEntry, setManageDesignEngineeringLineEntry] = useState(
    user.assessment.manageDesignEngineeringLineEntry ?? 1,
  )
  const [manageDesignEngineeringAssesorEntry, setManageDesignEngineeringAssesorEntry] = useState(
    user.assessment.manageDesignEngineeringAssesorEntry ?? 1,
  )
  const [developProjectExecutionStrategiesAndPlansLineEntry, setDevelopProjectExecutionStrategiesAndPlansLineEntry] =
    useState(user.assessment.developProjectExecutionStrategiesAndPlansLineEntry ?? 1)
  const [
    developProjectExecutionStrategiesAndPlansAssesorEntry,
    setDevelopProjectExecutionStrategiesAndPlansAssesorEntry,
  ] = useState(user.assessment.developProjectExecutionStrategiesAndPlansAssesorEntry ?? 1)

  const [leadInterfaceManagementAssesorEntry, setLeadInterfaceManagementAssesorEntry] = useState(
    user.assessment.leadInterfaceManagementAssesorEntry ?? 1,
  )
  const [contractAndContractorManagementLineEntry, setContractAndContractorManagementLineEntry] = useState(
    user.assessment.contractAndContractorManagementLineEntry ?? 1,
  )
  const [contractAndContractorManagementAssesorEntry, setContractAndContractorManagementAssesorEntry] = useState(
    user.assessment.contractAndContractorManagementAssesorEntry ?? 1,
  )
  const [setUpLeadProjectTeamsLineEntry, setSetUpLeadProjectTeamsLineEntry] = useState(
    user.assessment.setUpLeadProjectTeamsLineEntry ?? 1,
  )
  const [setUpLeadProjectTeamsAssessorEntry, setSetUpLeadProjectTeamsAssessorEntry] = useState(
    user.assessment.setUpLeadProjectTeamsAssessorEntry ?? 1,
  )
  const [workEfficientlyWithStakeholdersLineEntry, setWorkEfficientlyWithStakeholdersLineEntry] = useState(
    user.assessment.workEfficientlyWithStakeholdersLineEntry ?? 1,
  )
  const [workEfficientlyWithStakeholdersAssesorEntry, setWorkEfficientlyWithStakeholdersAssesorEntry] = useState(
    user.assessment.workEfficientlyWithStakeholdersAssesorEntry ?? 1,
  )
  const [manageProjectComplexitiesLineEntry, setManageProjectComplexitiesLineEntry] = useState(
    user.assessment.manageProjectComplexitiesLineEntry ?? 1,
  )
  const [manageProjectComplexitiesAssesorEntry, setManageProjectComplexitiesAssesorEntry] = useState(
    user.assessment.manageProjectComplexitiesAssesorEntry ?? 1,
  )
  const [manageCostsLineEntry, setManageCostsLineEntry] = useState(user.assessment.manageCostsLineEntry ?? 1)
  const [manageCostsAssesorEntry, setManageCostsAssesorEntry] = useState(user.assessment.manageCostsAssesorEntry ?? 1)
  const [manageSchedulesAndResourcesLineEntry, setManageSchedulesAndResourcesLineEntry] = useState(
    user.assessment.manageSchedulesAndResourcesLineEntry ?? 1,
  )
  const [manageSchedulesAndResourcesAssesorEntry, setManageSchedulesAndResourcesAssesorEntry] = useState(
    user.assessment.manageSchedulesAndResourcesAssesorEntry ?? 1,
  )

  const [competitiveAndAffordableScopeLineEntry, setCompetitiveAndAffordableScopeLineEntry] = useState(
    user.assessment.competitiveAndAffordableScopeLineEntry ?? 1,
  )
  const [competitiveAndAffordableScopeAssessorEntry, setCompetitiveAndAffordableScopeAssessorEntry] = useState(
    user.assessment.competitiveAndAffordableScopeAssessorEntry ?? 1,
  )
  const [isLoading, setIsLoading] = useState(false)

  const [targetLevel, _] = useState(() => getTargetLevel(user.department.projectLevel))
  const totalAssessorEntry =
    evaluateAndFrameOpportunitiesAssessorEntry +
    deliverCommercialValueAssessorEntry +
    projectRiskManagementAssesorEntry +
    driveProjectPerformanceAssesorEntry +
    leveragePortfolioBenefitAssesorEntry +
    projectPortfolioBenchmarkingAssesorEntry +
    manageDesignEngineeringAssesorEntry +
    developProjectExecutionStrategiesAndPlansAssesorEntry +
    contractAndContractorManagementAssesorEntry +
    setUpLeadProjectTeamsAssessorEntry +
    workEfficientlyWithStakeholdersAssesorEntry +
    manageProjectComplexitiesAssesorEntry +
    manageCostsAssesorEntry +
    leadInterfaceManagementAssesorEntry +
    contractAndContractorManagementAssesorEntry +
    manageSchedulesAndResourcesLineEntry +
    competitiveAndAffordableScopeLineEntry

  const totalLineEntry =
    evaluateAndFrameOpportunitiesLineEntry +
    deliverCommercialValueLineEntry +
    projectRiskManagementLineEntry +
    driveProjectPerformanceLineEntry +
    leveragePortfolioBenefitLineEntry +
    projectPortfolioBenchmarkingLineEntry +
    manageDesignEngineeringLineEntry +
    developProjectExecutionStrategiesAndPlansLineEntry +
    contractAndContractorManagementLineEntry +
    setUpLeadProjectTeamsLineEntry +
    workEfficientlyWithStakeholdersLineEntry +
    manageProjectComplexitiesLineEntry +
    manageCostsLineEntry +
    leadInterfaceManagementLineEntry +
    manageSchedulesAndResourcesAssesorEntry +
    competitiveAndAffordableScopeAssessorEntry

  function totalLinePercent() {
    console.log(totalLineEntry)
    return Math.floor((totalLineEntry / 67) * 100)
  }
  function totalAssessorPercent() {
    return Math.floor((totalAssessorEntry / 67) * 100)
  }
  const divisor = getDivisor(user.department?.projectLevel ?? "")
  function calcWeighedLineScore(lineScore: number, competence: number) {
    if (lineScore < competence) return Math.floor((lineScore / competence) * divisor)
    //linescore / competence standard * 5
    return Math.floor((competence / lineScore) * divisor)
  }
  useEffect(() => {
    console.log("user", user)

    return () => {}
  }, [user])

  async function saveLine(data: {}) {
    setIsLoading(true)
    try {
      const value = await axios.put(`http://localhost:3000/api/user/update/${user.id}`, data)
      window.alert("saved successfully")
      console.log(value)
    } catch (err) {
      window.alert("something went wrong try again ")
      console.log(err)
    } finally {
      setIsLoading(false)
      return
    }
  }

  function handleSaveLine() {
    const data = {
      evaluateAndFrameOpportunitiesLineEntry,
      deliverCommercialValueLineEntry,
      leadInterfaceManagementLineEntry,
      driveProjectPerformanceLineEntry,
      leveragePortfolioBenefitLineEntry,
      projectPortfolioBenchmarkingLineEntry,
      manageDesignEngineeringLineEntry,
      developProjectExecutionStrategiesAndPlansLineEntry,
      contractAndContractorManagementLineEntry,
      setUpLeadProjectTeamsLineEntry,
      workEfficientlyWithStakeholdersLineEntry,
      manageProjectComplexitiesLineEntry,
      manageCostsLineEntry,
    }
    console.log(data)
    saveLine(data)
  }

  function handleSaveAssessor() {
    const data = {
      evaluateAndFrameOpportunitiesAssessorEntry,
      deliverCommercialValueAssessorEntry,
      projectRiskManagementAssesorEntry,
      driveProjectPerformanceAssesorEntry,
      leveragePortfolioBenefitAssesorEntry,
      projectPortfolioBenchmarkingAssesorEntry,
      manageDesignEngineeringAssesorEntry,
      developProjectExecutionStrategiesAndPlansAssesorEntry,
      contractAndContractorManagementAssesorEntry,
      setUpLeadProjectTeamsAssessorEntry,
      workEfficientlyWithStakeholdersAssesorEntry,
      manageProjectComplexitiesAssesorEntry,
      manageCostsAssesorEntry,
      leadInterfaceManagementAssesorEntry,
    }
    console.log(data)
    saveLine(data)
  }

  return (
    <div className="w-screen h-full min-h-screen flex flex-col items-center justify-center">
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
              <div className="p-3 border-r border-black">{new Date(user.assessment.createdAt).toDateString()}</div>
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
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {user.isAdmin && (
                  <button
                    disabled={isLoading}
                    onClick={handleSaveLine}
                    className="px-3 text-white bg-green-500 rounded"
                  >
                    Save
                  </button>
                )}
              </td>
              <td
                className={`text-lg font-extrabold ${totalLinePercent() > 50 ? " text-green-500" : "text-red-500 "} `}
                style={{ border: "1px solid black", padding: "10px" }}
              >
                {totalLinePercent() > 80 ? "Achieved" : "Not Achieved"}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {user.isAdmin && (
                  <button
                    disabled={isLoading}
                    onClick={handleSaveAssessor}
                    className="px-3 text-white bg-green-500 rounded"
                  >
                    Save
                  </button>
                )}
              </td>
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
              <td style={{ border: "1px solid black" }}>Evaluate & Frame Opportunities</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.evaluateAndFrameOpportunitiesLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.evaluateAndFrameOpportunities ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.evaluateAndFrameOpportunitiesFile ?? "#"}>
                  {user.assessment?.evaluateAndFrameOpportunitiesFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  disabled={!user.isAdmin}
                  value={evaluateAndFrameOpportunitiesLineEntry}
                  onChange={({ target }) => setEvaluateAndFrameOpportunitiesLineEntry(+target.value)}
                >
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
                <select
                  disabled={!user.isAdmin}
                  value={evaluateAndFrameOpportunitiesAssessorEntry}
                  onChange={({ target }) => setEvaluateAndFrameOpportunitiesAssessorEntry(+target.value)}
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
                  evaluateAndFrameOpportunitiesAssessorEntry,
                  getEntryScore(targetLevel?.evaluateAndFrameOpportunitiesLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Deliver Commercial Values</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.deliverCommercialValueLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.deliverCommercialValue ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.deliverCommercialValueFile ?? "#"}>
                  {user.assessment?.deliverCommercialValueFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={deliverCommercialValueLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setDeliverCommercialValueLineEntry(+target.value)}
                >
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
                <select
                  value={deliverCommercialValueAssessorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setDeliverCommercialValueAssessorEntry(+target.value)}
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
                  deliverCommercialValueAssessorEntry,
                  getEntryScore(targetLevel?.deliverCommercialValueLineEntry ?? ""),
                )}
              </td>
            </tr>

            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Project Risk Management</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.projectRiskManagementLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.projectRiskManagement ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.projectRiskManagementFile ?? "#"}>
                  {user.assessment?.projectRiskManagementFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={projectRiskManagementLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setProjectRiskManagementLineEntry(+target.value)}
                >
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
                <select
                  value={projectRiskManagementAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setProjectRiskManagementAssesorEntry(+target.value)}
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
                  projectRiskManagementAssesorEntry,
                  getEntryScore(targetLevel?.projectRiskManagementLineEntry ?? ""),
                )}
              </td>
            </tr>

            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Drive & project performance</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.driveProjectPerformanceLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.driveProjectPerformance ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.driveProjectPerformanceFile ?? "#"}>
                  {user.assessment?.driveProjectPerformanceFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={driveProjectPerformanceLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setDriveProjectPerformanceLineEntry(+target.value)}
                >
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
                <select
                  value={driveProjectPerformanceAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setDriveProjectPerformanceAssesorEntry(+target.value)}
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
              <td style={{ border: "1px solid black" }}>{targetLevel?.competitiveAndAffordableScopeLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.competitiveAndAffordableScope ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.competitiveAndAffordableScopeFile ?? "#"}>
                  {user.assessment?.competitiveAndAffordableScopeFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={competitiveAndAffordableScopeLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setCompetitiveAndAffordableScopeLineEntry(+target.value)}
                >
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.competitiveAndAffordableScope ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{competitiveAndAffordableScopeLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {" "}
                {calcWeighedLineScore(
                  competitiveAndAffordableScopeLineEntry,
                  getEntryScore(targetLevel?.competitiveAndAffordableScopeLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={competitiveAndAffordableScopeAssessorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setCompetitiveAndAffordableScopeAssessorEntry(+target.value)}
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
                  competitiveAndAffordableScopeAssessorEntry,
                  getEntryScore(targetLevel?.competitiveAndAffordableScopeLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Leverage Portfolio benefits</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.leveragePortfolioBenefitLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.leveragePortfolioBenefit ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.leveragePortfolioBenefitFile ?? "#"}>
                  {user.assessment?.leveragePortfolioBenefitFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={leveragePortfolioBenefitLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setLeveragePortfolioBenefitLineEntry(+target.value)}
                >
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
                <select
                  value={leveragePortfolioBenefitAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setLeveragePortfolioBenefitAssesorEntry(+target.value)}
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
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.projectPortfolioBenchmarkingFile ?? "#"}>
                  {user.assessment?.projectPortfolioBenchmarkingFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={projectPortfolioBenchmarkingLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setProjectPortfolioBenchmarkingLineEntry(+target.value)}
                >
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
                <select
                  value={projectPortfolioBenchmarkingAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setProjectPortfolioBenchmarkingAssesorEntry(+target.value)}
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
                  projectPortfolioBenchmarkingAssesorEntry,
                  getEntryScore(targetLevel?.projectPortfolioBenchmarkingLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Design & Engineering</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageDesignEngineeringLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageDesignEngineering ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.manageDesignEngineeringFile ?? "#"}>
                  {user.assessment?.manageDesignEngineeringFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={manageDesignEngineeringLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageDesignEngineeringLineEntry(+target.value)}
                >
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
                <select
                  value={manageDesignEngineeringAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageDesignEngineeringAssesorEntry(+target.value)}
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
              <td style={{ border: "1px solid black" }}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={user.assessment?.developProjectExecutionStrategiesAndPlansFile ?? "#"}
                >
                  {user.assessment?.developProjectExecutionStrategiesAndPlansFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={developProjectExecutionStrategiesAndPlansLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setDevelopProjectExecutionStrategiesAndPlansLineEntry(+target.value)}
                >
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
                  value={developProjectExecutionStrategiesAndPlansAssesorEntry}
                  disabled={!user.isAdmin}
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
              <td style={{ border: "1px solid black" }}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={user.assessment?.contractAndContractorManagementFile ?? "#"}
                >
                  {user.assessment?.contractAndContractorManagementFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={contractAndContractorManagementLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setContractAndContractorManagementLineEntry(+target.value)}
                >
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
                <select
                  value={contractAndContractorManagementAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setContractAndContractorManagementAssesorEntry(+target.value)}
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
                  contractAndContractorManagementAssesorEntry,
                  getEntryScore(targetLevel?.contractAndContractorManagementLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Set up and & Lead Project Teams</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.setUpLeadProjectTeamsLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.setUpLeadProjectTeams ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.setUpLeadProjectTeamsFile ?? "#"}>
                  {user.assessment?.setUpLeadProjectTeamsFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={setUpLeadProjectTeamsLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setSetUpLeadProjectTeamsLineEntry(+target.value)}
                >
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
                <select
                  value={setUpLeadProjectTeamsAssessorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setSetUpLeadProjectTeamsAssessorEntry(+target.value)}
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
              <td style={{ border: "1px solid black" }}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={user.assessment?.workEfficientlyWithStakeholdersFile ?? "#"}
                >
                  {user.assessment?.workEfficientlyWithStakeholdersFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={workEfficientlyWithStakeholdersLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setWorkEfficientlyWithStakeholdersLineEntry(+target.value)}
                >
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
                <select
                  value={workEfficientlyWithStakeholdersAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setWorkEfficientlyWithStakeholdersAssesorEntry(+target.value)}
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
                  workEfficientlyWithStakeholdersAssesorEntry,
                  getEntryScore(targetLevel?.workEfficientlyWithStakeholdersLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Project Complexity</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageProjectComplexitiesLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageProjectComplexities ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.manageProjectComplexitiesFile ?? "#"}>
                  {user.assessment?.manageProjectComplexitiesFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={manageProjectComplexitiesLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageProjectComplexitiesLineEntry(+target.value)}
                >
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
                <select
                  value={manageProjectComplexitiesAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageProjectComplexitiesAssesorEntry(+target.value)}
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
                  manageProjectComplexitiesAssesorEntry,
                  getEntryScore(targetLevel?.manageProjectComplexitiesLineEntry ?? ""),
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
              <td style={{ border: "1px solid black" }}>Manage Cost</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageSchedulesAndResourcesLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.manageSchedulesAndResources ?? 0)}
              </td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.manageSchedulesAndResourcesFile ?? "#"}>
                  {user.assessment?.manageSchedulesAndResourcesFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={manageSchedulesAndResourcesLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageSchedulesAndResourcesLineEntry(+target.value)}
                >
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageSchedulesAndResources ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{manageSchedulesAndResourcesLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  manageSchedulesAndResourcesLineEntry,
                  getEntryScore(targetLevel?.manageSchedulesAndResourcesLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={manageSchedulesAndResourcesAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageSchedulesAndResourcesAssesorEntry(+target.value)}
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
                  manageSchedulesAndResourcesAssesorEntry,
                  getEntryScore(targetLevel?.manageSchedulesAndResourcesLineEntry ?? ""),
                )}
              </td>
            </tr>
            <tr className="text-center">
              <td style={{ border: "1px solid black" }}>Manage Cost</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.manageCostsLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageCosts ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.manageCostsFile ?? "#"}>
                  {user.assessment?.manageCostsFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={manageCostsLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageCostsLineEntry(+target.value)}
                >
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
                <select
                  value={manageCostsAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setManageCostsAssesorEntry(+target.value)}
                >
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

            <tr className="font-bold text-center text-black bg-pink-200 ">
              <td style={{ border: "1px solid black" }}>Interface Management</td>
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
              <td style={{ border: "1px solid black" }}>Lead Interface Management</td>
              <td style={{ border: "1px solid black" }}>{targetLevel?.leadInterfaceManagementLineEntry ?? ""}</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.LeadInterfaceManagement ?? 0)}</td>
              <td style={{ border: "1px solid black" }}>
                <a target={"_blank"} rel="noreferrer" href={user.assessment?.LeadInterfaceManagementFile ?? "#"}>
                  {user.assessment?.LeadInterfaceManagementFile ? "view" : ""}
                </a>
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={leadInterfaceManagementLineEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setLeadInterfaceManagementLineEntry(+target.value)}
                >
                  {lineEntry.map((item) => (
                    <option value={item.value} key={item.key}>
                      {item.key}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>{user.assessment?.LeadInterfaceManagement ?? 0}</td>
              <td style={{ border: "1px solid black" }}>{leadInterfaceManagementLineEntry}</td>
              <td style={{ border: "1px solid black" }}>
                {calcWeighedLineScore(
                  leadInterfaceManagementLineEntry,
                  getEntryScore(targetLevel?.leadInterfaceManagementLineEntry ?? ""),
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                <select
                  value={leadInterfaceManagementAssesorEntry}
                  disabled={!user.isAdmin}
                  onChange={({ target }) => setLeadInterfaceManagementAssesorEntry(+target.value)}
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
                  leadInterfaceManagementAssesorEntry,
                  getEntryScore(targetLevel?.leadInterfaceManagementLineEntry ?? ""),
                )}
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
              <th style={{ border: "1px solid black" }}>Name</th>
              <th style={{ border: "1px solid black" }}>Signature</th>
              <th style={{ border: "1px solid black" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>Employee</td>
              <td style={{ border: "1px solid black" }}>
                {/* <input type={"text"} /> */}
                {user.project.fullName}
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
                {/* <input type={"text"} /> */}
                {user.project.supervisor}
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
