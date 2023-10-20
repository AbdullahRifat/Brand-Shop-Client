/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AiOutlineMeh,AiOutlineShoppingCart,AiFillHome } from "react-icons/ai";
import{BiLogOut,BiLogIn} from "react-icons/bi"
import {BsCartPlus} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/Authprovider";
import Swal from "sweetalert2";
import Mainlayout from "../../Layout/Mainlayout";

const Navbar = () => {


  
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
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <Link to={'/'}><li><a> <AiFillHome/> Home</a></li></Link>
              <Link  to={'/addcarts'}> <li><a><BsCartPlus/> Add Product</a></li> </Link> 
              <Link to={'/mycarts'}> <li><a><AiOutlineShoppingCart/> My Cart</a></li></Link> 
              {user&&<Link to={'/'}><li><a onClick={ handleLogout}> <BiLogOut/> Logout </a></li></Link>}
              <Link><li><Mainlayout> </Mainlayout></li></Link>
              
              
             
            </ul>
          </div>
          <div className="flex justify-start items-center gap-2">
          <a className="flex normal-case text-sm md:text-xl font-bold">Phone<span className="text-red-400">Mania</span> <img className="w-6 rounded-full" src="https://www.svgrepo.com/show/164980/cell-phone.svg" alt="" /> </a>
         
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
              <Link to={'/'}><li><a> <AiFillHome/> Home</a></li></Link>
              <Link  to={'/addcarts'}> <li><a><BsCartPlus/> Add Product</a></li> </Link> 
              <Link to={'/mycarts'}> <li><a><AiOutlineShoppingCart/> My Cart</a></li></Link> 
              <Link to={'/'}><li><a onClick={ handleLogout}> <BiLogOut/> Logout </a></li></Link>
              <Link><li><Mainlayout></Mainlayout></li></Link>
          </ul>
        </div>
       {
         user?<div className="navbar-end gap-4">
         {user?.photoURL?<img className="w-8  rounded-full" src={user.photoURL} alt="" />:<AiOutlineMeh/>}{user?.displayName&&user.displayName}
       
      </div>:<div className="navbar-end gap-4">
         <AiOutlineMeh className="w-4"/>
        <Link to={'/login'}>
        <a className="flex gap-2 items-center justify-center" ><BiLogIn/>Login</a></Link>
      </div>
       }
      </div>
    );
};

export default Navbar;