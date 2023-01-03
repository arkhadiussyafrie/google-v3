import { useSession, signIn, signOut } from "next-auth/react"

export default function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img onClick={signOut} src={session.user.image} alt="user-image" className="h-9 w-9 rounded-full bg-gray-100 cursor-pointer p-1" />
      </>
    )
  }
  return (
    <>
      <button onClick={signIn} className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md">Sign in</button>
    </>
  )
}
