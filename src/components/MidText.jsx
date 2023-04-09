import React from 'react';
import Typed from 'react-typed';
 
const MidText = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen text-3xl mx-auto text-center flex flex-col justify-center'>
             <p className='text-[#35e1e3] font-bold p-2'>WELCOME TO REACT AVIATION</p>   
             <h1 className='md:text-3xl sm:text-4xl text-xl font-bold md:py-6'>
                FIRST CLASS PRIVATE JET CHARTERS AND SPECIALIZED IN MID TO LARGE CORPORATE PRIVATE JET AND HELICOPTER CHARTER</h1>
             <div className='flex justify-center items-center'>
                <p className='md:text-1xl sm:text-1xl text-xl font-bold my-3'>
                    PRIVATE JET FLIGHTS FOR 
                </p>
                <Typed className='md:text-1xl sm:text-1xl text-xl font-bold pl-3 text-[#35e1e3]'
                strings={['BUSINESS TRAVEL', 'HOLIDAYS', 'MEDEVAC', 'SURVEILLANCE']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop
                />
             </div>
             <p className='md:text-2xl text-xl font-bold text-gray-500 py-3'>UNRIVALLED Service beyond expectations </p>
             <button className='bg-[#35e1e3] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Get Started</button>
            </div>

        </div>
    )
}

export default MidText