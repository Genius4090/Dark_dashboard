import { useLocation, useNavigate } from "react-router-dom"
import { PATH } from "../../paths/PATH"
import { useContext, useState } from "react"
import Modal from "../../components/Modal"
import { Context } from "../../context/GlobalContext"
import toast from "react-hot-toast"

const Header = () => {
  const [logModal,setLogModal] = useState<boolean>(false)
  const location = useLocation()
  const navigate = useNavigate()
  const {setToken} = useContext(Context)
 
  const handleLogOut = () => {
    toast.success('Successfully logged out',
      {
        style: {
          background: '#333',
          color: '#fff',
        },
      }
    );
    setTimeout(()=>{
      setToken("")
      navigate("/")
    },1000)
  }
  return (
    <div className="bg-black sticky top-0 w-full py-5 flex justify-between items-center  px-4 border-[#151B23] border-b">
        <h2 className="text-lg text-white  font-semibold tracking-wide">
          {location.pathname === PATH.home && "Home"}
          {location.pathname === PATH.products && "Products"}
          {location.pathname === PATH.category && "Categories"}
          {location.pathname === PATH.profile && "Profile"}
        </h2>
        <button onClick={()=> setLogModal(true)} className="px-6 py-2 bg-white  font-semibold rounded cursor-pointer">Log Out</button>
        <Modal openModal={logModal} setOpenModal={setLogModal}>
          <h2 className="text-white font-semibold text-center">Do you want to log out?</h2>
          <div className="flex gap-4 mt-4">
          <button onClick={()=> setLogModal(false)} className="px-6 py-2 bg-white  font-semibold rounded cursor-pointer">Cancel</button>
          <button onClick={()=> handleLogOut()} className="px-6 py-2 bg-red-500 text-white  font-semibold rounded cursor-pointer">Log Out</button>

          </div>
        </Modal>
    </div>
  )
}

export default Header