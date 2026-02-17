import type { FC } from "react"

interface formInpType {
type: "text" | "email" | "password",
name?: string,
placeholder:string,
extraClass?:string,
borderCol?:string,
textCol?:string,
bgCol?:string,
isRequired?:boolean
}
const AuthFormItem:FC<formInpType> = ({type,name,placeholder,extraClass,borderCol,textCol,bgCol,isRequired}) => {


  return <input  required={isRequired} name={name} type={type} placeholder={placeholder} className={`border bg-${bgCol} border-${borderCol} text-${textCol} rounded outline-none ${extraClass}`}/>
}

export default AuthFormItem