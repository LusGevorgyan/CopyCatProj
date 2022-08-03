import { data } from 'autoprefixer'
import React, { useState } from 'react'

const sectionEightData = [
  {
    id: 1,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaea37be4d1d3d1c4415de_Tailwind_CSS_logo.svg%20(2).png" 
  },

  {
    id: 2,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aae833d19e9508ab2324cf_1_Smbj_VLH7JRp9GhLaKyiUQ.png"
  },

  {
    id: 3,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaeb50309f12e983399f5e_bootstrap-5-logo.png"
  },

  {
    id: 4,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaec4339a8f3b14347736a_123_ant-design.259fccdbe1.png"
  },

  {
    id: 5,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaf2855a89c608909b783b_emotion.png"
  },

  {
    id: 6,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaecb08f89c96e7f0dec19_logo-colored%402x.png"
  },

  {
    id: 7,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaf2855a89c608909b783b_emotion.png"
  },

  {
    id: 8,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaecb08f89c96e7f0dec19_logo-colored%402x.png"
  }
]

const SectionEight = () => {
  const [showLess, setShowLess] = useState(true)
  const {images} = sectionEightData
  const max = 6

  return (
    <div className='flex flex-col	items-center mx-auto mt-[20px] max-w-[1200px] py-[18px] sm:py-[28px] lg:py-[48px] px-[32px] sm:px-[52px] lg:px-[72px]'>
          <h1 className='text-center  max-w-[600px] text-[40px] mb-[18px] leading-[44px] font-bold text-[#141414]'> Bring your own frameworks and libraries </h1>
        <div className='flex max-w-[820px] justify-center items-center flex-wrap'>
          {
            sectionEightData.map(data => (
              <img 
                className='h-[40px] lg:h-[18px] lg:max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]' 
                src={data.images}
              />
            ))
          }
          <p className='text-[20px] pt-[1em] leading-[22px] text-center'> 
            {data.id > max ? sectionEightData.images: "..."}
            <a href = "#" 
              onClick ={(event)=>{
                event.preventDefault();
                setShowLess(!showLess);
              }} 
            > 
              {showLess ? "More ...": "Less..."}
            </a>
          </p>
        </div>
    </div>
  )
}
export default SectionEight

{/* <img className='h-[12px] lg:h-[18px] lg:max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]' src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaea37be4d1d3d1c4415de_Tailwind_CSS_logo.svg%20(2).png" />
          <img className='h-[65px] lg:h-[85px] lg:max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]' src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aae833d19e9508ab2324cf_1_Smbj_VLH7JRp9GhLaKyiUQ.png" />
          <img className='h-[85px] lg:h-[112px] lg:max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]' src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaeb50309f12e983399f5e_bootstrap-5-logo.png" />
          <img className='h-[100px] lg:h-[150px]lg: max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]' src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaec4339a8f3b14347736a_123_ant-design.259fccdbe1.png" />
          <img className='h-[50px] lg:h-[75px] lg:max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]' src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaf2855a89c608909b783b_emotion.png" />
          <img className='h-[20px] lg:h-[40px] lg:max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]' src="https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaecb08f89c96e7f0dec19_logo-colored%402x.png" /> */}
        