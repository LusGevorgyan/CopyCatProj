import React from 'react'

const dataFive = [
    {id: 1, text: "Scale product development"},
    {id: 2, text: "Develop new product lines faster"},
    {id: 3, text: "Creating landing pages at scale"},
];

const SectionFive = () => {
    return (
        <div className='bg-[#e3f6f5] w-full px-[72px]'>
            <div className='flex flex-wrap justify-items-start max-w-[1300px] sm:justify-around mx-auto items-center py-[48px]'>
                {
                    dataFive.map((data, id) => (
                        <div className='flex items-center' key={id}>
                            <div className='w-[36px] h-[36px] mr-[18px] rounded-full bg-[#BAE8E8] flex justify-center items-center'>
                                <img src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602a49b49b17f5de43fb665f_icon-check.svg'/>
                            </div>
                            <div className='text-[16px] leading-[24px] font-space-grotesk font-400'>{data.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionFive