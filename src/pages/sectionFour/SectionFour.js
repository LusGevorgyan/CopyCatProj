import React from 'react'

const dataFour = [
    {
        id: 1,
        bgColor: "#bae8e8",
        img: 'https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602a49b49b17f5c23ffb6792_icon-gallery-dark.svg',
        title: "Uses your existing components",
        text: "CopyCat matches component types to generate better code including nav bar, footer, button, input, and more"
    },

    {
        id: 2,
        bgColor: "#ffd803",
        img: 'https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602a49b49b17f5bb9cfb6793_icon-id-dark.svg',
        title: "A.I auto-groups reusable code",
        text: "We've trained our A.I on 100,000+ designs to recognize  components and groups"
    },

    {
        id: 3,
        bgColor: "#392396",
        img: 'https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602a49b49b17f55b8cfb679e_icon-switcher-white.svg',
        title: "Integrates with your design tokens",
        text: "We integrate with your existing design tokens to ensure generated code is not bloated with styles"
    },

    {
        id: 4,
        bgColor: "#fff",
        img: 'https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/602a49b49b17f5fa13fb6791_icon-comment.alt-dark.svg',
        title: "Responsive code with flex & grids",
        text: "Our algorithms try to generate layouts against multiple screen sizes to ensure code works well"
    },
]

const SectionFour = () => {
  return (
    <div className=' mx-auto mt-[20px] max-w-[1300px] rounded-[15px] py-[18px] sm:py-[28px] lg:py-[48px] px-[32px] sm:px-[52px] lg:px-[72px]'>
            <h1 className='text-center font-space-grotesk text-[40px] mb-[36px] leading-[44px] font-bold text-[#141414]'> Why customers like CopyCat </h1>
        <div className='flex justify-center flex-wrap p-0 lg:p-[36px]'>
            {
                dataFour.map((data, id) => (
                    <div className='flex justify-center flex-wrap py-[36px] lg:py-0 lg:p-[36px] w-[270px]' key={id}>
                    <div className='flex justify-center items-center w-[72px] h-[36px] rounded-[12px]' style={{"backgroundColor": `${data.bgColor}`}}>
                            <img src={data.img}/>
                        </div>
                        <div className=''>
                            <h4 className='text-[24px] text-center my-[24px] leading-[30px] text-[#141414] font-bold font-space-grotesk'> {data.title} </h4>
                            <div className='text-[20px] text-center leading-[30px] text-[#141414] font-[600] font-space-groteskb'> {data.text} </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default SectionFour

