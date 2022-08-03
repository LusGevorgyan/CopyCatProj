import React from 'react'

const dataSeven = [
    { id: 1, text: "Didn't have to change my workflow"},
    { id: 2, text: "Importing assets was super easy"},
    { id: 3, text: "Surprised by how readable the code was"},
    { id: 4, text: "Colors and other constants were externalized"},
]

const SectionSeven = () => {
  return (
    <div className='grid gap-[20px] lg:flex justify-center lg:justify-between mx-auto m-[20px] max-w-[1200px] rounded-[15px] bg-[#BAE9E8] py-[18px] sm:py-[28px] lg:py-[48px] px-[32px] sm:px-[52px] lg:px-[72px]'>
        <div className=''>
            <div className='text-center mx-auto max-w-[460px] mb-[24px]'>
                <div className='text-[22px] sm:text-[25px] lg:text-[40px] leading-[28px] sm:leading-[40px] lg:leading-[54px] font-bold mb-[24px]'> “First time a tool has given me usable code to build upon” </div>
                <p className='mb-[24px] text-[20px] max-w-[500px] text-left leanding-[30px] font-[300]'> 
                    I like that CopyCat doesn't try to generate everything but just focuses on writing developer friendly code that I can instantly copy and build upon.
                </p> 
                <div className='pt-[20px]'>
                    <p className='text-[20px] leading-[22px] text-center'> Jon Leguzmo, </p>
                    <p className='text-[20px] leading-[22px] text-center'> React.js developer @Quotafox </p>
                </div>
            </div>
        </div>
        <div className='mb-[20px] p-[48px] ml-[5vw] bg-[#000000] rounded-[16px]'>
            <div className='my-[50px] grid mb-[20px]'>
                {
                    dataSeven.map((data, id) => (
                        <div className='flex items-center m-[10px]' key={id}>
                            <div className='leading-[24px] mr-[18px]'>
                                <img src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602a49b49b17f54867fb67ac_icon-like-white.svg'/>
                            </div>
                            <div className='text-white text-[16px] leading-[24px] font-[400]'>{data.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SectionSeven