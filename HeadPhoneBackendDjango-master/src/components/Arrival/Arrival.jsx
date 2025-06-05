import React from 'react';
import { Link } from 'react-router-dom';

const Arrival = () => {
return (
    <section className='arrival mb-20 '>
        <h2 className='text-white text-2xl lg:text-5xl text-center mb-10 mt-16 uppercase'>Newest Addition</h2>
        <div className='flex flex-col gap-20 arrival-cards'>
            <div className='flex flex-col justify-evenly gap-3 items-center xs:px-3  lg:flex-row lg:px-4 xl:flex-row' data-aos="fade-right" data-aos-once="true">
                <img className='rounded-lg'  src='../assets/images/p1.jpg' />
                <div className="new-arrival flex flex-col gap-5 text-white items-center">
                    <h3 className='uppercase md:text-4xl text-2xl'>Apple Airpod Pro+</h3>
                    <p className='capitalize md:text-lg text-md text-center px-3'>The best noise cancelling with two high performance proesors and eight microphones.</p>
                    <Link to='/products/9' className='arrival-btn'>more details</Link>
                </div>
            </div>
            <div className='flex flex-col justify-evenly gap-3 items-center xs:px-3 2xs:px-2 lg:flex-row-reverse lg:px-5 xl:flex-row-reverse'data-aos="fade-left" data-aos-once="true">
                <img className='rounded-lg '  src='../assets/images/p2.jpg' />
                <div className="new-arrival flex flex-col gap-5 text-white items-center">
                    <h3 className='uppercase md:text-4xl text-2xl'>Apple Airpod</h3>
                    <p className='capitalize md:text-lg text-md text-center px-3'>the iconic Airpod from Marshall with 80+ solid hours of wireless playtime, wireless charging and a new.</p>
                    <Link to='/products/8' className='arrival-btn'>more details</Link>
                </div>
            </div>
            <div className='flex flex-col justify-evenly gap-3 items-center xs:px-3 2xs:px-2 lg:flex-row lg:px-4 xl:flex-row' data-aos="fade-right" data-aos-once="true">
                <img className='rounded-lg'  src='../assets/images/p3.jpg' />
                <div className="new-arrival flex flex-col gap-5 text-white items-center">
                    <h3 className='uppercase md:text-4xl text-2xl'>Airpod Pro</h3>
                    <p className='capitalize md:text-lg text-md text-center px-3'>Tune in to your sounds with big, bold bass. Tune out distractions with Active Noise Cancelling (ANC).</p>
                    <Link to='/products/9' className='arrival-btn'>more details</Link>
                </div>
            </div>
        </div>
    </section>
)
}

export default Arrival
