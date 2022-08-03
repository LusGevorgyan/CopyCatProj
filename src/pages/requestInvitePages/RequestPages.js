import React from 'react'
import Footer from '../../components/footer/Footer'
import ClientComments from './ClientComments'
import RequirementsForm from './RequirementsForm'

const RequestPages = () => {
  return (
    <div className='bg-[#E3F6F5] w-full'>
        <div className='relative pb-[30px] top-[30px] mx-auto grid gap-[20px] lg:flex justify-center items-center'>
            <RequirementsForm/>
            <ClientComments/>
        </div>
        <Footer bgColor="#E3F6F5"/>
    </div>
  )
}

export default RequestPages