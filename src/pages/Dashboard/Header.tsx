import { useLocation, useNavigate } from "react-router-dom"
import { PATH } from "../../paths/PATH"
import { useContext, useState } from "react"
import Modal from "../../components/Modal"
import { Context } from "../../context/GlobalContext"
import toast from "react-hot-toast"
import Button from "../../components/Button"
import Breadcrumps from "../../components/Breadcrumps"

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
    <div className="bg-black sticky top-0 w-full z-100 py-5 flex justify-between items-center  px-4 border-[#151B23] border-b">
        <h2 className="text-lg text-white  font-semibold tracking-wide">
          {location.pathname === PATH.home && "Home"}
          {location.pathname === PATH.products && "Products"}
          {location.pathname === PATH.category && "Categories"}
          {location.pathname === PATH.productCreate && "Create a product"}
          {location.pathname === PATH.productMore && "Product details"}
          {location.pathname === PATH.productUpdate && "Update a product"}
          {location.pathname === PATH.profile && "Profile"}
        </h2>
        <Breadcrumps/>
        <Button onClick={()=> setLogModal(true)} bgColor="white" textColor="black" padX="6" padY="2">Log Out</Button>
        <Modal openModal={logModal} setOpenModal={setLogModal}>
          <h2 className="text-white font-semibold text-lg text-center ">Do you want to log out?</h2>
          <div className="flex gap-4 mt-4">
          <Button onClick={()=> setLogModal(false)} bgColor="white" textColor="black" padY="2" padX="6">Cancel</Button>
          <Button onClick={()=> handleLogOut()} extraClass="bg-red-500" textColor="white" padX="6" padY="2">Log Out</Button>

          </div>
        </Modal>
    </div>
  )
}

export default Header