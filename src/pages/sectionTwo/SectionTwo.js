import React from 'react'

const dataTwo = [
  {
    id: 1,
    title: "1) Share your requirements",
    text: "Request an invite to tell us about your workflow requirements and tech stack requirements."
  },

  {
    id: 2,
    title: "2) Account setup",
    text: "Our account specialist will gather your requirements and set up an account for you."
  },

  {
    id: 3,
    title: "3) Build faster than your competition",
    text: "Save 40% time while building UI. CopyCat will take care of all the redundant work while you focus on your best work."
  },
]

const SectionTwo = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center mx-auto mt-[80px] max-w-[1300px] rounded-[15px] px-[20px] py-[48px]'>
        <div className='max-w-[500px]'>
            <h1 className='mb-[24px] font-space-grotesk text-[38px] font-bold max-w-[600px] leanding-[39px]'> How it works </h1>
            {
              dataTwo.map((data, id) => (
                <div className='text-left mb-[24px]' key={id}>
                  <h3 className='text-[28px] font-bold font-space-grotesk leanding-[32px] mb-[18px] mt-[12px]'> {data.title} </h3>
                  <p className='mb-[24px] text-[16px] font-space-grotesk leanding-[24px] font-[300]'> {data.text} </p>
                </div>
              ))
            }
        </div>
            <div className=''>
              <iframe className="w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] lg:w-[600px] lg:h-[400px] embedly-embed" 
                src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZ50x1GgJwUk%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZ50x1GgJwUk&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZ50x1GgJwUk%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" title="YouTube embed" allow="autoplay; fullscreen" width="600px" height="400px"></iframe>
            </div>
    </div>
  )
}

export default SectionTwo