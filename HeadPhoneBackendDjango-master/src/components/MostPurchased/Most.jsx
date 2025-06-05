import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const Most = () => {
return (
    <section className='most py-8 '>
        <h2 className='text-white text-2xl lg:text-5xl text-center mb-10 uppercase'>Most Purchased</h2>
        <div className="most-content grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-7 align-middle" data-aos="zoom-in">
            <img src='../assets/images/p4.jpg' className='rounded-2xl border border-spacing-20 border-teal-300' />
            <div className='flex flex-col gap-7 text-white items-center'>
                <h2 className='uppercase text-teal-300 text-xl md:text-2xl lg:text-3xl'>Airpods Max - Mint green</h2>
                <p className='text-lg text-white text-center lg:text-xl xl:text-2xl'>Airpods deliver efforties, all-day audio on the go. And bring noice canvcelation with a customisable fit.</p>
                <div className='flex md:flex-row gap-3 flex-col lg:text-xl xl:text-2xl'>
                    <p>5.0</p>
                    <Rating name="read-only" value={5} readOnly />
                    <p>Based on 247 reviews</p>
                </div>
                <Link to='/products/10' className='most-btn bg-teal-300 lg:text-lg xl:text-xl'>More details</Link>
            </div>
        </div>
    </section>
)
}

export default Most;
