
import hero from "../assets/images/route-guide.jpg"
import mockup from "../assets/images/mockup.png"
import android from "../assets/images/android-mockup.png"
import qr from "../assets/images/qr.png"
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Home = () => {
    return (
        <>
            <section className='px-4 md:px-24 xl:px-64'>
                <div className='flex flex-col-reverse xl:flex-row justify-between gap-6 md:gap-24 lg:mt-24'>
                    <div className="xl:w-[40%]">
                        <h1 className='text-primary font-bold text-4xl md:text-7xl'>Biyahe App</h1>
                        <div className='mt-4 md:mt-12 text-gray font-semibold text-lg'>
                            <p>Bringing you to places</p>
                            <p>Experience lessen hustles and easier transport life.</p>
                            <p className='text-sm mt-6'>Biyahe is a tracking app designed to enhance your travel experience by providing real-time tracking of modern jeeps location. Whether you&apos;re waiting for a ride, Biyahe keeps you informed every step of the way.</p>
                        </div>
                    </div>
                    <div className="xl:w-[60%]">
                        <img src={hero} alt="hero-image" className='rounded-xl' />
                    </div>
                </div>
            </section>
            <section className='px-4 md:px-24 xl:px-64 w-full mt-24 bg-primary py-24'>
                <div className='flex justify-between flex-col-reverse gap-24 lg:flex-row-reverse'>
                    <div className="lg:w-[50%]">
                        <div>
                            <h1 className='text-center font-bold text-4xl md:text-7xl font-bold'>Download Biyahe app now!</h1>
                            <button className='flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl mx-auto mt-12'>
                                <IoLogoGooglePlaystore /> <span>Download on the playstore</span>
                            </button>
                        </div>
                        <div className='mt-12'>
                            <img src={qr} alt="download" className='rounded-xl mx-auto' />
                        </div>
                    </div>
                    <div>
                        <img src={mockup} alt="mockup-image" className='w-[300px] mx-auto' />
                    </div>
                </div>
            </section>
            <section className='px-4 md:px-24 xl:px-64 w-full mt-12 md:mt-24'>
                <div className='flex justify-between flex-col-reverse gap-24 xl:flex-row items-center'>
                    <div className="xl:w-[50%]">
                        <h1 className='font-bold text-2xl md:text-4xl font-bold mb-10'>Why choose <span className="text-primary uppercase">Biyahe</span> app?</h1>
                        <p className="font-semibold text-gray">Biyahe App revolutionizes your bus travel experience with real-time tracking and timely notifications, ensuring you stay informed and in control throughout your journey. Here&apos;s why Biyahe App stands out:</p>
                        <ul className="grid xl:grid-rows-3 grid-flow-col-1 xl:grid-flow-col gap-4 mt-12">
                            <li className="bg-primary px-6 py-3 rounded-xl border border-gray shadow-xl">
                                <div>
                                    <h2 className="font-bold"><i className="fa-solid mr-2 fa-location-dot"></i> Real-Time Tracking</h2>
                                    <p className="font-semibold mt-2 text-gray text-xs sm:text-sm">Follow your bus in real-time on an interactive map, ensuring you know exactly where it is and when it will arrive.
                                    </p>
                                </div>
                            </li>
                            <li className="bg-primary px-6 py-3 rounded-xl border border-gray shadow-xl">
                                <div>
                                    <h2 className="font-bold"><i className="fa-solid mr-2 fa-bell"></i>Proactive Notifications</h2>
                                    <p className="font-semibold mt-2 text-gray text-xs sm:text-sm">Get instant alerts when your bus is approaching, when the driver is needed, and when you&apos;re nearing your destination. Never miss your stop again!</p>
                                </div>
                            </li>
                            <li className="bg-primary px-6 py-3 rounded-xl border border-gray shadow-xl">
                                <div>
                                    <h2 className="font-bold"><i className="fa-solid mr-2 fa-globe"></i>Live Distance and Speed Metrics</h2>
                                    <p className="font-semibold mt-2 text-gray text-xs sm:text-sm">Monitor the distance and speed of your bus, providing you with detailed travel insights.</p>
                                </div>
                            </li>
                            <li className="bg-primary px-6 py-3 rounded-xl border border-gray shadow-xl">
                                <div>
                                    <h2 className="font-bold"><i className="fa-regular mr-2 fa-clock"></i>Accurate Arrival Estimates</h2>
                                    <p className="font-semibold mt-2 text-gray text-xs sm:text-sm">Stay informed with precise arrival times, helping you manage your schedule better.</p>
                                </div>
                            </li>
                            <li className="bg-primary px-6 py-3 rounded-xl border border-gray shadow-xl">
                                <div>
                                    <h2 className="font-bold"><i className="fa-solid mr-2 fa-location-arrow"></i>Destination Directions</h2>
                                    <p className="font-semibold mt-2 text-gray text-xs sm:text-sm">Choose your destination and see the best route to get there, including the direction from your current location to your selected destination.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={android} alt="mockup-image" className='w-[400px] mx-auto' />
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-24 xl:px-64 w-full mt-24 py-24">
                <h1 className="text-center font-bold text-4xl md:text-7xl font-bold">4-Step Guide To In-App Tutorial</h1>
                <div className="flex flex-wrap justify-center items-center mt-24 text-center font-bold text-2xl">
                    <div className="w-[300px]"><h1>Register Account</h1><img src={android} alt="Step-1" /></div>
                    <div className="w-[300px]"><h1>Sign in your Account</h1><img src={android} alt="Step-2" /></div>
                    <div className="w-[300px]"><h1>Select Your Destination</h1><img src={android} alt="Step-3" /></div>
                    <div className="w-[300px]"><h1>Select Active Bus</h1><img src={android} alt="Step-4" /></div>
                    {/* <div className="w-[300px]"><h1></h1><img src={android} alt="Step-5" /></div> */}
                </div>
            </section>
        </>
    )
}

export default Home