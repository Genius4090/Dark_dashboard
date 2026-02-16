import { Mail } from "lucide-react";
import { useContext, useState, type SubmitEvent } from "react";
import { Context } from "../../context/GlobalContext";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { AuthFormItem } from "../../components";



const Profile = () => {
  const { profile} = useContext(Context);
  const [userModal,setUserModal] = useState<boolean>(false)

  const handleUpdateModal = () => {
    setUserModal(true)
  }

  return (
    <div className="flex flex-col items-center gap-6 py-14">
      <div className="relative z-10">
        <img
          src={
            profile?.avatar ||
            "https://freesvg.org/img/abstract-user-flat-4.png"
          }
          alt=""
          className="rounded-full object-cover w-40 h-40 "
          width={160}
          height={160}
        />
        <p className="absolute text-[13px] font-semibold -bottom-1 right-0 bg-yellow-400 text-black p-1 rounded">
          {profile?.role || "default"}
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 items-center ">
          <p className="text-4xl  text-white">
            {profile?.name || "loading..."}
          </p>

          <p className="flex gap-2 items-center text-white text-center ">
            <Mail className="w-5" />
            {profile?.email || "loading..."}
          </p>
          <Button onClick={()=> handleUpdateModal()} bgColor="white" textColor="black" padY="2" extraClass="px-9">
            Change Profile
            </Button>
        </div>
      </div>

      <Modal setOpenModal={setUserModal} extraClass="!w-[400px] !h-[420px]" openModal={userModal}>
       <form className="flex flex-col  gap-10 items-center justify-center  h-full w-full px-4">
        <h2 className="text-white font-semibold text-xl">Update user info</h2>
       <div className="w-full  flex flex-col px-8 gap-6">
       <AuthFormItem isRequired={true} name="username"  placeholder="update username" type="text" textCol="white" borderCol="white" extraClass="placeholder:text-gray-300 py-3 px-2"/>
       <AuthFormItem isRequired={true} name="email"   placeholder="update email" type="email" textCol="white" borderCol="white" extraClass="placeholder:text-gray-300 py-3 px-2"/>
       </div>
     <div className="flex flex-col w-full items-center gap-2 px-7">
     <Button bgColor="white" textColor="black" extraClass="w-full" padY="2">Update</Button>
     <Button onClick={()=> setUserModal(false)} bgColor="transparent" textColor="white" textSize="sm" padY="2" extraClass="underline">Cancel</Button>
     </div>
       </form>
      </Modal>
    </div>
  );
};

export default Profile;
