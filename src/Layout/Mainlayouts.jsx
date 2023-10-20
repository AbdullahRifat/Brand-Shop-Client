import { Outlet } from "react-router-dom";


import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const Mainlayouts = () => {
    return (
        <div>
             
            <div><Navbar></Navbar></div>
            
            <div><Outlet></Outlet></div>
            <div className="mt-16"><Footer></Footer></div>
        </div>
    );
};

export default Mainlayouts;