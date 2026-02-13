import { Mail, User } from "lucide-react"
import { useContext } from "react"
import { Context } from "../../context/GlobalContext"



const Profile = () => {
  const {profile} = useContext(Context);
  return (
    <div className="text-white flex items-center gap-8 p-8">
      <img src={profile?.avatar || "https://freesvg.org/img/abstract-user-flat-4.png"} alt="" className="rounded-full object-cover w-40 h-40 " width={160} height={160}/>
      <div className="flex flex-col  px-2 gap-4 py-8  relative w-[14%]">
      <p className="absolute text-[13px] font-semibold -top-4 right-0 bg-yellow-400 text-black p-1 rounded">{profile?.role || "default"}</p>
       <div className="space-y-2">
       <p className="flex gap-2 w-full text-2xl items-center"><User className="w-5"/>{profile?.name || "loading..."}</p>

       <p className="flex gap-2 w-full items-center"><Mail className="w-5"/>{profile?.email || "loading..."}</p>
       </div> 
         <button className="px-3 py-2 text-black bg-white font-semibold rounded cursor-pointer">Change Profile</button>

      </div>
    </div>
  )
}

export default Profile