import { useNavigate, useParams } from "react-router-dom"
import { instance } from "../../hooks"
import { useEffect, useState, type FC } from "react"
import type { ProductType } from "../../@types/ProductType"
import { CircleDollarSign } from "lucide-react"
import { Button, Modal } from "../../components"
import toast from "react-hot-toast"


const ProductMore = () => {
  const [product,setProduct] = useState<ProductType>()
  const [deleteModal,setDeleteModal] = useState<boolean>(false)
  const {id} = useParams()
  const navigate = useNavigate()
   useEffect(()=>{
    instance.get(`/products/${id}`).then(res=> setProduct(res.data))
   },[])

   function handleDelete(){
  
    instance.delete(`products/${id}`).then(()=> {
      toast.success("Sucessfully deleted")
      setTimeout(()=>{
        navigate(-1)
      },1000)
    }).catch(()=> toast.error("Error occured during delete"))
   }

  return (
    <div className="text-white flex flex-col justify-center items-center w-full min-h-screen">
         <div className="flex w-full justify-between px-10 py-6 border-b border-[#151B23]">
          <h2 className="text-4xl">{product?.title}</h2>
          <div className="flex gap-4">
          <Button btnType="button" onClick={()=> setDeleteModal(true)} textColor="white" extraClass="bg-red-500 py-1.5 px-6">Delete</Button>
          <Button onClick={()=> navigate("update")} btnType="button" textColor="white" extraClass="bg-green-500 py-1.5 px-6">Edit</Button>
          </div>
        </div>
       <div className="flex px-10  gap-10 py-7">
        {/* //leftside */}
          <section className=" h-full w-[800px] flex flex-col gap-6">
            {/* //layer-1 */}
           <div className="relative">
            <div className="w-full h-[600px] rounded-[20px] overflow-hidden">
            <img src={product?.images[0]} alt="product__img" className="w-full h-full object-cover" height={600} width={700}/>
            </div>
            <ul className="absolute bottom-4 left-4 flex gap-4">
              <li className="bg-black py-2 px-3 rounded">ID: {product?.id}</li>
              <li className="bg-black py-2 px-3 rounded">$ {product?.price}</li>
              <li className="bg-yellow-300 text-black font-semibold py-2 px-3 rounded">{product?.category.name}</li>
            </ul>
           </div>

           {/* //layer-2  */}
            <div className="flex flex-col gap-10 bg-[#1F1F1F] border border-pink-700 p-4 rounded-[20px] px-5">
              <div className="flex gap-4 justify-between items-center">
              <h2 className="w-[380px] font-semibold text-lg">{product?.title}</h2>
              <h3 className="bg-[#0c0c0c] rounded-[10px] p-4 flex items-center justify-center">{product?.slug}</h3>
              </div>
              <p className="">{product?.description}</p>
            </div>

          </section>


         {/* //rightside */}
          <section className="flex flex-col gap-6">

            {/* //layer-1 */}
            <div className="flex gap-6">
              <div className="w-full flex gap-1 flex-col items-center justify-center h-[200px] rounded-[20px] bg-[#252525] border border-yellow-600">
                <h2 className="text-3xl font-semibold">PRICE : </h2>
                <p className="text-xl flex items-center gap-2"><CircleDollarSign />{product?.price}</p>
                </div>
              <div className="w-full gap-1 h-[200px] flex flex-col items-center justify-center rounded-[20px] bg-[#252525] border border-purple-700">
                  <h2 className="text-3xl font-semibold">CATEGORY</h2>
                  <p className="text-xl flex items-center gap-1">{product?.category.name}</p>
                 </div>
            </div>

          {/* //layer-2 */}
            <div className="w-full py-4 px-4 overflow-hidden gap-4 bg-[#252525] border border-green-700 rounded-[20px]  flex flex-col items-center justify-center">
              <div className="flex justify-between w-full">
                <h2 className="font-semibold text-xl">{product?.category.name}</h2>
                <h2 className="bg-black text-white font-semibold px-4 rounded flex items-center justify-center">ID: {product?.category.id}</h2>
              </div>
              <img src={product?.category.image} alt="category__img" className="w-full h-[400px] object-cover rounded-[20px]" width={400} height={400}/>
            </div>
          </section>

       </div>

       <Modal openModal={deleteModal} setOpenModal={setDeleteModal}>
        <h2>You sure want to delete?</h2>
        <div className="flex gap-4 mt-4">
        <Button btnType="button" onClick={()=> setDeleteModal(false)} textColor="white" extraClass="bg-green-500 py-1.5 px-6">Cancel</Button>
        <Button onClick={()=> handleDelete()} btnType="button" textColor="white" extraClass="bg-red-500 py-1.5 px-6">Delete</Button>
        </div>
       </Modal>
    </div>
  )
}

export default ProductMore