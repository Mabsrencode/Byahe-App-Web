import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Logo from "../../Assets/logo/logo.svg";
// import SignInForm from '../Forms/SignInForm';
// import SignUpForm from '../Forms/SignUpForm';
// import LogoutButton from '../LogoutButton/LogoutButton';
const Header = () => {
    const [data, setData] = useState()
    const status = data?.status
    const [navClick, setNavClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleClick = () => {
        setNavClick(!navClick);
        if (!navClick) {
            document.getElementById("line").style.rotate = "45deg";
            document.getElementById("line2").style.marginTop = "-2px";
            document.getElementById("line2").style.rotate = "-45deg";
        } else {
            document.getElementById("line").style.rotate = "0deg";
            document.getElementById("line2").style.marginTop = "8px";
            document.getElementById("line2").style.rotate = "0deg";
        }
    };



    const validate = async () => {
        const { data } = await axios.post(
            "/auth",
            {},
            { withCredentials: true }
        );
        setData(data)
    }
    useEffect(() => {
        validate()
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [status]);

    return (
        <>
            <nav className={`fixed z-20 w-full ${navClick && "bg-primary-50"} lg:bg-transparent ${isScrolled && "backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 shadow-md"}`}>
                <div className="container m-auto px-2 md:px-12 lg:px-16 lg:py-4">
                    <div className={`flex flex-wrap justify-between items-center py-3 ${navClick && "gap-6"} lg:gap-6 md:py-4 md:gap-0`}>
                        <div className="w-full px-6 flex justify-between items-center lg:w-max md:px-0">
                            <Link to={"/"} aria-label="logo" className="flex space-x-2 items-center">
                                <h1 className="text-4xl font-bold text-primary">Biyahe</h1>
                            </Link>

                            <button onClick={handleClick} aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 lg:hidden">
                                <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-primary transtion duration-300"></div>
                                <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-primary transtion duration-300"></div>
                            </button>
                        </div>

                        <div className={`${navClick ? "scale-100 h-full p-6 md:mt-12" : "scale-0"} lg:mt-0 origin-top transition-all w-full lg:scale-100  lg:flex flex-wrap justify-end items-center space-y-6  rounded-xl  bg-white-50 lg:space-y-0 lg:p-0 lg:flex-nowrap lg:bg-transparent lg:w-7/12`}>
                            <div className="text-black-100 lg:pr-4">
                                <ul className="font-medium text-sm md:flex gap-2">
                                    <li className="before:content-[''] relative before:h-[2px] before:w-0 before:hover:w-full before:absolute before:bg-gray-500 before:bottom-0 before:left-0">
                                        <Link onClick={handleClick} to={"/"} className="block md:px-4 pb-1">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="before:content-[''] relative before:h-[2px] before:w-0 before:hover:w-full before:absolute before:bg-gray-500 before:bottom-0 before:left-0">
                                        <Link onClick={handleClick} to={"/about"} className="block md:px-4 pb-1">
                                            About
                                        </Link>
                                    </li>
                                    <li className="before:content-[''] relative before:h-[2px] before:w-0 before:hover:w-full before:absolute before:bg-gray-500 before:bottom-0 before:left-0">
                                        <Link onClick={handleClick} to={"/contact"} className="block md:px-4 pb-1">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;