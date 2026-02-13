import { MoveRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { PATH } from "../../paths/PATH"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-white text-6xl text-center mt-60">Welcome to Dashboard</h2>
      <button onClick={()=> navigate(PATH.products)} className="px-3 py-2 text-black bg-white font-semibold rounded cursor-pointer flex gap-2 items-center">Explore Products <MoveRight /></button>

    </div>
  )
}

export default Home