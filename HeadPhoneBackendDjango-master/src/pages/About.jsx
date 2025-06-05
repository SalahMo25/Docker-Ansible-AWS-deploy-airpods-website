import React from 'react'

const About = () => {
  return (
    <section>
        <div className='about'>
            <div className='about-content'>
                <h1 className='text-center text-white text-4xl uppercase'>our storty</h1>
                <div className="underline"></div>
                <div className='about-header flex flex-col text-center'>
                    <h2 className='text-white text-2xl capitalize'>Purpose-built, boldly simple headphones.</h2>
                    <p className='text-white font-thin text-xl mt-5'>Made with every listener in mind. </p>
                </div>
            </div>
        </div>
        <div className='lg:grid xl:grid grid-cols-2 lg:gap-3 items-center align-middle px-10 py-10 xs:p-12'>
            <img src='../assets/images/marshal-2-2.jpg' className='w-85 hidden lg:flex xl:flex' data-aos="fade-right" data-aos-once="true" />
            <div className='text-white flex flex-col items-center gap-6' data-aos="fade-left" data-aos-once="true">
                <h2 className='text-xl uppercase text-center lg:text-3xl xl:text-4xl'>less is best</h2>
                <p className='text-md capitalize text-center lg:text-lg xl:text-xl'>
                    We believe in simplicity. Headphones should enable a great listening experience — no matter who is listening, or what is being listened to.
                </p>
                <p className='capitalize text-center text-md lg:text-lg xl:text-xl'>
                    Understated design, high quality materials, and a relentless focus on sound — no complications or gimmicks.
                </p>
            </div>
        </div>
        <div className="underline-content"></div>
        <div className='lg:grid xl:grid grid-cols-2 items-center py-10 px-10 gap-x-16 xs:p-12'>
            <div className='text-white flex flex-col items-center gap-6' data-aos="fade-right" data-aos-once="true">
                <h2 className='text-xl uppercase text-center lg:text-3xl xl:text-4xl'>Freedom through design</h2>
                <p className='text-md capitalize text-center lg:text-lg xl:text-xl'>
                    Our products are free from any traditional expressions of branding or logos. They are defined by what you listen to, where you go, and the discoveries you make along the way. 
                </p>
            </div>
            <img src='../assets/images/design.jpg' className='w-9/12 hidden lg:flex xl:flex' data-aos="fade-left" data-aos-once="true"/>
        </div>
        <div className="underline-content"></div>
        <div className='lg:grid xl:grid grid-cols-2 items-center px-10 py-10 gap-x-16 xs:p-12'>
            <img src='../assets/images/daniel.jpg' className='hidden lg:flex xl:flex' data-aos="fade-right" data-aos-once="true" />
            <div className='text-white flex flex-col items-center gap-6' data-aos="fade-left" data-aos-once="true">
                <h2 className='text-xl uppercase lg:text-3xl xl:text-4xl'>Drivers</h2>
                <p className='text-md capitalize text-center lg:text-lg xl:text-xl'>
                    The most critical component of any audio product are the drivers — more commonly known as "speakers". This felt like the last place to compromise (although many brands do) and the first place to go all out.
                </p>
            </div>
        </div>
        <div className='about-us px-10 py-24'>
            <div className='about-us-content text-white flex flex-col items-center text-center gap-6 ' data-aos="fade-up" data-aos-once="true">
                <h2 className='text-3xl uppercase'>who are we?</h2>
                <p className='text-xl capitalize'>Bass Headphones was founded in 2019 by James Bertuzzi, who personally oversees product development and manufacturing.</p>
                <p className='text-xl capitalize'>He leads a passionate team of designers, engineers, musicians and audiophiles — committed to offering premium sound and good design to a wider audience.</p>
            </div>
        </div>
    </section>
  )
}

export default About
