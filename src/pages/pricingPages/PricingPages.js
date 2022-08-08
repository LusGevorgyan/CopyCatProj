import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/navbar/Navbar'
import SectionContact from '../sectionContact/SectionContact'
import PricingFormBasic from './pricingForm/PricingFormBasic'
import PricingFormPro from './pricingForm/PricingFormPro'
import PricingFormTeam from './pricingForm/PricingFormTeam'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const PricingPages = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-[100px] px-[200px] md:px-[10px]'> 
        <div className='w-[calc(100% - 100px)] flex justify-center mt-[30px] mx-auto'>
          <div className='w-[1000px] flex justify-center md:justify-between items center flex-wrap bg-scroll'>
            <div className='w-[313px] h-[590px] mb-[50px] shadow-md'> 
                <PricingFormBasic/>
                <div className=' mt-[38px] mb-[25px] flex justify-center'>
                  <Link to="/request">
                    <Button border="1px solid black" bgColor="white" textColor="black" size="16px" width="235px" height="58px"> Get Started </Button>
                  </Link>
                </div>
            </div>
            <div className='w-[313px] h-[590px] mb-[50px] bg-[#bae8e8] shadow-md'> 
                <PricingFormPro/>
                <div className=' mt-[38px] mb-[25px] flex justify-center'>
                  <Link to="/request">
                    <Button bgColor="black" textColor="white" size="16px" width="235px" height="57px"> Get Started </Button>
                  </Link>
                </div>
            </div>
            <div className='w-[313px] h-[590px] mb-[50px] shadow-md'> 
                <PricingFormTeam/>
                <div className=' mt-[38px] mb-[25px] flex justify-center'>
                  <Button bgColor="black" textColor="white" size="16px" width="233px" height="55px"> Contact Us </Button>
                </div>
            </div>
          </div>
        </div>
        <div className='text-[16px] leading-[24px] font-[400] font-sans mb-[120px] mx-[10px]'>
            * - Limited libraries are supported. AI powered workflow coming soon!
          </div>
      </div>
      <SectionContact/>
      <Footer/>
    </div>
  )
}

export default PricingPages

