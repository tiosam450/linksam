import { createBrowserRouter } from "react-router-dom";
import Home from "./paginas/home";
import Links from "./paginas/links";
import Login from "./paginas/login";
import Admin from "./paginas/admin";

const rotas = createBrowserRouter([{
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/admin',
      element:<Admin/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/links',
      element:<Links/>
    }
  ]
}])

export default rotas