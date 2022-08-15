import React from 'react'
import Footer from '../../components/footer/Footer';
import ClientComments from './ClientComments';
import { Link } from 'react-router-dom';

const RequestAccessForm = () => {
  return (
    <div className="bg-[#E3F6F5] w-full mx-auto h-full">
      <div className="lg:flex lg:justify-center gap-[20px] pt-[20px] pb-[10px] lg:items-center ">
        <div className="max-w-[800px] px-[16px] mx-auto w-full h-[200px] bg-white">
          <h1 className='mt-[40px] mb-[20px] mx-auto text-start font-["Space Grotesk"] font-[700] mx-[12px] text-[45px]'>
            Get Started
          </h1>
          <p className='font-["Space Grotesk"] text-center mb-[20px] text-[20px] text-center'>
            * We never share user details with third parties, period.
          </p>
          <div className="bg-[#24da78] pt-[22px] px-[18px] rounded-[6px] color-[#141414] text-center">
            Your are being redirected...
          </div>
        </div>
        <ClientComments />
      </div>
      <Link
        className="h-[35px] w-[150px] lg:hidden flex justify-center mx-auto"
        to="/"
      >
        <img src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602f69b524e9195762ced0ff_catbordered.svg" />
      </Link>
      <Footer bgColor="#E3F6F5" />
    </div>
  );
}

export default RequestAccessForm