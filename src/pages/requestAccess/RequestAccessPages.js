import React from 'react'
import Footer from '../../components/footer/Footer'
import RequestInvite from './RequestInvite'
import Navbar from '../../components/navbar/Navbar'
import '../style.css'

const RequestAccessPages = () => {
  return (
    <div className='bg-[#E3F6F5] mx-auto'>
        <div className=''>
            <Navbar />
        </div>
        <div className='pb-[30px] mx-auto flex justify-center items-center'>
            <RequestInvite/>
        </div>
        <Footer bgColor="#E3F6F5"/>
    </div>
  )
}

export default RequestAccessPages