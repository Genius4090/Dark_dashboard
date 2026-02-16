import type { SubmitEvent } from "react"
import { AuthFormItem } from "../../components"
import Button from "../../components/Button"
import FormLinkItem from "../../components/FormLinkItem"

import { useNavigate } from "react-router-dom"

import { Toaster } from "react-hot-toast"

import { registerFn } from "../../services"



const Register = () => {
  const navigate = useNavigate()
  function handleCreateSubmit(e:SubmitEvent<HTMLFormElement>){
    registerFn({e,navigate})
  }
  return (
    <div className="container h-screen flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false}/>
      <form onSubmit={handleCreateSubmit} autoComplete="off" className="bg-white w-[400px] min-h-[400px] py-8 rounded px-6 flex flex-col gap-5  justify-center items-start">
        <h2 className="font-bold text-3xl text-center mx-auto">Signup</h2>
        <div className="space-y-6">
        <AuthFormItem isRequired={true} extraClass="w-full px-3 py-3" name="firstname" type="text" placeholder="Enter your firstname"/>
        <AuthFormItem isRequired={true} extraClass="w-full px-3 py-3" name="lastname" type="text" placeholder="Enter your lastname"/>
        <AuthFormItem isRequired={true} extraClass="w-full px-3 py-3" name="email" type="email" placeholder="Enter your email"/>
        <AuthFormItem isRequired={true} extraClass="w-full px-3 py-3" name="password" type="password" placeholder="Enter your password"/>
        <AuthFormItem isRequired={true} extraClass="w-full px-3 py-3" name="image" type="text" placeholder="Enter your profile picture URL"/>
        </div>
        <Button bgColor="black" textColor="white" extraClass="w-full" padY="3" textSize="lg">Create an account</Button>
        <FormLinkItem title="Already have an account?"/>
      </form>
    </div>
  )
}

export default Register