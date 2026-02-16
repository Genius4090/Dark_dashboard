import { useEffect, useState } from "react"
import { instance } from "../../hooks"
import type { ProductType } from "../../@types/ProductType"
import type { CategoryType } from "../../@types/CategoryType"
import { AuthFormItem } from "../../components"


const Products = () => {
   const [products,setProducts] = useState<ProductType[]>()
   const errImage = "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"

  useEffect(()=>{
    instance.get("/products").then(res => setProducts(res.data)
    )
  },[])


  const [categories,setCategories] = useState<CategoryType[]>()
  useEffect(()=>{
    instance.get("/categories").then(res => setCategories(res.data)

    )
  },[])


// product compoennt va unga type berish

   
  return (
    <div className="container py-8">
      <div className="flex justify-between w-full py-4">
     <div className="flex gap-4">
     <AuthFormItem placeholder="Search..." type="text" borderCol="[#3A3A3A]" bgCol="[#1C1C1C]" textCol="white" extraClass="placeholder:text-white px-3 py-1.5"/>
        <select className="border-[#3A3A3A] bg-[#1C1C1C] border py-1.5 px-4 outline-none text-white rounded">
          {categories?.map(item=> <option key={item.id} value={item.id}>{item.name}</option>)} 
        </select>
       

     </div>
     <button className="px-6 py-2 bg-white  font-semibold rounded cursor-pointer">Create</button>
      </div>
    <ul className="text-white flex flex-wrap gap-10 justify-center py-6">
      {products?.map(item=>
        <li key={item.id} className="w-[300px] h-[450px] p-2 rounded flex flex-col items-start justify-between">
          <img src={item.images[0]} onError={(e)=> (e.target as HTMLImageElement).src = errImage} alt="product__img" />
          <h2 className="font-semibold  truncate w-full">{item.title}</h2>
          <div className="flex justify-between w-full items-center py-1">
          <button className="bg-white px-4 text-sm py-1.5 rounded font-semibold text-black">$ {item.price}</button>
           <p className="bg-amber-300 text-black px-4 py-1.5 rounded text-sm font-semibold">{item.category.name}</p>
          </div>
          <p className="line-clamp-4 w-full">{item.description}</p>
    
          <button className="bg-white w-full cursor-pointer py-1.5  rounded font-semibold text-black">Buy</button>
        </li>
      )}
     
    </ul>
    </div>
  )
}

export default Products