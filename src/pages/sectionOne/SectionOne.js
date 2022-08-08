import React from 'react'
import Button from '../../components/button/Button'
import FigmaAndReat from './figmaAndReact.png'
import { Link } from 'react-router-dom'

const SectionOne = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center mx-auto max-w-[1300px] px-[72px] rounded-[15px] bg-[#E3F6F5] py-[48px] mt-[100px]'>
        <div className='max-w-[900px] px-[20px]'>
            <div className=''>
                <img className=' block lg:hidden mb-[28px] w-[150px] h-[75px]' src={FigmaAndReat}/>
            </div>
            <h1 className='mb-[24px] text-[30px] sm:text-[40px] lg:text-[54px] font-inherit font-bold c'> Build React.js UI with a click of a button </h1> 
            <div className='text-left mb-[24px]'>
                <p className='mb-[24px] text-[20px] leanding-[30px] font-space-grotesk font-[300]'> It even works for mature codebases! </p> 
                <p className='text-[20px] leanding-[30px] font-space-grotesk font-[300]'> Don’t believe us? Give it a try. </p> 
            </div>

            <div className='ml-[-20px]'>
            <Link to="request">
                <Button bgColor="#392396" textColor="white" size="16px" width="220px" height="66px"> Get Started For Free</Button>
            </Link>
            </div>
        </div>
        <div className=''>
            <img className='hidden lg:block w-[300px] h-[150px]' src={FigmaAndReat}/>
        </div>
    </div>
  )
}

export default SectionOne