import type { NextPage } from "next"
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Login from "../components/templates/Login"

const Home: NextPage = () => {
  return <Login />
}

export default Home

export async function getServerSideProps(context: any) {
  const { req, res } = context

  const session = await getSession({ req })
  if (session && res && session.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/department",
      },
    }
  } else {
    return {
      props: {},
    }
  }

  return null
}
