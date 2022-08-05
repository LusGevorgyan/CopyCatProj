import React from 'react'

const dataClientComments = [
    // {
    //     id: 1,
    //     images: 'https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62907b66671ae31ac24ed3a0_1581826680098.jpg',
    //     text: 'CopyCat helped us build a production-grade web app and ship it quickly.',
    //     name: 'Brahmnoor Chawla, Software Engineer @Google'
    // },

    // {
    //     id: 2,
    //     images: 'https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62907b82c4d0751d28e918f7_1554957388524.jpg',
    //     text: 'CopyCat takes care of all the boiler-plate code files, assets, and components that save 20% of my time every sprint.',
    //     name: 'Ilango Rajagopal'
    // },

    {
        id: 3,
        images: 'https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/6295da75021cd15ae5687695_adit%20gupta.jpeg',
        text: 'My front-end team had to scale our existing product rapidly, and we were short-staffed. CopyCat helped us scale quickly by helping us increase capacity without adding new developers.',
        name: 'Adit Gupta, CEO @ Lula Deliver'
    },
]

const ClientComments =() => {
    return (
        <div  className='relative mx-auto w-[300px] sm:w-[500px] xl:w-[610px] min-h-[480px]'>
            <h1 className='text-center text-[40px] leading-[44px] font-bold mb-[24px]'> Our Client Says </h1>
            {
                dataClientComments.map((data) => (
                    <div className='relative w-[300px] sm:w-[500px] xl:w-[600px] min-h-[450px] py-[40px] px-[50px]' key={data.id}>
                        <img
                            className="d-block mx-auto w-[150px] h-[150px] border-[4px] border-solid border-[#e6c208] mb-[20px] rounded-[270px]"
                            src={data.images}
                        />
                        <div>
                            <div className=''>
                                <p className='w-full text-center text-[16px] leading-[24px] space-grotesk font-[400] mb-[24px] text-[#141414]'>{data.text} </p>
                                <a href='https://www.linkedin.com/in/brahmnoor/' className='space-grotesk hover:no-underline'><h3 className='text-center text-[16px] sm:text-[22px] lg:text-[24px] xl:text-[28px] leading-[32px] font-bold mb-[18px] text-[#141414]'> {data.name} </h3></a>
                            </div>
                        </div>

                        <div className='mt-[10px] mx-auto'>
                    <div className='flex justify-center items center '> 
                        <div className='w-[1em] bg-[#e6c208] h-[1em] mx-[3px] mb-[8px] rounded-[100%]'></div>
                        <div className='w-[1em] bg-[#f26d03] h-[1em] mx-[3px] mb-[8px] rounded-[100%]'></div>
                        <div className='w-[1em] bg-[#f26d03] h-[1em] mx-[3px] mb-[8px] rounded-[100%]'></div>
                    </div>
                </div>
                    </div>
                ))
            }
                <span className="absolute top-[300px] left-[5px] span w-[40px] h-[40px] rounded-[30px] bg-[#e6c208] flex items-center justify-center"> 
                    <i className="fas fa-chevron-left text-[24px]"></i>
                </span>

                <span className="absolute top-[300px] right-[5px] w-[40px] h-[40px] rounded-[30px] bg-[#e6c208] flex items-center justify-center">
                    <i className="fas fa-chevron-right text-[24px]"></i>
                </span>
{/* 
                <div className='absolute bottom-4 left-[150px] xl:left-[250px] mt-[10px] mx-auto'>
                    <div className='flex justify-center items center '> 
                        <div className='w-[1em] bg-[#e6c208] h-[1em] mx-[3px] mb-[8px] rounded-[100%]'></div>
                        <div className='w-[1em] bg-[#f26d03] h-[1em] mx-[3px] mb-[8px] rounded-[100%]'></div>
                        <div className='w-[1em] bg-[#f26d03] h-[1em] mx-[3px] mb-[8px] rounded-[100%]'></div>
                    </div>
                </div> */}
        </div>
    )
} 
  
export default ClientComments