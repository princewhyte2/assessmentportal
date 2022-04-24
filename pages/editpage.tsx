import axios from "axios"
import { NextPage } from "next"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

const EditPage: NextPage = ({ user }: any) => {
  const [isDepartment, setIsDepartment] = useState(false)
  const [isProject, setIsProject] = useState(false)
  const [isAssessment, setIsAssessment] = useState(false)
  const router = useRouter()
  const handleDepartment = async (e: any) => {
    const choice = window.confirm("Are you sure you want to change your department?")
    if (choice) {
      setIsDepartment(true)
      try {
        const res = await axios.get(`/api/clearall/${user.id}`)
        console.log(res)
        router.push("/")
      } catch (error) {
        console.log(error)
        alert("something went wrong")
        setIsDepartment(false)
      }
    }
    return
  }

  const handleProject = async () => {
    const choice = window.confirm("Are you sure you want to change your projects?")
    if (choice) {
      setIsProject(true)
      try {
        const res = await axios.delete(`/api/project/${user.id}`)
        console.log(res)
        router.push("/")
      } catch (error) {
        console.log(error)
        alert("something went wrong")
        setIsProject(false)
      }
    }
    return
  }

  const handleAssessment = async () => {
    const choice = window.confirm("Are you sure you want to change your assessments?")
    if (choice) {
      setIsAssessment(true)
      try {
        const res = await axios.delete(`/api/assessment/${user.id}`)
        console.log(res)
        router.push("/")
      } catch (error) {
        console.log(error)
        alert("something went wrong")
        setIsAssessment(false)
      }
    }
    return
  }

  return (
    <div className="w-screen min-h-screen flex flex-col space-y-4 items-center justify-center h-full bg-blue-400">
      <h1 className=" font-extrabold text-3xl text-white">Edit Page</h1>
      <p className="text-white max-w-sm p-4">
        You can edit your details here. Please note if you choose to change your department all your previous enteries
        will be deleted.
      </p>
      <div className="flex flex-col space-y-5">
        <button
          onClick={handleDepartment}
          className="rounded w-72 h-12 flex items-center justify-center text-white border-white border"
        >
          {isDepartment ? "processing ..." : "Department"}
        </button>
        <button
          onClick={handleAssessment}
          className="rounded w-72 h-12 flex items-center justify-center text-white border-white border"
        >
          {isAssessment ? "processing ..." : "Assessment"}
        </button>
        <button
          onClick={handleProject}
          className="rounded w-72 h-12 flex items-center justify-center text-white border-white border"
        >
          {isProject ? "processing ..." : "Project"}
        </button>
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
        destination: "/?redirect=/editpage",
      },
    }
  }
  try {
    const { data } = await axios.get(`http://localhost:3000/api/user/${session.user.id}`)
    console.log("data", data)
    if (!data && !data.project && !data.department && !data.assessment) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
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

export default EditPage
