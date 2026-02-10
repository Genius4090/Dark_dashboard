import { Route, Routes } from "react-router-dom"
import { Login, NotFound, Register } from "../pages"
import { PATH } from "../paths/PATH"


const AuthRoute = () => {

  const authList = [
    {
      id:1,
      element: <Login/>,
      path: PATH.home
    },
    {
      id:2,
      element: <Register/>,
      path: PATH.register
    },
    {
      id:3,
      element: <NotFound/>,
      path: PATH.notFound
    }
  ]
  return (
    <Routes>
    {authList.map(item=> <Route key={item.id} element={item.element} path={item.path}/>)}
    </Routes>
  )
}

export default AuthRoute