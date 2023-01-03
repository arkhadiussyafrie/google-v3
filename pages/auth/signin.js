import Header from "../../components/Header"
import { getProviders, signIn } from "next-auth/react"

export default function signin({providers}) {
  return (
    <div>
      <Header/>
      <div>
        {Object.values(providers).map(provider => (
          <div className="flex flex-col items-center" key={provider.name}>
            <img className="w-52 object-cover" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="google-image"/>
            <p className="text-sm italic my-10 text-center">This is website is created for learning purposes</p>
            <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, {
              callbackUrl: "/"
            })}>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
}
