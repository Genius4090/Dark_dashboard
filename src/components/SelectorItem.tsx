import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react"
import type { CategoryType } from "../@types/CategoryType"

interface SelectType {
  categoryList:Array<CategoryType>,
  setVal:Dispatch<SetStateAction<string | number>>
}



const SelectorItem:FC<SelectType> = ({categoryList,setVal}) => {
  function handleChange(e:ChangeEvent<HTMLSelectElement>){
   if(setVal) setVal(e.target.value)
  }
  return (
    <select onChange={handleChange} className="border-[#3A3A3A] bg-[#1C1C1C] border py-1.5 px-4 outline-none text-white rounded">
    {categoryList.map(item=> <option key={item.id} value={item.id}>{item.name}</option>)}
  </select>
  )
}

export default SelectorItem