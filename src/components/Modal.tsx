import type { Dispatch, FC, ReactNode, SetStateAction } from "react"
import { Toaster } from "react-hot-toast"

interface ModalType {
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    children: ReactNode,
    extraClass?:string,
}


const Modal:FC<ModalType> = ({openModal,setOpenModal,children,extraClass}) => {
  return openModal && <div id="wrapper" onClick={(e)=>{
    const event = e.target as HTMLDivElement
    if(event.id == "wrapper")setOpenModal(false)}
    } 
  className="backdrop-blur-md fixed top-0 left-0  w-full h-full flex items-center justify-center z-100">
      <Toaster position="top-center" reverseOrder={false}/>
    <div className={`bg-[#161616] rounded-[14px] w-[500px] h-[150px] flex flex-col items-center justify-center ${extraClass}`}>{children}</div>
  </div>
}

export default Modal