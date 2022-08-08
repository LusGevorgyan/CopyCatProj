import React from 'react'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const SectionNine = () => {
  return (
    <div className='bg-[#e3f6f5] w-full mx-auto mt-[20px] rounded-[15px] py-[18px] sm:py-[28px] lg:py-[48px] px-[32px] sm:px-[52px] lg:px-[72px]'>
        <div className='w-full mx-auto'>
          <h1 className='mb-[24px] mt-[100px] mx-[20px] text-[30px] sm:text-[40px] lg:text-[54px] text-center font-bold leanding-[30px] sm:leanding-[40px] lg:leanding-[54px]'>Scale your front-end development infinite times over</h1> 
            <div className=' text-center tracking-[-.01em] mb-[30px] text-[20px] leading-[30px]'>
              Powered by AI &amp; trained on 100,000 + designs, CopyCat will help you speed up your front-end development at an unprecedented rate and save hundreds of thousands of dollars for you.
            </div>
            <div className='pt-[18px] flex justify-center items-center'>
            <Link to="request"> 
              <Button bgColor="#FFD803" textColor="#141414" size="16px" width="250px" height="66px"> Get Started </Button>         
            </Link>
            </div>
        </div>
    </div>
  )
}

export default SectionNine