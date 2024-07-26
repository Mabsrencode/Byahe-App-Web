import React from 'react'
import { Link } from "react-router-dom"
import logo from "/logo.png"
const date = new Date().getFullYear();
const Footer = () => {
    return (


        <footer className="bg-primary-50 rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Biyahe Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">Biyahe</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 font-semibold">
                        <li>
                            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-100 lg:my-8" />
                <span className="block text-center text-sm text-gray sm:text-center font-semibold">© {date} Biyahe. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer