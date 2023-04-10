import React from 'react'
import Gambar9 from '../assets/gambar9.jpg'

const Contact = () => {
    return(
        <div className='w-full py-16 px-4 '>
            <p className='text-[#35e1e3] text-4xl font-bold py-20 text-center'>OUR LOCAL OFFICE</p>    
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto py-20 ' src={Gambar9} alt='/' />
            <div className='flex flex-col justify-center '>    
                <h1 className='text-[#35e1e3] md:text-2xl sm:text-3xl text-2xl font-bold py-2  '>BANJARMASIN OFFICE</h1>
                <h2 className='text-black text-justify'> Jl. Jendral A. Yani KM 7,8 Komplek Commercial Citraland Clauster I-Walk 2 Blok, IW 02 Nomor 11
                            Kelurahan Menarap lama RT 03/RW 01
                            Kecamatan Kertak Hanyar, Kabupaten Banjar, Kota Banjarmasin
                            Provinsi Kalimantan Selatan. Phone number : +621819284322</h2>
            </div> 
            </div>
        </div>
    )
}

export default Contact