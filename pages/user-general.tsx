import React, { useState, useEffect } from "react"
import SendIcon from "../components/icons/Send"
import MoreIcon from "../components/icons/More"
import { useRouter } from "next/router"
import axios from "axios"
import { getSession } from "next-auth/react"

const UserGeneral = ({ user }: any) => {
  const [activeMenu, setActiveMenu] = useState("General")
  const router = useRouter()

  useEffect(() => {
    console.log("users", user)
  }, [user])

  function handleRoute() {
    if (user.department.name === "TP") {
      router.push("tpassessment?id=" + user.id)
    } else {
      router.push("tfassessment?id=" + user.id)
    }
  }

  return (
    <div className="min-h-screen px-20 bg-gray-500">
      <h2 className="text-center">Assessment</h2>
      <h3 className="mt-6">General Information</h3>
      <div className="flex justify-between mb-6">
        <div className="flex space-x-3 items-center">
          {/* <div className="px-2 bg-white">
            <select className="bg-transparent">
              <option>All properties</option>
            </select>
          </div> */}
          <div className="px-2 bg-white">
            <select className="bg-transparent">
              <option>Today</option>
            </select>
          </div>
          <button className="px-2 bg-white">filter</button>
        </div>
        <div className="flex space-x-3 items-center">
          <button
            onClick={() => setActiveMenu("General")}
            className={activeMenu === "General" ? "p-2 bg-blue-600 text-white" : "p-2 text-black"}
          >
            General Information
          </button>
          {/* <button
            onClick={() => setActiveMenu("Education")}
            className={activeMenu === "Education" ? "p-2 bg-blue-600 text-white" : "p-2 text-black"}
          >
            Education
          </button>
          <button
            onClick={() => setActiveMenu("Summary")}
            className={activeMenu === "Summary" ? "p-2 bg-blue-600 text-white" : "p-2 text-black"}
          >
            Summary
          </button> */}
        </div>
        <div className="flex items-center space-x-3">
          {/* <button className="p-2 bg-green-400">+ ADD ITEM</button> */}
          <div className="p-2 bg-black">
            <select className="bg-transparent text-white">
              <option>Export</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex mb-2 bg-green-300 px-3 space-x-6">
        <div>
          <input type={"checkbox"} />
        </div>
        <div className="w-[60px]">Full name</div>
        <div className="w-28">Ref.</div>
        <div className="w-[60px]">Job Role</div>
        <div className="w-[80px]">Primary Skill poll</div>
        <div className="w-[160px]">Secondary skill poll</div>
        <div className="w-[160px]">Last approved project level</div>
        <div className="w-[160px]">Supervisor</div>
        <div className="flex-1"></div>
      </div>
      <div key={user.id} className="flex bg-white p-3 space-x-6">
        <div>
          <input type={"checkbox"} />
        </div>
        <div className="break-words w-[60px]">{user.project?.fullName}</div>
        <div className=" break-words w-28">{user.project?.email}</div>
        <div className="w-[60px]">{user.project?.jobTitle ?? ""}</div>
        <div className="w-[80px]">{user.project?.priSkillPool ?? ""}</div>
        <div className="w-[160px]">{user.project?.secSkillPool ?? ""}</div>
        <div className="w-[160px]">{user.project?.lastApprovedProjectLevel ?? ""}</div>
        <div className="w-[160px]">{user.project?.supervisor ?? ""}</div>
        <div className="flex-1 flex space-x-3">
          <button
            onClick={() => {
              router.push("/editpage")
            }}
            className=" flex items-center justify-center h-11 w-11 rounded-full bg-gray-500"
          >
            <SendIcon />
          </button>
          <button
            onClick={handleRoute}
            className=" flex items-center justify-center h-11 w-11 rounded-full bg-gray-500"
          >
            <MoreIcon />
          </button>
        </div>
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

export default UserGeneral
