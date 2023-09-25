import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function WebLayout() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
};
