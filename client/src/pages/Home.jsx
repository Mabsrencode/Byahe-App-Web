import React from 'react'
import hero from "../assets/images/route-guide.jpg"
const Home = () => {
    return (
        <>
            <section className='px-64'>
                <div className='flex justify-between  mt-24'>
                    <div className="w-[50%]">
                        <h1 className='text-primary font-bold text-7xl'>Byahe App</h1>
                        <div className='mt-12 text-gray font-semibold text-lg'>
                            <p>Bringing you to places</p>
                            <p>Experience lessen hustles and easier transport life.</p>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <img src={hero} alt="hero-image" className='rounded-xl' />
                    </div>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}

export default Home