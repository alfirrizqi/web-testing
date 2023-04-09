import React from 'react'
import Gambar2 from '../assets/gambar2.jpg'


const Service = () => {
    return (

        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Gambar2} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-[]'>OUR SERVICES</p>
                <h1>PRIVATE JET CHARTER FOR BUSINESS TRAVEL</h1>
                <h2>The benefits of private business aviation are no secret. Successful business people, companies, and start-ups choose to travel by private business jet because it allows them to avoid the crowds, stay productive while in the air, visit multiple locations in a limited time, travel to remote destinations and, when speed is of the essence, a business jet gets you to your destination in the shortest time possible.
                With a global network of offices, we have access to a vast array of popular private planes that complement your unique travel requirements. We combine this worldwide influence with an unrivalled level of service to create a charter experience that’s bespoke, effortless and luxurious every time.
                </h2>
            </div>
            </div>
 
        </div>
    )
}

export default Service