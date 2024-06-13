import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const RootLayout = () => {
    return (
        <>
            <Header />
            <main className='pt-32 bg-primary-50 min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout