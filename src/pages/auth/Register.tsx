import type { SubmitEvent } from "react"
import { AuthFormItem } from "../../components"
import Button from "../../components/Button"
import FormLinkItem from "../../components/FormLinkItem"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import toast, { Toaster } from "react-hot-toast"
import { PATH } from "../../paths/PATH"


const Register = () => {
  const navigate = useNavigate()
  function handleCreateSubmit(e:SubmitEvent<HTMLFormElement>){
   e.preventDefault()
   const data = {
    name: e.target.firstname + e.target.lastname,
    email: e.target.email.value,
    password: e.target.password.value,
    avatar: e.target.image.value,
   }
   axios.post("https://api.escuelajs.co/api/v1/users/",data).then(()=> {
    toast.success('Successfully logged in')
    setTimeout(()=> {
      navigate(PATH.home)
    },2000)
   }).catch(()=>  toast.error('Something went wrong'))
  }
  return (
    <div className="container h-screen flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false}/>
      <form onSubmit={handleCreateSubmit} autoComplete="off" className="bg-white w-[400px] min-h-[400px] py-8 rounded px-6 flex flex-col gap-5  justify-center items-start">
        <h2 className="font-bold text-3xl text-center mx-auto">Signup</h2>
        <div className="space-y-6">
        <AuthFormItem name="firstname" type="text" placeholder="Enter your firstname"/>
        <AuthFormItem name="lastname" type="text" placeholder="Enter your lastname"/>
        <AuthFormItem name="email" type="email" placeholder="Enter your email"/>
        <AuthFormItem name="password" type="password" placeholder="Enter your password"/>
        <AuthFormItem name="image" type="text" placeholder="Enter your profile picture URL"/>
        </div>
        <Button>Create an account</Button>
        <FormLinkItem title="Already have an account?"/>
      </form>
    </div>
  )
}

export default Register