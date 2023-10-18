import { AiOutlineMeh,AiOutlineShoppingCart,AiFillHome } from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
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
             
              
             
            </ul>
          </div>
          <a className=" normal-case text-xl font-bold">Phone <span className="text-red-400">Mania</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
              <Link to={'/'}><li><a> <AiFillHome/> Home</a></li></Link>
              <Link  to={'/addcarts'}> <li><a><BsCartPlus/> Add Product</a></li> </Link> 
              <Link to={'/mycarts'}> <li><a><AiOutlineShoppingCart/> My Cart</a></li></Link> 
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <AiOutlineMeh className="w-4"/>
          <a className="btn">Login</a>
        </div>
      </div>
    );
};

export default Navbar;