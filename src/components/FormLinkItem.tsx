import type { FC } from "react"
import { Link } from "react-router-dom"
import { PATH } from "../paths/PATH"


interface FormLinkType {
title:"Don't have an account?" | "Already have an account?",
}


const FormLinkItem:FC<FormLinkType> = ({title}) => {
  return <div className="flex gap-2 justify-center w-full">
  <p className="font-medium ">{title}</p>
  <Link to={title == "Don't have an account?" ? PATH.register : PATH.home} className="underline font-semibold">{title == "Don't have an account?" ? "Signup" : "Login"}</Link>
</div>
}

export default FormLinkItem