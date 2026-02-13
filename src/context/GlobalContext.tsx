import { createContext, useEffect, useState, type Dispatch, type FC, type ReactNode, type SetStateAction} from "react";
import type { UserType } from "../@types/UserType";
import { instance } from "../hooks";

interface ContextType {
token: string,
setToken:Dispatch<SetStateAction<string>>,
profile: UserType,
setProfile: Dispatch<SetStateAction<UserType>>,
}


export const Context = createContext<ContextType>({} as ContextType)


export const GlobalContext:FC<{children:ReactNode}> = ({children}) => {
    const [token,setToken] = useState<string>(localStorage.getItem("token") || "")
    const [profile,setProfile] = useState<UserType>({} as UserType)
    localStorage.setItem("token",token)

    
  const profileFn = (setProfile : Dispatch<SetStateAction<UserType>>) => {
    instance.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => setProfile(res.data))
}

  useEffect(() => {
    profileFn(setProfile);
  }, [token,setProfile]);


return <Context.Provider value={{token,setToken,profile,setProfile}}>{children}</Context.Provider>
}