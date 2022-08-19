import React from 'react'

const sectionEightData = [
  {
    id: 1,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaea37be4d1d3d1c4415de_Tailwind_CSS_logo.svg%20(2).png",
    width: "150px",
    height: "19px"
  },

  {
    id: 2,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aae833d19e9508ab2324cf_1_Smbj_VLH7JRp9GhLaKyiUQ.png",
    width: "150px",
    height: "85px"
  },

  {
    id: 3,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaeb50309f12e983399f5e_bootstrap-5-logo.png",
    width: "150px",
    height: "113px"
  },

  {
    id: 4,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaec4339a8f3b14347736a_123_ant-design.259fccdbe1.png",
    width: "150px",
    height: "150px"
  },

  {
    id: 5,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaf2855a89c608909b783b_emotion.png",
    width: "150px",
    height: "75px"
  },

  {
    id: 6,
    images: "https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/62aaecb08f89c96e7f0dec19_logo-colored%402x.png",
    width: "150px",
    height: "40px"
  }
]

export default function SectionEight() {
  return (
    <div className="flex flex-col	justify-between items-center mx-auto mt-[20px] gap-[30px] max-w-[1200px] py-[18px] sm:py-[28px] lg:py-[48px] px-[32px] sm:px-[52px] lg:px-[72px]">
      <h1 className="text-center  max-w-[600px] text-[40px] mb-[18px] leading-[44px] font-bold text-[#141414]">
        {" "}
        Bring your own frameworks and libraries{" "}
      </h1>
      <div className="flex max-w-[820px] justify-center items-center flex-wrap">
        {sectionEightData.map((data) => (
          <img
            key={data.id}
            className="h-[40px] lg:h-[18px] lg:max-w-[150px] mt-[18px] ml-[12px] mb-[18px] mr-[12px]"
            style={{ width: data.width, height: data.height }}
            src={data.images}
          />
        ))}
      </div>
      <p className="text-[20px] pt-[1em] leading-[22px] text-center">
        Add More ....
      </p>
    </div>
  );
};