import type { FC, MouseEventHandler, ReactNode } from "react"

interface BtnType {
onClick?: MouseEventHandler<HTMLButtonElement>
children: ReactNode
}


const Button:FC<BtnType> = ({onClick,children}) => {
 return <button onClick={onClick} className="w-full cursor-pointer bg-black text-white rounded  font-semibold py-3 text-lg tracking-wider">{children}</button> 
}

export default Button