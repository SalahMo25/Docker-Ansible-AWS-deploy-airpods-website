import React from 'react'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
return (
    <section className='contact'>
        <h1 className='text-center text-white text-4xl uppercase'>contact us</h1>
        <div className="underline"></div>
        <h2 className='text-white text-center text-2xl md:text-3xl capitalize py-20 px-3'>we are here to give you the best service possible and in a short time </h2>
        <div className='text-white grid gap-14 px-4 mt-15 capitalize lg:grid-cols-4 xl:grid-cols-4'>
            <ContactInfo />
        </div>
            <div className='mt-32 px-12' data-aos="flip-left" data-aos-once="true">
                <h2 className='text-center text-white text-3xl uppercase mb-4'>get in touch</h2>
                <ContactForm />
            </div>
    </section>
)
}

export default Contact



