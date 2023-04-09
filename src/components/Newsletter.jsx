import React from 'react'

const Newsletter = () => {
return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>REQUEST A FAST QUOTE</h1>
                <p>Tell us your requirements and one of our charter experts will provide you with a no obligation quote as soon as possible.</p>

            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input classname='py-1flex w-full rounded-full text-black' type="email" placeholder='Input Your Email Here' />
                    <button className='bg-[#35e1e3] text-black rounded-md font-medium w-[200px]
                    ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>

            </div>


        </div>

    </div>

    )
}


export default Newsletter