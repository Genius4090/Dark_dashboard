import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { UserType } from "../@types/UserType";
import { instance } from "../hooks";

interface ContextType {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  profile: UserType;
  setProfile: Dispatch<SetStateAction<UserType>>;
}

export const Context = createContext<ContextType>({} as ContextType);

export const GlobalContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || "",
  );
  const [profile, setProfile] = useState<UserType>({} as UserType);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);



  const profileFn = async () => {
    if (!token) return;
    try {
      const res = await instance.get<UserType>("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(res.data);
      
    } catch (err) {
      console.log("Profile error", err);
    }
  };
  useEffect(() => {
    profileFn();
  }, [token]);

  return (
    <Context.Provider value={{ token, setToken, profile, setProfile }}>
      {children}
    </Context.Provider>
  );
};
