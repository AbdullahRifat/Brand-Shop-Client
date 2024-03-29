/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AiOutlineMeh,AiOutlineShoppingCart,AiFillHome } from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/Authprovider";
import Swal from "sweetalert2";

const Navbar2 = () => {


  
  const [logShow,setLogShow] = useState(false)

  const navigate = useNavigate()
  const location= useLocation()
  const {logout} = useContext(AuthContext)

   const handleLogout = ()=>{
      logout().then((res)=> navigate(location?.state? location.state : '/'))
      .then(()=> Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'logged out',
        showConfirmButton: false,
        timer: 1500,
      }))
      .catch(err=> console.log(err))
   }
   const { user } = useContext(AuthContext)


    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
           
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar2;