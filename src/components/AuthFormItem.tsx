import type { FC } from "react"

interface formInpType {
type: "text" | "email" | "password",
name: string,
placeholder:string
}
const AuthFormItem:FC<formInpType> = ({type,name,placeholder}) => {
  return <input required name={name} type={type} placeholder={placeholder} className="border border-gray-400 rounded py-3 px-4 w-full outline-none"/>
}

export default AuthFormItem