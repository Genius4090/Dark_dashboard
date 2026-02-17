import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react"

interface formInpType {
type: "text" | "email" | "password",
name?: string,
placeholder:string,
extraClass?:string,
borderCol?:string,
textCol?:string,
bgCol?:string,
isRequired?:boolean,
inputVal?:Dispatch<SetStateAction<string>>,
value: string

}
const Input:FC<formInpType> = ({type,name,placeholder,extraClass,borderCol,textCol,bgCol,isRequired,inputVal,value}) => {
   function handleChange(e: ChangeEvent<HTMLInputElement>){
   if(inputVal) inputVal(e.target.value)
   }

  return <input value={value} onChange={handleChange} required={isRequired} name={name} type={type} placeholder={placeholder} className={`border bg-${bgCol}  border-${borderCol} text-${textCol} rounded outline-none ${extraClass}`}/>
}

export default Input