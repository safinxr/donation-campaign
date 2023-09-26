import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const [navBg, setNavBg] =useState(false)

    window.addEventListener('scroll',()=>{
        if(window.scrollY >=20){
            setNavBg(true);
        }
        else{
            setNavBg(false)
        }
    })

    
    const navList = <>
        <li className="ms-10 text-lg font-bold"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline underline-offset-4" : ""
            }
        >
            Home
        </NavLink></li>
        <li className="ms-10 text-lg font-bold"><NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline underline-offset-4" : ""
            }
        >
            Donation
        </NavLink></li>
        <li className="ms-10 text-lg font-bold"><NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline underline-offset-4" : ""
            }
        >
            Statistics
        </NavLink></li>
    </>;

    return (
        <nav className={navBg?'py-1 bg-white sticky top-0':'py-4 sticky top-0'}> 
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link><img className="w-44" src="https://i.ibb.co/KhgNPfm/Logo.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
            </div>
        </nav>
    )
};
