import react, { useState } from "react"

const Department = () => {
  const [department, setDepartment] = useState("TPTF")
  const [projectLevel, setProjectLevel] = useState("Select Project level")
  const optionA = ["Frontend Practitioner - Level 1", "Frontend Development - Level 2", "Frontend Practioner - Level 3"]
  const optionB = [
    "Project Practitioner (Project services) - Level 1",
    "Project Practioner - Level 1",
    "Project Engineering - Level 2",
    "Project Services - Level 2",
    "Project Delivery Manager - Level 3",
  ]
  return (
    <div className="h-screen flex justify-center  items-center bg-blue-400 text-white">
      <div>
        <h1 className=" font-bold text-xl">Chose your Department and Project Level</h1>
        <form className="bg-white text-black p-4">
          <div className="py-4 border-b border-gray-400">
            <h2>Select your department</h2>
            <div>
              <input
                onChange={({ target }) => setDepartment(target.value)}
                type="radio"
                name="department"
                value={"TP"}
                id=""
              />{" "}
              TP
            </div>
            <div>
              <input
                onChange={({ target }) => setDepartment(target.value)}
                type="radio"
                name="department"
                value={"TF"}
                id=""
              />{" "}
              TF
            </div>
          </div>
          <div className="py-4 border-b border-gray-400">
            <h2>Which project Level do you want to be assessed on?</h2>
            <select
              className="border w-full border-gray-400"
              value={projectLevel}
              onChange={({ target }) => setProjectLevel(target.value)}
            >
              <option value={"Select Project level"} disabled>
                Select Project level
              </option>
              {department.includes("TF")
                ? optionA.map((item: string) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))
                : null}
              {department.includes("TP")
                ? optionB.map((item: string) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="py-4 border-b border-gray-400">
            <h2>Legend:</h2>
            <p>A - Evaluate & Frame Opportunities</p>
            <p>K - Working Knowledge</p>
            <p>S - Skill</p>
          </div>
          <div className="flex justify-center mt-6">
            <button className=" bg-blue-600 px-4 py-2 text-white">Start</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Department
