import React from 'react'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const SectionSix = () => {
  return (
    <div className='mx-auto mt-[20px] max-w-[1070px] rounded-[15px] py-[48px] px-[72px]'>
        <h1 className='mb-[24px] font-space-grotesk text-[40px] text-center font-bold leanding-[54px]'> Eliminate sprint delays and design inconsistencies </h1> 
            <div className='flex jujstify-between my-[20px] items-center mb-[20px]'>
                <div className='w-[800px]'>
                    <p className='text-[20px] font-space-grotesk mb-[20px] leading-[30px] color-[#131414] font-[400]'>Never start coding from scratch. We will take care of the redundant React.js, HTML and CSS boilerplate code so you can spend time working on the real challenges</p>
                    <p className='text-[20px] font-space-grotesk leading-[30px] color-[#131414] font-[400] '> Our AI can read even mature code bases and reuse existing components.</p>
                </div>
                <img className='hidden sm:flex max-w-[265px] rounded-[8px]' src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62cea65a570f8c05c41f711a_cat_anim.gif'/>
            </div>
        <div className='flex justify-center items-center'>
            <Link to="request">
                <Button bgColor="#392396" textColor="white" size="16px" width="220px" height="66px"> Get Started </Button>
            </Link>
        </div>
    </div>
  )
}

export default SectionSix