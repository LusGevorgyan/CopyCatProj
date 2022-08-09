import React from 'react'
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex justify-center h-[100vh] items-center mx-auto bg-[#E3F6F5]">
      <div className="p-[48px] w-[500px] h-[350px] bg-white">
        <h1 className='mt-[40px] mb-[20px] mx-auto text-center font-["Space Grotesk"] font-[700] mx-[12px] text-[45px]'>
          Page Not Found
        </h1>
        <p className='font-["Space Grotesk"] text-center mb-[20px] text-[20px]'>
          old-home The page you are looking for doesn't exist or has been moved.
          If you think this is a mistake, get in touch.
        </p>
        <Link to="/">
          <Button
            bgColor="#392396"
            textColor="white"
            size="16px"
            width="100%"
            height="50px"
          >
            Back To Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound