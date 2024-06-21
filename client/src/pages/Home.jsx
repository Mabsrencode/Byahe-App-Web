import React from 'react'
import hero from "../assets/images/route-guide.jpg"
import mockup from "../assets/images/mockup.png"
import qr from "../assets/images/qr.png"
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Home = () => {
    return (
        <>
            <section className='px-64'>
                <div className='flex justify-between gap-24 mt-24'>
                    <div className="w-[50%]">
                        <h1 className='text-primary font-bold text-7xl'>Byahe App</h1>
                        <div className='mt-12 text-gray font-semibold text-lg'>
                            <p>Bringing you to places</p>
                            <p>Experience lessen hustles and easier transport life.</p>
                            <p className='text-sm mt-6'>Byahe is a tracking app designed to enhance your travel experience by providing real-time tracking of modern jeepney's location. Whether you're waiting for a ride, Byahe keeps you informed every step of the way.</p>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <img src={hero} alt="hero-image" className='rounded-xl' />
                    </div>
                </div>
            </section>
            <section className='px-64'>
                <div className='flex justify-between items-center flex-row-reverse gap-24 mt-24'>
                    <div className="w-[50%]">
                        <div>
                            <h1 className='text-center text-7xl font-bold'>Download our app now!</h1>
                            <button className='flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl mx-auto mt-12'>
                                <IoLogoGooglePlaystore /> <span>Download on the playstore</span>
                            </button>
                        </div>
                        <div className='mt-12'>
                            <img src={qr} alt="download" className='rounded-xl mx-auto' />
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <img src={mockup} alt="mockup-image" className='w-[300px]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home