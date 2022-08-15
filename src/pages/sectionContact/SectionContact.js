import React from 'react'
import { Link } from 'react-router-dom'

const SectionContact = () => {
  return (
    <div className='bg-[#141414] flex px-[20px] w-full mx-auto py-[30px] sm:py-[50px] lg:py-[72px]'>
        <div className='max-w-[1300px] grid gap-[20px] lg:flex mx-auto justify-center lg:mx-[50px] lg:justify-between min-h-[190px] px-[32px] sm:px-[52px] lg:px-[72px]'> 
          <div className=''>
            <ul className='lg:mx-0 w-[200px]'>
              <li className='text-[32px] leading-[36px] mb-[12px] font-grotesk font-bold text-white'> <a href=''>BUILD UI</a> </li>
              <li className='text-[32px] leading-[36px] mb-[12px] font-grotesk font-bold text-white'> <a href=''>Faster</a> </li>
              <li className='text-[32px] leading-[36px] mb-[12px] font-grotesk font-bold text-white'> <a href=''>Than Your</a> </li>
              <li className='text-[32px] leading-[36px] mb-[12px] font-grotesk font-bold text-white'> <a href=''>Competition</a> </li>
            </ul>
          </div>
        <div className='max-w-[600px] xl:max-w-[1300px] md:flex-wrap grid gap-[20px] lg:flex mx-auto justify-center lg:mx-[50px] lg:justify-around min-h-[190px]'>
            <div className=''>
              <ul className='mx-auto lg:mx-0 w-[200px]'>
                <h1 className='text-[16px] leading-[24px] mb-[12px] font-bold text-white'> Pages </h1>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Figma to Code</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Figma to HTML, CSS</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Figma Developer Plugin</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Figma to Tailwind CSS</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Low Code React Tool</a> </li>
              </ul>
            </div>
            <div className=''>
              <ul className='mx-auto lg:mx-0 w-[200px]'>
                <h1 className='text-[16px] leading-[24px] mb-[12px] font-bold text-white'> Resources </h1>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <Link to="/releases"> <a href=''>Releases</a> </Link> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <Link to="/pricing"> <a href=''>Pricing</a> </Link> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Terms of Use</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Privacy Policy</a> </li>
              </ul>
            </div>
            <div className=''>
              <ul className='mx-auto lg:mx-0 w-[200px]'>
                <h1 className='text-[16px] leading-[24px] mb-[12px] font-bold text-white'> Blogs </h1>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>How to Convert Figma to React</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>React.js Production Build</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>React.js Best Practices</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>React.js SVG</a> </li>
              </ul>
            </div>

            <div className=''>
              <ul className='mx-auto lg:mx-0 w-[200px] min-w-[144px]'>
                <h1 className='text-[16px] leading-[24px] mb-[12px] font-bold text-white'> Important Links </h1>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>Contact Us</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>CopyCats Discord Community</a> </li>
                <li className='text-[16px] leading-[24px] mb-[6px] font-[400] text-[#8A8A8A]'> <a href=''>About Us</a> </li>
              </ul>
            </div>
              {/* <img className='relative bottom-0 right-[-30px]' src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602a49b49b17f51e29fb66d2_lines-13-white.svg'/> */}
          </div>
          <img className='lg:hidden w-[50px]' src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/60336855b7680e55c441a37c_cat256.png'/>

        </div>
    </div>
  )
}

export default SectionContact