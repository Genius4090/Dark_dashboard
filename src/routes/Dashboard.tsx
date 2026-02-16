import { Route, Routes } from "react-router-dom"

import { Category, Home, NotFound, ProductCrud, ProductMore, Products, Profile } from "../pages"
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
    },
    {
      id:6,
      element: <ProductCrud/>,
      path: PATH.productCreate
    },    
    {
      id:7,
      element: <ProductCrud/>,
      path: PATH.productUpdate
    },
    {
      id:8,
      element: <ProductMore/>,
      path: PATH.productMore
    }
  ]
  return (
    <Routes>
    {dashboardList.map(item=> <Route key={item.id} element={item.element} path={item.path}/>)}
    </Routes>
  )
}

export default Dashboard