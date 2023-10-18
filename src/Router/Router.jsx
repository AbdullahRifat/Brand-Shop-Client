import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layout/Mainlayouts";
import Home from "../Pages/Home/Home";
import Addcarts from "../Components/Carts/Addcarts";
import Mycarts from "../Components/Carts/Mycarts";


const MyRouter = createBrowserRouter([

  {
    path:"/",
    element: <Mainlayouts></Mainlayouts>,
    children:[
        {
    
            path: "/",
            element: <Home></Home> ,
            loader: ()=>fetch('/brands.json'),
          
        
      },
      {
        
        path: "/addcarts",
        element: <Addcarts></Addcarts>,
    
      
    
    },
    {
        
      path: "/mycarts",
      element: <Mycarts></Mycarts>,
    
    
    
    },
    ]
  }

])


export default MyRouter;