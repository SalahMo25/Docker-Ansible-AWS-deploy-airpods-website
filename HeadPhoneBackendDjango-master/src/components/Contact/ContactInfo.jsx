import React from 'react'

const ContactInfo = () => {
return (
    <>
        <div className='flex flex-col items-center gap-3 contact-info' >
            <div className='contact-icon text-5xl'>
                <i className="fa-regular fa-envelope"></i>
            </div>
            <h3 className='text-2xl'>email</h3>
            <p className='text-lg'>info@bassheadphones.com</p>
        </div>
        <div className='flex flex-col items-center gap-3 contact-info'>
            <div className='contact-icon text-5xl'>
                <i className="fa-solid fa-phone"></i>
            </div>
            <h3 className='text-2xl'>phone number</h3>
            <p className='text-lg'>+2001021048397</p>
        </div>
        <div className='flex flex-col items-center gap-3 contact-info'>
            <div className='contact-icon text-5xl'>
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <h3 className='text-2xl'>location</h3>
            <p className='text-lg'>223 st maadi - cairo</p>
        </div>
        <div className='flex flex-col items-center gap-3 contact-info'>
            <div className='contact-icon text-5xl'>
                <i className="fa-regular fa-clock"></i>
            </div>
            <h3 className='text-2xl'>work day</h3>
            <p className='text-lg'>sun - fri  : 10AM to 6AM</p>
        </div>
    </>
  )
}

export default ContactInfo
