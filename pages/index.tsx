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
    if (session.user.isAdmin) {
      return {
        redirect: {
          permanent: false,
          destination: "/general",
        },
      }
    }
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
