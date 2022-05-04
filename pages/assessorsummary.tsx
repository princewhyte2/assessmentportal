import type { NextPage } from "next"
import axios from "axios"
import { getSession } from "next-auth/react"
import { useEffect, useState, useMemo } from "react"

const AccessorSummary: NextPage = ({ user }: any) => {
  const [jcp, setJcp] = useState(user.project.jcp ?? "no")
  const [jcpNote, setJcpNote] = useState(user.project.jcpNote ?? "")
  const [capexSize, setCapexSize] = useState(user.project.capexSize ?? "no")
  const [capexSizeNote, setCapexSizeNote] = useState(user.project.capexSizeNote ?? "")
  const [flyingHours, setFlyingHours] = useState(user.project.flyingHours ?? "no")
  const [flyingHoursNote, setFlyingHoursNote] = useState(user.project.flyingHoursNote ?? "")
  const [training, setTraining] = useState(user.project.training ?? "no")
  const [trainingNote, setTrainingNote] = useState(user.project.trainingNote ?? "")
  const [remark, setRemark] = useState(user.project.remark ?? "")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSave() {
    const data = {
      jcp,
      jcpNote,
      capexSize,
      capexSizeNote,
      flyingHours,
      flyingHoursNote,
      training,
      trainingNote,
      remark,
    }
    setIsLoading(true)
    try {
      await axios.put(`/api/user/update/project/${user.id}`, data)
      window.alert("Saved")
    } catch (error) {
      window.alert("something went wrong")
      console.error(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    console.log(user)
  }, [user])

  const stringArray = useMemo(() => {
    return user.department?.projectLevel.split(" - ")
  }, [user.department?.projectLevel])
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full min-h-screen py-4 space-y-3 ">
      <h1 className="text-xl font-extrabold ">PROJECT LEVEL ASSESSMENT - FINAL ASSESSMENT SHEET</h1>
      <div className="flex flex-col w-full max-w-3xl space-y-3">
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Staff Name:</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">{user.project.fullName} </h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Department/Section</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">{stringArray[0]} </h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Assessor Name</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400"></h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Assessment Date</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">
            {new Date(user.assessment.createdAt).toLocaleDateString()}
          </h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Target Level</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">{stringArray[1]}</h2>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="p-2 bg-yellow-400 border border-black">Target Level</th>
            <th className="p-2 bg-yellow-400 border border-black">Achieved?</th>
            <th className="p-2 bg-yellow-400 border border-black">Explanatory Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">JCP</td>
            <td className="p-2 border border-black">Achieved </td>
            <td className="p-2 border border-black">
              <select value={jcp} onChange={({ target }) => setJcp(target.value)} className="border-none outline-none ">
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea
                maxLength={150}
                value={jcpNote}
                onChange={({ target }) => setJcpNote(target.value)}
                className="h-full outline-none"
                placeholder="Explanatory Notes"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">CAPEX SIZE</td>
            <td className="p-2 border border-black">$25 million as much as </td>
            <td className="p-2 border border-black">
              <select
                value={capexSize}
                onChange={({ target }) => setCapexSize(target.value)}
                className="border-none outline-none "
              >
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea
                value={capexSizeNote}
                maxLength={150}
                onChange={({ target }) => setCapexSizeNote(target.value)}
                className="h-full outline-none"
                placeholder="Explanatory Notes"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">Flying Hours</td>
            <td className="p-2 border border-black">3 years with a single point</td>
            <td className="p-2 border border-black">
              <select
                value={flyingHours}
                onChange={({ target }) => setFlyingHours(target.value)}
                className="border-none outline-none "
              >
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea
                value={flyingHoursNote}
                maxLength={150}
                onChange={({ target }) => setFlyingHoursNote(target.value)}
                className="h-full outline-none"
                placeholder="Explanatory Notes"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">Training</td>
            <td className="p-2 border border-black">Managing Access</td>
            <td className="p-2 border border-black">
              <select
                value={training}
                onChange={({ target }) => setTraining(target.value)}
                className="border-none outline-none "
              >
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea
                value={trainingNote}
                maxLength={150}
                onChange={({ target }) => setTrainingNote(target.value)}
                className="h-full outline-none"
                placeholder="Explanatory Notes"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="max-w-3xl ">
        *If JCP and Flying Hours criteria are met and either Capex Size and / or Training are the only outstanding
        requirement, the requestor shall apply for a waiver from his/her Line Manager. Assessor shall be informed. **The
        TD Project Capability team will maintain a list of equivalent courses.
      </p>
      <textarea
        value={remark}
        maxLength={150}
        onChange={({ target }) => setRemark(target.value)}
        className="w-full h-20 max-w-3xl p-2 border border-black rounded outline-none"
        placeholder="Competent or not yet Competent"
      ></textarea>
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
                {/* {user.project.fullName} */}
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
                {/* {user.project.supervisor} */}
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
      <button disabled={isLoading} onClick={handleSave} className="px-3 text-white bg-green-400 rounded print:hidden">
        {isLoading ? "processing..." : "Save"}
      </button>
    </div>
  )
}

export default AccessorSummary

export async function getServerSideProps(context: any) {
  const { req, res, query } = context
  const session = await getSession({ req })
  if (!!!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/?redirect=/department",
      },
    }
  } else {
    try {
      //@ts-ignore
      if (!session.user.isAdmin) {
        return {
          redirect: {
            permanent: false,
            destination: "/?redirect=/department",
          },
        }
      }
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
