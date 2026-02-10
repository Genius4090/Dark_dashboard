import { createContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction} from "react";

interface ContextType {
token: string,
setToken:Dispatch<SetStateAction<string>>
}


export const Context = createContext<ContextType>({} as ContextType)


export const GlobalContext:FC<{children:ReactNode}> = ({children}) => {
    const [token,setToken] = useState<string>(localStorage.getItem("token") || "")
    localStorage.setItem("token",token)
return <Context.Provider value={{token,setToken}}>{children}</Context.Provider>
}