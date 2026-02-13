import { Route, Routes } from "react-router-dom"

import { Category, Home, NotFound, Products, Profile } from "../pages"
import { PATH } from "../paths/PATH"


const Dashboard = () => {

  const dashboardList = [
    {
      id:1,
      element: <Home/>,
      path: PATH.home
    },
    {
      id:2,
      element: <Products/>,
      path: PATH.products
    },
    {
      id:3,
      element: <Category/>,
      path: PATH.category
    },
    {
      id:4,
      element: <Profile/>,
      path: PATH.profile
    },
    {
      id:5,
      element: <NotFound/>,
      path: PATH.notFound
    }
  ]
  return (
    <Routes>
    {dashboardList.map(item=> <Route key={item.id} element={item.element} path={item.path}/>)}
    </Routes>
  )
}

export default Dashboard