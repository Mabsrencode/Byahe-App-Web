import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar/SideBar'
const AdminLayout = () => {
    return (
        <>
            <main className='bg-primary-50 min-h-screen flex'>
                <SideBar />
                <Outlet />
            </main>
        </>
    )
}

export default AdminLayout