import { useEffect, useState, type SubmitEvent } from "react"
import { Button, Input, SelectorItem } from "../../components"

import { useNavigate, useParams } from "react-router-dom"

import { crudFn } from "../../services"
import { instance } from "../../hooks"

const ProductCrud = () => {
  const [title,setTitle] = useState<string>("")
  const [price,setPrice] = useState<string>("")
  const [description,setDescription] = useState<string>("")
  const [images,setImages] = useState<string>("")
  const [categoryId,setCategoryId] = useState<string | number>("")
  const navigate = useNavigate()
  const {id} = useParams()

  



  const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
   e.preventDefault()
    const data = {
      title,price,description,images: [images],categoryId
    }
    crudFn("/products",data,navigate,id)
  }


  useEffect(()=>{
    if(id){
      instance.get(`products/${id}`).then(res=> {
     setTitle(res.data.title)
     setPrice(res.data.price)
     setDescription(res.data.description)
     setImages(res.data.images[0])
     setCategoryId(res.data.category.id)
      })
    }
  },[])
 


  return (
    <div className="text-white py-40 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-[#151515] flex flex-col items-center w-[500px] rounded gap-6 justify-center  py-10 px-10">
        <h2 className="font-semibold text-xl">{`${id ? "Update" : "Create"} Product`}</h2>
       <div className="flex flex-col w-full  gap-4">
       <Input value={title} inputVal={setTitle} placeholder="New Product" type="text" extraClass="w-full py-2.5 px-2 bg-[#313131] border-none"/>
       <Input value={price}  inputVal={setPrice} placeholder="Price" type="text" extraClass="w-full py-2.5 px-2 bg-[#313131] border-none"/>      
       <Input value={description}  inputVal={setDescription} placeholder="description" type="text" extraClass="w-full py-2.5 px-2 bg-[#313131] border-none"/>      
       <Input value={images}  inputVal={setImages} placeholder="image" type="text" extraClass="w-full py-2.5 px-2 bg-[#313131] border-none"/>
       <SelectorItem setVal={setCategoryId} value={categoryId} extraClass="w-full py-2.5 !px-2 bg-[#313131] border-none"/>
       </div>
    <Button btnType="submit" textColor="white" bgColor="black" extraClass="px-30 py-2 mt-2">{`${id ? "Update" : "Create"}`}</Button>

      </form>
    </div>
  )
}

export default ProductCrud