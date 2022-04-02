import react, { useState, useEffect } from "react"
import EyeIcon from "../icons/Eye"
import EyeoffIcon from "../icons/Eyeoff"
// import { getCsrfToken } from "next-auth/react"
import { signIn } from "next-auth/react"

const Login = ({ csrfToken }: any) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })
      //when user logs in redirect a non admin using the app for the first time to the department page
      console.log("response is", res)
    } catch (error) {
      console.log("error is", error)
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center text-center items-center bg-blue-400 text-white">
      <div className="">
        <h1 className=" font-bold text-xl">Welcome To Assessment Portal</h1>

        <h3 className=" text-center pt-8 pb-4 font-semibold text-xl">Sign In to Begin</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 p-4"
          method="post"
          action="/api/auth/callback/credentials"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="example@youremail.com"
            className=" text-white placeholder-current h-12 w-80 rounded-xl border border-white bg-transparent outline-none px-4"
          />
          <div className="h-12 w-80 rounded-xl border space-x-3 border-white px-4 flex items-center">
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="your password"
              type={showPassword ? "text" : "password"}
              className="flex-1 text-white placeholder-current outline-none bg-transparent"
            />
            <button onClick={() => setShowPassword(!showPassword)} type="button">
              {showPassword ? <EyeoffIcon /> : <EyeIcon />}
            </button>
          </div>
          <button type="submit" className="h-12 rounded-xl w-80 border border-white outline-none">
            SIGN IN
          </button>
        </form>
        <h3 className=" pt-4">2021 - A Product of TR Team</h3>
      </div>
    </div>
  )
}

export default Login

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   }
// }
