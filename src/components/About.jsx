import React from 'react'
import Gambar2 from '../assets/gambar2.jpg'


const About = () => {
    return (
        <div className='w-full py-16 px-4 '>
            <p className='text-[#35e1e3] text-4xl font-bold py-20 text-center'>ABOUT US</p>    
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto py-20 ' src={Gambar2} alt='/' />
            <div className='flex flex-col justify-center '>    
                <h1 className='text-[#35e1e3] md:text-2xl sm:text-3xl text-2xl font-bold py-2  '>React Aviation is a Premium Provider of Private jet charter.</h1>
                <h2 className='text-white text-justify'>React Aviation is the global Provider for Charter flights, aircraft management and Luxury Solutions based in Indonesia CeoJetset has organized flights for corporations, governments and private clients to many countries worldwide. Every flight is tailored to ensure seamless travel with maximum efficiency, so customers can be more productive or more relaxed travelling the shortest period of time. CeoJetset connects people and enterprises to growth markets like Indonesia with unique products and services that discerning travelers look for globally, While offering access on its Aircraft and through its partner network, all suited to flight duration, trip purpose and passenger requirements.
                </h2>
            </div>
            </div>
        </div>
       )
}

export default About