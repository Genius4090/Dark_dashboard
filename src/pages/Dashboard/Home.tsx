import { MoveRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { PATH } from "../../paths/PATH"
import Button from "../../components/Button"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-white text-6xl text-center mt-60">Welcome to Dashboard</h2>
      <Button onClick={()=> navigate(PATH.products)} textColor="black" padX="4" padY="2" bgColor="white" extraClass="flex gap-2 items-center">Explore Products <MoveRight /></Button>

    </div>
  )
}

export default Home