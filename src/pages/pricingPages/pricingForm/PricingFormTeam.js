import React, { useState } from 'react'

const dataFormTeam = [
    {
        id: 1,
        isUpdate: false,
        text: "Unlimited exports"
    },

    {
        id: 2,
        isUpdate: false,
        text: "Unlimited style variables"
    },

    {
        id: 3,
        isUpdate: false,
        text: "Unlimited projects"
    },

    {
        id: 4,
        isUpdate: false,
        text: "Custom components*"
    },

    {
        id: 5,
        isUpdate: false,
        text: "Existing workflow integration"
    },

    {
        id: 6,
        isUpdate: false,
        text: "Concierge onboarding"
    },

    {
        id: 7,
        isUpdate: false,
        text: "Design system integration"
    },

    {
        id: 8,
        isUpdate: false,
        text: "Priority support"
    },

]

const PricingFormTeam = () => {
    const [formTeam, setFormTeam] = useState(dataFormTeam)

    const onUpdate = (itemId) => {
        const wrapper = formTeam.map(({id, isUpdate, text}) => {
            (id === itemId) && (isUpdate = !isUpdate);
            return {id, isUpdate, text};
        })
        setFormTeam(wrapper);
    }
    return (
        <div className='mx-[10px] pt-[30px] px-[40px] pb-[10px]'>
            <h1 className='text-[21px] text-center font-bold leading-[28px]'>  Team </h1>
            <div className='text-[55px] text-center leading-[70px] mb-[3px] font-bold'> $49 </div>
            <div className='text-[11px] text-center leading-[21px]'> Per month, Billed monthly, 3 seat minimum </div>
            <div className='text-[16px] text-center mb-[20px] leading-[24px]'> For medium to large sized teams with multiple projects </div>
            {
                formTeam.map(({id, isUpdate, text}) => (
                    <div 
                        className='flex items-center justify-start mb-[10px]' 
                        key={id}
                        style={{
                            textDecoration:  isUpdate ? 'line-through' : 'none',
                            fill: isUpdate ? "#A3CAFF": "#ffd803"
                        }}
                        onClick={(evt) => onUpdate(id)}
                    >
                    <svg className='mr-[10px] cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 13 12">
                        <path fill-rule="evenodd" d="M6.53611111,12.75 L3.41130514,14.3837314 C3.2155336,14.486086 2.97385465,14.4103566 2.87150009,14.214585 C2.83082782,14.136792 2.81687576,14.0477795 2.83179524,13.9612728 L3.42800558,10.5043052 L3.42800558,10.5043052 L0.904460165,8.05804673 C0.745840364,7.90428487 0.741902224,7.6510495 0.895664085,7.49242969 C0.957231832,7.42891678 1.03811585,7.38760326 1.12566258,7.37495226 L4.61519625,6.87069477 L4.61519625,6.87069477 L6.17780743,3.72199148 C6.27601241,3.52410583 6.5160413,3.44329867 6.71392696,3.54150365 C6.79218576,3.58034125 6.85557719,3.64373268 6.89441479,3.72199148 L8.45702597,6.87069477 L8.45702597,6.87069477 L11.9465596,7.37495226 C12.1652025,7.4065474 12.3168346,7.60940537 12.2852395,7.82804823 C12.2725885,7.91559496 12.231275,7.99647898 12.1677621,8.05804673 L9.64421664,10.5043052 L9.64421664,10.5043052 L10.240427,13.9612728 C10.2779729,14.1789728 10.1319292,14.3858904 9.91422925,14.4234363 C9.82772259,14.4383558 9.73871014,14.4244037 9.66091708,14.3837314 L6.53611111,12.75 L6.53611111,12.75 Z" transform="translate(0 -3)" class="colorA351FF svgShape"/>                        
                    </svg>                         
                    <h1> {text} </h1>
                    </div>
                ))
            }
        </div>
    )
}

export default PricingFormTeam