import { useEffect, useState, type ChangeEvent, type Dispatch, type FC, type SetStateAction } from "react"
import type { CategoryType } from "../@types/CategoryType"
import { instance } from "../hooks"

interface SelectType {
  setVal:Dispatch<SetStateAction<string | number>>,
  value: string | number,
  extraClass?:string
}



const SelectorItem:FC<SelectType> = ({setVal,value,extraClass}) => {
  const [categoryList,setCategoryList] = useState<CategoryType[]>([])
  function handleChange(e:ChangeEvent<HTMLSelectElement>){
   if(setVal) setVal(e.target.value)
  }

  useEffect(()=>{
    instance.get("/categories").then(res => setCategoryList(res.data)
    )
  },[])
  return (
    <select value={value} onChange={handleChange} className={`border-[#3A3A3A] bg-[#1C1C1C] w-[200px] border py-1.5 px-4 outline-none text-white rounded ${extraClass}`}>
    {categoryList.map(item=> <option key={item.id} value={item.id}>{item.name}</option>)}
  </select>
  )
}

export default SelectorItem