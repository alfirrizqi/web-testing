import React from 'react'
import Gambar2 from '../assets/gambar2.jpg'
import Gambar5 from '../assets/gambar5.jpg'
import Gambar4 from '../assets/gambar4.jpg'

const Service = () => {
    return (

        <div className='w-full bg-[#161d27] py-16 px-4'>
            <p className='text-[#35e1e3] text-4xl font-bold py-20 text-center'>OUR SERVICES</p>    
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-20' src={Gambar2} alt='/' />
            <div className='flex flex-col justify-center my-20'>    
                <h1 className='text-white md:text-2xl sm:text-3xl text-2xl font-bold py-2'>PRIVATE JET CHARTER FOR BUSINESS TRAVEL</h1>
                <h2 className='text-white text-justify'>The benefits of private business aviation are no secret. Successful business people, companies, and start-ups choose to travel by private business jet because it allows them to avoid the crowds, stay productive while in the air, visit multiple locations in a limited time, travel to remote destinations and, when speed is of the essence, a business jet gets you to your destination in the shortest time possible.
                With a global network of offices, we have access to a vast array of popular private planes that complement your unique travel requirements. We combine this worldwide influence with an unrivalled level of service to create a charter experience that’s bespoke, effortless and luxurious every time.
                </h2>
            </div>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-20' src={Gambar5} alt='/' />
            <div className='flex flex-col justify-center'>
                <h1 className='text-white md:text-2xl sm:text-3xl text-2xl font-bold py-2'>PRIVATE JET CHARTER FOR HOLIDAYS</h1>
                <h2 className='text-white text-justify'>Hiring a private plane for a family getaway, holidays with friends or bleisure trips (the trend of combining business trips with leisure activities), is the best way to get every last minute of enjoyment out of your precious leisure time.
                When you opt to travel on a private jet charter, you get to choose when you fly, avoid crowds and queues, take the most direct route to your destination (even in remote areas), with every aspect of your flight designed for your comfort and pleasure. ACS has a simple booking process and we will find you the best aircraft at the best price, available when you want it.
                </h2>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-20 ' src={Gambar4} alt='/' />
            <div className='flex flex-col justify-center'>
                <h1 className='text-white md:text-2xl sm:text-3xl text-2xl font-bold py-2'>PRIVATE JET CHARTER FOR MEDICAL AIR AMBULANCE FLIGHT</h1>
                <h2 className='text-white text-justify'>This is the fastest service in the health industry to transport injured or sick patients at the place of treatment or post medical treatment. With this service, we provide a sense of comfort and safety for patients and their families.
                Air Ambulance Medical Tansportation (Medevac) is critical when someone's life is on the line and they need to be relocated for specialized care or to be closer to loved ones. If you ever find yourself or a loved one in this situation, even though we hope you don't, Exquisite Air Charter is here to help. We will arrange an air ambulance charter flight to safely fly critically ill or injured loved ones in a timely manner to ensure they receive the medical attention required.
                </h2>
            </div>
        </div>
        </div>
    )
}

export default Service