import { createBrowserRouter } from "react-router-dom";
import Home from "../paginas/home";
import Links from "../paginas/links";
import Login from "../paginas/login";
import Admin from "../paginas/admin";
import Private from "./Private";

const rotas = createBrowserRouter([{
  children:[
    {
      path:'/',
      element:<Private><Home/></Private>
    },
    {
      path:'/admin',
      element:<Private><Admin/></Private>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/links',
      element:<Private><Links/></Private>
    }
  ]
}])

export default rotas