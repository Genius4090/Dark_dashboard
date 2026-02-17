import toast from "react-hot-toast"

import { PATH } from "../paths/PATH"
import { type Dispatch, type SetStateAction, type SubmitEvent } from "react"
import type { NavigateFunction } from "react-router-dom"
import { instance } from "../hooks"
//types

interface RegisterType {
 e: SubmitEvent<HTMLFormElement>,
 navigate: NavigateFunction
}

interface LoginType {
    e: SubmitEvent<HTMLFormElement>,
    setToken: Dispatch<SetStateAction<string>>
}
// functions


const loginFn = ({e,setToken} : LoginType) => {
    e.preventDefault()
    const data = {
     email:e.target.email.value,
     password:e.target.password.value
    }
    instance.post("/auth/login",data).then(res => {
     toast.success('Successfully logged in')
     setTimeout(()=>{
     setToken(res.data.access_token)
     },1000)
    }
    ).catch(()=> toast.error("This account doesn't exists"))
}

const registerFn = ({e,navigate} : RegisterType) => {
    e.preventDefault()
    const data = {
     name: `${e.target.firstname.value} ${e.target.lastname.value}`,
     email: e.target.email.value,
     password: e.target.password.value,
     avatar: e.target.image.value,
    }
    instance.post("/users",data).then(()=> {
     toast.success('Successfully created an account')
     setTimeout(()=> {
       navigate(PATH.home)
     },2000)
    }).catch(()=>  toast.error('Something went wrong'))
}


const crudFn = (URL:string,data:any,navigate:NavigateFunction,id:string | undefined) => {
  if(id){
    instance.put(`${URL}/${id}`,data).then(()=> {
        toast.success("Successfully updated")
        setTimeout(()=>{
          navigate(-1)
        },1000)
      }).catch(()=> toast.error("Error occured during update"))
  }else {
    instance.post(URL,data).then(()=> {
        toast.success("Successfully created")
        setTimeout(()=>{
          navigate(-1)
        },1000)
      }).catch(()=> toast.error("Error occured during create"))
  }
}


export {loginFn,registerFn,crudFn}