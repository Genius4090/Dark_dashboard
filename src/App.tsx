import { useContext } from "react"
import Dashboard from "./routes/Dashboard"
import AuthRoute from "./routes/AuthRoute"
import { Context } from "./context/GlobalContext"

const App = () => {
  const {token} = useContext(Context)
  return token ? <Dashboard/> : <AuthRoute/>
}

export default App