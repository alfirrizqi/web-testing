import React from 'react'
import TextMe from './TextMe'
import Submit from './Submit'


const Newsletter = () => {
return (
    <div className='w-full py-16 text-white px-10'>
        <div className='max-w-[1240] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>REQUEST A FAST QUOTE</h1>
                <p>Tell us your requirements and one of our charter experts will provide you with a no obligation quote as soon as possible.</p>
            </div>
            <div className='flex justify-end'>
                <TextMe/>
                <Submit/>
            </div>
        </div>

    </div>

    )
}


export default Newsletter