import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Mainlayout from "./Mainlayout";
import Footer from "../Components/Footer/Footer";


const Mainlayouts = () => {
    return (
        <div>
             <Mainlayout></Mainlayout>
            <div><Navbar></Navbar></div>
            
            <div><Outlet></Outlet></div>
            <div className="mt-16"><Footer></Footer></div>
        </div>
    );
};

export default Mainlayouts;