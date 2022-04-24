import react, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"

const Login = ({ csrfToken }: any) => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res: any = await signIn("credentials", {
        redirect: false,
        email,
      })
      console.log("response is", res)

      if (res) {
        if (res.error) {
          alert(res.error)
          setIsLoading(false)
          return
        }
        router.push("/")
      }
      //when user logs in redirect a non admin using the app for the first time to the department page
      console.log("response is", res)
    } catch (error) {
      setIsLoading(false)
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
            placeholder="enter your username"
            className="h-12 px-4 text-white placeholder-current bg-transparent border border-white outline-none w-80 rounded-xl"
          />
          <button disabled={isLoading} type="submit" className="h-12 border border-white outline-none rounded-xl w-80">
            {isLoading ? "processing..." : "SIGN IN"}
          </button>
        </form>
        <h3 className="pt-4 ">2021 - A Product of TR Team</h3>
      </div>
    </div>
  )
}

export default Login
