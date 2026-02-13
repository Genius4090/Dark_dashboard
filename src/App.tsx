import { useContext } from "react"
import Dashboard from "./routes/Dashboard"
import AuthRoute from "./routes/AuthRoute"
import { Context } from "./context/GlobalContext"
import { Header, Sidebar } from "./pages"

const App = () => {
  const {token} = useContext(Context)
  return token ? <div className="flex">
    <Sidebar/>
     <div className="bg-black w-full h-screen overflow-y-auto">
    <Header/>
    <Dashboard/>
    </div>
  </div> : <AuthRoute/>
}

export default App