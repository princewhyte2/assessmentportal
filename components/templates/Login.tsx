import react, { useState, useEffect } from "react"
import EyeIcon from "../icons/Eye"
import EyeoffIcon from "../icons/Eyeoff"
// import { getCsrfToken } from "next-auth/react"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"

const Login = ({ csrfToken }: any) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })
      console.log("response is", res)

      if (res) {
        router.push("/")
      }
      //when user logs in redirect a non admin using the app for the first time to the department page
      console.log("response is", res)
    } catch (error) {
      console.log("error is", error)
    }
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen text-center text-white bg-blue-400">
      <div className="">
        <h1 className="text-xl font-bold ">Welcome To Assessment Portal</h1>

        <h3 className="pt-8 pb-4 text-xl font-semibold text-center ">Sign In to Begin</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4 space-y-6"
          method="post"
          action="/api/auth/callback/credentials"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="example@youremail.com"
            className="h-12 px-4 text-white placeholder-current bg-transparent border border-white outline-none w-80 rounded-xl"
          />
          <div className="flex items-center h-12 px-4 space-x-3 border border-white w-80 rounded-xl">
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="your password"
              type={showPassword ? "text" : "password"}
              className="flex-1 text-white placeholder-current bg-transparent outline-none"
            />
            <button onClick={() => setShowPassword(!showPassword)} type="button">
              {showPassword ? <EyeoffIcon /> : <EyeIcon />}
            </button>
          </div>
          <button type="submit" className="h-12 border border-white outline-none rounded-xl w-80">
            SIGN IN
          </button>
        </form>
        <h3 className="pt-4 ">2021 - A Product of TR Team</h3>
      </div>
    </div>
  )
}

export default Login
