import { Link } from "react-router-dom"
import { AuthFormItem } from "../../components"
import FormLinkItem from "../../components/FormLinkItem"
import Button from "../../components/Button"
import { useContext, type SubmitEvent } from "react"
import { Toaster } from "react-hot-toast"
import { Context } from "../../context/GlobalContext"
import { loginFn } from "../../services"

const Login = () => {
  const {setToken} = useContext(Context)
  function handleLoginSubmit(e:SubmitEvent<HTMLFormElement>){
    loginFn({e,setToken})
  }
  return (
    <div className="container h-screen flex items-center justify-center">
     <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <form onSubmit={handleLoginSubmit} className="bg-white w-[400px] h-[400px] rounded px-6 flex flex-col gap-5  justify-center items-start border border-white">
        <h2 className="font-bold text-3xl text-center mx-auto ">Login</h2>
        <div className="space-y-6">
          <AuthFormItem name="email" type="email" placeholder="Enter your email"/>
          <AuthFormItem name="password" type="password" placeholder="Enter your password"/>
        </div>
        <Link to="/" className=" font-medium text-lg">Forgot your password?</Link>
        <Button>Login</Button>
        <FormLinkItem title="Don't have an account?"/>
      </form>
    </div>
  )
}

export default Login