import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import '../../../pages/style.css'

let isOpen = false 

const openMenu = () => {
  let openMenuBtn = document.querySelector('.open-menu-btn')
  if(!isOpen) {
    openMenuBtn.classList.remove('hidden')
    isOpen = true
  } else {
    openMenuBtn.classList.add('hidden')
    isOpen = false  
  }
  console.log(openMenuBtn?.classList);
  console.log(isOpen);
}

const MenuList = () => {
  return (
    <div className='flex w-full justify-between'>
      <div className=' mx-[12px] text-[18px] cursor-pointer hover:text-gray-400 text-[#141414] leading-[24px]'>
        <div className='w-full flex justify-between'>
          <div className='hidden lg:flex items-center'>
            <Link to="/product" className='font-["Space Grotesk"] font-[400] underline mx-[12px] text-[18px] cursor-pointer hover:text-gray-400 text-[#141414] leading-[24px]'>
              Product
            </Link>
            
            <Link to="/pricing" className='font-["Space Grotesk"] font-[400] underline mx-[12px] text-[18px] cursor-pointer hover:text-gray-400 text-[#141414] leading-[24px]'>
              Pricing
            </Link>
            
            <Link to="/releases" className='font-["Space Grotesk"] font-[400] underline mx-[12px] text-[18px] cursor-pointer hover:text-gray-400 text-[#141414] leading-[24px]'>
              Releases
            </Link>
          </div>

          <div className='flex items-center'>
            <Link to="/request">
              <Button  className="hover:no-underline" bgColor="#392396" textColor="white" size="16px" width="200px" height="50px"> Get Started </Button>
            </Link>
            <span onClick={openMenu} className='block lg:hidden ml-[20px]'> <i className='fa fa-bars'></i> </span>
          </div>
        </div>
      </div>

      <div className='hidden open-menu-btn absolute left-0 top-[100%] lg:hidden w-full  p-[20px] bg-white'>
        <div className='flex flex-col mx-auto items-center justify-center max-w-[500px]'>
          <div className=''>
            <div
              className='grid gap-[20px]'>
              <Link to="/product" className='max-w-[200px] text-center font-["Space Grotesk"] font-[400] underline mx-[12px] text-[18px] cursor-pointer hover:text-gray-400 text-[#141414] leading-[24px]'>
                Product
              </Link>
            
              <Link  to="/pricing" className='max-w-[200px] text-center font-["Space Grotesk"] font-[400] underline mx-[12px] text-[18px] cursor-pointer hover:text-gray-400 text-[#141414] leading-[24px]'>
                Pricing
              </Link>
              
              <Link to="/releases" className='max-w-[200px] text-center font-["Space Grotesk"] font-[400] underline mb-[20px] mx-[12px] text-[18px] cursor-pointer hover:text-gray-400 text-[#141414] leading-[24px]'>
                Releases
              </Link>
            </div>
            
            <Link to="/requestAccess">
              <Button className="hover:no-underline" bgColor="#392396" textColor="white" size="16px" width="100%" height="50px"> Request Invite </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuList