import react, { useState } from "react"
import { getSession } from "next-auth/react"
import axios from "axios"
import { useRouter } from "next/router"

const Department = ({ user }: any) => {
  const [department, setDepartment] = useState("TPTF")
  const [projectLevel, setProjectLevel] = useState("Select Project level")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const optionA = ["Front-End Engineer - Level 1", "Front-End Engineer - Level 2", "Front-End Engineer - Level 3"]
  const optionB = [
    "Project Practitioner  - Level 1",
    "Project Practioner - Level 2",
    "Project Services - Level 1",
    "Project Services - Level 2",
    "Project Practitioner - Level 3",
  ]

  const handleSubmitDepartment = async (e: any) => {
    e.preventDefault()
    if (department === "TPTF" || projectLevel === "Select Project level") {
      return
    }
    setIsLoading(true)
    try {
      const info = {
        department,
        projectLevel,
      }
      const { data } = await axios.post(`/api/setdepartment/${user.id}`, info)
      console.log("post result", data)
      if (data.id) {
        console.log(data.name)
        router.push(`/assessment?department=${data.name}`)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center  items-center bg-blue-400 text-white">
      <div>
        <h1 className=" font-bold text-xl">Chose your Department and Project Level</h1>
        <form onSubmit={handleSubmitDepartment} className="bg-white text-black p-4">
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
            <button disabled={isLoading} type="submit" className=" bg-blue-600 px-4 py-2 text-white">
              {isLoading ? "processing..." : "Start"}
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
        destination: "/?redirect=/department",
      },
    }
  } else {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/user/${session.user.id}`)
      console.log("data", data)
      if (data && data.department && data.department.name) {
        return {
          redirect: {
            permanent: false,
            destination: "/assessment?department=" + data.department.name,
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

export default Department
