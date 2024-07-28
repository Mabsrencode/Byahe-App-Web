import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import LogoutButton from "../LogoutButton/LogoutButton.jsx"
const SideBar = () => {
    return (
        <aside className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-cover w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4 flex items-center">
                <img src={logo} className='w-[30px] h-[30px]' alt="logo" /> <h5 className="block antialiased tracking-normal font-sans text-xl font-bold leading-snug text-primary">BIYAHE Dashboard</h5>
            </div>
            <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                <Link to={"/admin"} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-primary font-semibold hover:bg-opacity-80 focus:bg-primary focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <i className="fa-solid fa-globe"></i>
                    </div>
                    Active Bus
                </Link>
                <Link to={"/verified-drivers"} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-primary font-semibold hover:bg-opacity-80 focus:bg-primary focus:bg-opacity-80 active:bg-primary active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <i className="fa-solid fa-user"></i>
                    </div>Verified Drivers
                </Link>
                <Link to={"/drivers-verification"} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-primary font-semibold hover:bg-opacity-80 focus:bg-primary focus:bg-opacity-80 active:bg-primary active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <i className="fa-solid fa-user-slash"></i>
                    </div>Verifications
                </Link>
                <Link to={"/graph"} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-primary font-semibold hover:bg-opacity-80 focus:bg-primary focus:bg-opacity-80 active:bg-primary active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <i className="fa-solid fa-square-poll-horizontal"></i>
                    </div>Graph
                </Link>
                <Link to={"/settings"} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-primary font-semibold hover:bg-opacity-80 focus:bg-primary focus:bg-opacity-80 active:bg-primary active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                        <i className="fa-solid fa-gear"></i>
                    </div>Settings
                </Link>
                <LogoutButton />
            </nav>
        </aside>
    )
}

export default SideBar