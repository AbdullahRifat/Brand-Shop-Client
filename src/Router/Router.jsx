import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layout/Mainlayouts";
import Home from "../Pages/Home/Home";
import Addcarts from "../Components/Carts/Addcarts";
import Mycarts from "../Components/Carts/Mycarts";
import BrandPage from "../Pages/BrandPage/BrandPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PhoneDetails from "../Components/Phones/PhoneDetails";
import Update from "../Components/Carts/Update";
import PrivateRoute from "../Firebase/PrivateRoute";
import Error from "../Layout/Error";


const MyRouter = createBrowserRouter([

  {
    path:"/",
    element: <Mainlayouts></Mainlayouts>,
    errorElement: <Error></Error>,
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
      element: <PrivateRoute><Mycarts></Mycarts></PrivateRoute>,
      loader: ()=>fetch("https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/phones/mycart/")
    
    
    
    },
    {
        
        path: "/:brands",
        element: <BrandPage></BrandPage>,
        loader: ()=>fetch('/brands.json'),
      
      
      
      },
      {
        
        path: "/:brands/:id",
        element: <PrivateRoute><PhoneDetails></PhoneDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/brands/${params.id}`),
      
      
      
      },
      {
        
        path: "/login",
        element: <Login></Login>,

      
      
      
      },
      {
        
        path: "/register",
        element: <Register></Register>,
 
      
      
      
      },
      {
        path: "/update/:id",
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=>fetch(`https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/brands/${params.id}`),
        
      }
    ]
  }

])


export default MyRouter;