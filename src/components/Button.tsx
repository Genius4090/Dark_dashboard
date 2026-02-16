import type { FC, MouseEventHandler, ReactNode } from "react"

interface BtnType {
onClick?: MouseEventHandler<HTMLButtonElement>
children: ReactNode,
extraClass?:string,
bgColor?: string,
textColor: string,
padY?:string,
padX?:string,
textSize?:string
}


const Button:FC<BtnType> = ({onClick,children,extraClass,bgColor,textColor,padY,padX,textSize}) => {
 return <button onClick={onClick} className={`cursor-pointer bg-${bgColor} text-${textColor} rounded font-semibold py-${padY} px-${padX} text-${textSize} tracking-wider ${extraClass}`}>{children}</button> 
}

export default Button