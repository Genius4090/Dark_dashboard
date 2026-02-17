import { NavLink, useNavigate } from "react-router-dom"
import { PATH } from "../../paths/PATH"
import { useContext } from "react";
import { Context } from "../../context/GlobalContext";
import Button from "../../components/Button";


const Sidebar = () => {
  const navigate = useNavigate()
  const {profile } = useContext(Context);

  return (
    <div className="bg-black border-[#151B23] border-r h-screen w-[16%] flex flex-col justify-between items-start">
      <div className="w-full">
      <div className="flex items-center justify-between w-full py-5.5 border-[#151B23] border-b px-6">
      <p className="text-white text-3xl">✶</p>
        <h2 className="text-white text-lg font-semibold">Dashboard</h2>
        
        </div>
        <ul className="flex flex-col gap-8 mt-10 navlink__box w-full px-6">
            <NavLink className="text-white text-lg p-2 rounded" to="/">Home</NavLink>
            <NavLink className="text-white text-lg p-2 rounded" to="/products">Products</NavLink>
            <NavLink className="text-white text-lg p-2 rounded" to="/category">Categories</NavLink>
        </ul>
      </div>
        <div className="flex flex-col items-center justify-between gap-4 px-6  w-full py-5">
           <div className="flex gap-4 items-center">
           <img src={profile?.avatar || "https://freesvg.org/img/abstract-user-flat-4.png"} alt="user__image" className="rounded-full border-[#cecece] border-2 w-10 h-10 object-cover" />
           <h3 className="text-white font-semibold text-[15px]">{profile?.name || "loading..."}</h3>
           </div>
           <Button  btnType="button" onClick={()=>navigate(PATH.profile)} bgColor="white" textSize="md" textColor="black" padY="2" extraClass="w-full">Profile</Button>

        </div>
    </div>
  )
}

export default Sidebar