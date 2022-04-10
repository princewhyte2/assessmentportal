import { useEffect } from "react"
import axios from "axios"
import { getSession } from "next-auth/react"

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
  useEffect(() => {
    console.log("users", user)

    return () => {}
  }, [user])

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
        <div className="text-white h-32 bg-red-500 border-2 border-black w-60">
          <div>
            Proceed to final Assessment by an independent assessor only when Line Head agrees project JCP score has met
            minimum criteria of 80%
          </div>
        </div>
      </div>
      <div className=" mt-4">
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
                <div className="text-blue-600 font-bold">
                  <h1 className=" text-xl text-blue-600 font-bold">COMPETENCY LEVELS</h1>
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
                <div className="flex items-center justify-center text-2xl font-extrabold h-full">0%</div>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <div className="flex items-center justify-center text-2xl font-extrabold h-full">2%</div>
              </td>
            </tr>
            <tr>
              <td
                className="text-center text-blue-600 font-bold text-base"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                competence level
              </td>
              <td className="text-center" style={{ border: "1px solid black", padding: "10px" }}>
                2
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td
                className=" font-extrabold text-red-500 text-lg"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                Not Achieved
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}></td>
              <td
                className=" font-extrabold text-red-500 text-lg"
                style={{ border: "1px solid black", padding: "10px" }}
              >
                Not Achieved
              </td>
            </tr>
            <tr className=" bg-yellow-400 text-black text-center font-bold">
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
            <tr className="  bg-pink-200 text-black text-center font-bold">
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
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.evaluateAndFrameOpportunities ?? 0)}
              </td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.evaluateAndFrameOpportunities ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Deliver Commercial Values</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.deliverCommercialValue ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.deliverCommercialValue ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Cost Estimating</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.costEstimating ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.costEstimating ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Project Risk Management</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.projectRiskManagement ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.projectRiskManagement ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Probablistic Cost & schedule Risk Analysis</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.probablisticCost ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.probablisticCost ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Drive & project performance</td>
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
            <tr className="  bg-pink-200 text-black text-center font-bold">
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
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.leveragePortfolioBenefit ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.leveragePortfolioBenefit ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Project/Portfolio Benchmarking</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.projectPortfolioBenchmarking ?? 0)}
              </td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.projectPortfolioBenchmarking ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Manage Design & Engineering</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageDesignEngineering ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageDesignEngineering ?? 0}</td>
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
            <tr className="  bg-pink-200 text-black text-center font-bold">
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
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.developProjectExecutionStrategiesAndPlans ?? 0)}
              </td>
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
              <td style={{ border: "1px solid black" }}>
                {user.assessment?.developProjectExecutionStrategiesAndPlans ?? 0}
              </td>
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
              <td style={{ border: "1px solid black" }}>Contract and Contractor Management</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.contractAndContractorManagement ?? 0)}
              </td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.contractAndContractorManagement ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Set up and & Lead Project Teams</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.setUpLeadProjectTeams ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.setUpLeadProjectTeams ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Work Effectively with Stakeholders</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                {getEntry(user.assessment?.workEfficientlyWithStakeholders ?? 0)}
              </td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.workEfficientlyWithStakeholders ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Manage Project Complexity</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageProjectComplexities ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageProjectComplexities ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Manage Quality</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageQuality ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageQuality ?? 0}</td>
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
            <tr className="  bg-pink-200 text-black text-center font-bold">
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
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.implementProcurement ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.implementProcurement ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Manage Fabrication & Construction</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageFabrication ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageFabrication ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Planning & Scheduling</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.planningAndScheduling ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.planningAndScheduling ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Manage Cost</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.manageCosts ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.manageCosts ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Cost Controls</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.costControl ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.costControl ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Deliver Successfull Start Up & Operation</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.deliverSuccessfulStartUp ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.deliverSuccessfulStartUp ?? 0}</td>
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
              <td style={{ border: "1px solid black" }}>Hand Over & Close out Work</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>{getEntry(user.assessment?.handOver ?? 0)}</td>
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
              <td style={{ border: "1px solid black" }}>{user.assessment?.handOver ?? 0}</td>
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
          </tbody>
        </table>
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
