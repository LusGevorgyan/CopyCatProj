import React, { useEffect } from 'react'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import '../style.css'

const dataProductPages = [
    {
        id: 1,
        title: "Figma to React.js in seconds",
        text: "We create functional React.js components, which are easy to read and extend. You can also plug and play with them in your codebase without any changes.",
        gif: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/6284d02c10abf31eb53d66fe_Generate%20code%20with%20a%20click.gif"
    },

    {
        id: 2,
        title: "Create and reuse styling from your existing code and designs",
        text: "The data from your designs are used to quickly generate styling so you don't have to spend your time copying hex-codes, fonts and and pixel values. <br />   <br />CopyCat's algorithms also generate layouts against multiple screen sizes to ensure that the code works for you.",
        gif: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/6284d04cc783d4e0f08bf98b_Generate%20custom%20CSS_SCSS.gif"
    },

    {
        id: 3,
        title: "Export code files",
        text: "Export the generated react code files in a structured format. We give you components and assets as folders along with a App.jsx and App.css files inside an src folder that you can export and ship with a few changes.",
        gif: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/6284d06901cadee5664b308a_Export%20code%20files.gif"
    },

    {
      id: 4,
      title: "Preview what's generated",
      text: "CopyCat lets you see what we've generated right inside Figma before you move it over to your IDE. <br/> <br/> You can also make edits using our editor before exporting.",
      gif: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/6284d0889cb8ec37a9ccc8d9_Preview.gif"
    },
    
]

const ProductPages = () => {
  return (
    <div className=''>
        <div className='header-animate'>
            <Navbar />
        </div>
        <div className='pt-[120px]'>
            {
                dataProductPages.map((data, id) => {
                    if(id % 2 === 1) {
                        return (
                            <div className='w-full py-[40px] px-[20px] lg:p-0 mb-[40px] flex-row lg:flex lg:justify-around justify-center items-center mx-auto' key={id}>
                                <div className=''>
                                    <img className='m-auto lg:pb-0 pb-[30px] w-[400px] h-[250px]' src={data.gif}/>
                                </div>
                                <div className='w-full lg:w-[635px]'>
                                    <h1 className='text-[38px] leading-[50px] font-bold mb-[40px] font-space-grotesk'>{data.title}</h1>
                                    <div className='text-[24px] leading-[32px] font-[400] text-left font-space-grotesk' dangerouslySetInnerHTML={{__html: data.text}}></div>
                                </div>
                            </div>
                        )                 
                    } else {
                        return(
                           <div className='w-full py-[40px] px-[20px] mb-[40px]  sm:flex sm:justify-around justify-center items-center mx-auto' key={id}>
                               <div className=' w-full lg:w-[635px]'>
                                   <h1 className='text-[38px] leading-[50px] font-bold mb-[40px]'>{data.title}</h1>
                                   <div className='text-[24px] leading-[32px] font-[400] text-left'> {data.text} </div>
                               </div>
                               <div className=''>
                                   <img className='lg:pt-0 pt-[30px] m-auto w-[400px] h-[250px]' src={data.gif}/>
                               </div>
                           </div>
                        )
                    }
                })
            }
        </div>

        <div className='bg-[#e3f6f5] w-full mx-auto mt-[20px] rounded-[15px] py-[48px] px-[20px] lg:px-[60px] xl:px-[72px]'>
            <div className='w-full mx-auto'>
            <h1 className='mb-[24px] mt-[30px] sm:mt-[70px] lg:mt-[100px] mx-[20px] text-[20px] sm:text-[35px] lg:text-[45px] text-center font-bold leanding-[54px]'>You are one step away from building UI faster</h1> 
                <div className=' text-center tracking-[-.01em] mb-[30px] text-[20px] leading-[30px]'>Request your invite to CopyCat today!</div>
                <div className='pt-[18px] flex justify-center items-center'>
                    <Link to="/request">
                        <Button bgColor="#FFD803" textColor="#141414" size="16px" width="250px" height="66px"> Get Started </Button>         
                    </Link>
                </div>
            </div>
        </div>
    <Footer/>
    </div>
  )
}

export default ProductPages