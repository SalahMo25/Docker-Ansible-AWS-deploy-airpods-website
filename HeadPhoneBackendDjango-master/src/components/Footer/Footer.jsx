import React from 'react';
import { Link } from 'react-router-dom';
import { footerData, footerNav } from './footerData';
import { useState } from 'react';

const Footer = () => {

    const [emailAddress, setEmailAddress] = useState("");

    function handleSubmit(e) {
    e.preventDefault();
    setEmailAddress('');
}

return (
    <section className='footer'>
    <div className='flex flex-col gap-7 text-white text-xl justify-center py-5 uppercase text-center md:flex-row lg:flex-row xl:flex-row'>
        {footerNav.map((link) => {
            const {id, to, name} = link;
            return (
                <div className='footer-nav'>
                <Link 
                to={to}
                key={id}
                >{name}</Link>
                </div>
            )
        })}
    </div>
    <div className='flex flex-row gap-7 text-white text-xl justify-center py-5'>
        {footerData.map((link) => {
            const {id, icon} = link;
            return (
                <a key={id} className='footer-link'>{icon}</a>
            )
        })}
    </div>
    <div className='flex flex-col gap-4 justify-center items-center text-white py-5 md:flex-row lg:flex-row xl:flex-row'>
        <h2 className='text-xl capitalize'>subscribe to our newsletter</h2>
        <form className='flex gap-0' onSubmit={handleSubmit}>
            <input type="email"
            placeholder='email address'
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className='w-60 p-3 text-black'/>
            <button 
            type='submit'
            className='form-btn w-30 py-1 px-8'
            >Submit</button>
        </form>
    </div>
    <div className='text-white text-center py-5'>
        © 2024 Bass Headphones Store Inc. All rights reserved.
    </div>
    </section>
)
}

export default Footer
