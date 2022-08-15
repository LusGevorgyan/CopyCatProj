import React from 'react'
import Footer from '../../components/footer/Footer'
import ClientComments from './ClientComments'
import RequirementsForm from './RequirementsForm'
import { Link } from 'react-router-dom'

const RequestPages = () => {
  return (
    <div className="bg-[#E3F6F5] w-full">
      <div className="relative pb-[30px] top-[30px] mx-auto grid gap-[20px] lg:flex justify-center items-center">
        <RequirementsForm />
        <h1 className="text-center text-[40px] leading-[44px] font-bold mb-[24px]"></h1>
        <ClientComments />
      </div>
      <Link to="/old-home">
        <img
          className="h-[35px] w-[150px] lg:hidden cursor-pointer flex justify-center items-center mx-auto"
          src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602f69b524e9195762ced0ff_catbordered.svg"
        />
      </Link>
      <Footer bgColor="#E3F6F5" />
    </div>
  );
}

export default RequestPages