import React, { useState } from 'react'
import RequestButton from '../requestInvitePages/RequestButton';
import { Link } from 'react-router-dom';

const RequirementsForm = () => {

  const [firstName, setFirstName] = useState(null);
  const [workEmail, setWorkEmail] = useState(null);
  const [comopanyWebsite, setCompanyWebsite] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
      setFirstName(value);
    }
    if(id === "workEmail"){
        setWorkEmail(value);
    }
    if(id === "comopanyWebsite"){
        setCompanyWebsite(value);
    }
    if(id === "jobTitle"){
        setJobTitle(value);
    }
}
  return (
    <div className='grid gap-[20px] lg:flex justify-center items-center bg-[#E3F6F5] pt-[130px]'>
        <div className='md:w-[780px] m-[20px] p-[16px] mb-[24px] min-h-[960px] bg-white'>
            <h1 className='text-left text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[40px] leading-[44px] font-bold mb-[24px]'> Tell us your requirements </h1>
            <div className='grid gap-[24px]'>
                <div className=''>
                    <p className='mb-[12px]'> First Name </p>
                    <input 
                      type="text"
                      value={firstName}
                      onChange={(ev) => handleInputChange(ev)}
                      placeholder='First Name' 
                      className='border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]'
                    />
                </div>
        
                <div className=''>
                    <p className='mb-[12px]'> Work Email </p>
                    <input 
                      type="email"
                      value={workEmail}
                      onChange={(ev) => handleInputChange(ev)}
                      placeholder='Work Email' 
                      className='border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]'
                    />
                </div>
        
                <div className=''>
                    <p className='mb-[12px]'> Company Website </p>
                    <input 
                      type="text"
                      value={comopanyWebsite}
                      onChange={(ev) => handleInputChange(ev)}
                      placeholder='Website Url' 
                      className='border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]'
                    />
                </div>
        
                <div className=''>
                    <p className='mb-[12px]'> Job Title </p>
                    <input 
                      type="text"
                      value={jobTitle}
                      onChange={(ev) => handleInputChange(ev)}
                      placeholder='Website Url' 
                      className='border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]'
                    />
                </div>
        
                <div className=''>
                    <p className='mb-[12px] text-[14px] leading-[22px] font-[400]'> Styling Formats (Press ctrl/cmd to select multiple options)* </p>
                    <select className='bg-[#F3F3F3] border-[1px] border-solid border-[rgba(20,20,20,.1)] pl-[13px] pt-[3px] w-full  h-[40px]'>
                      <option value="volvo">Intern</option>
                      <option value="saab">Designer</option>
                      <option value="opel">Freelancer</option>
                      <option value="audi">FrontEnd Web Developer</option>
                      <option value="audi">BackEnd Developer</option>
                      <option value="audi">Full-Stack Developer</option>
                      <option value="audi">CTO/VP/Director of Technology</option>
                      <option value="audi">Tech/Engineering Lead</option>
                      <option value="audi">Product Manager</option>
                      <option value="audi">Project Manager</option>
                    </select>
                </div>
        
                <div className=''>
                    <p className='mb-[12px] text-[14px] leading-[22px] font-[400]'> JavaScript Syntax/Formats (Select one)* </p>
                    <select className='bg-[#F3F3F3] border-[1px] border-solid border-[rgba(20,20,20,.1)] pl-[13px] pt-[3px] w-full h-[40px]'>
                      <option value="volvo">JSX</option>
                      <option value="saab">TSX</option>
                    </select>            
                </div>
                <RequestButton/>
            </div>
            <p className='text-center pt-[1em] text-[20px] leading-[22px]'> * We never share user details with third parties, period. </p>
        </div>
        <div className='w-full'>
            <img src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/61499ca00b45e630fe216040_screen-detective-cat.png' className='mx-auto md:mx-0 w-[300px] sm:w-[400px] lg:w-[430px] lg:h-[270px]'/>
        </div>
        <Link className='lg:hidden flex justify-center mt-[62px]' to="/">
          <img src='https://uploads-ssl.webflow.com/602a49b4c90708f6641a192e/6120bd865c8d971592d7d18f_cat-logo.svg'/>
        </Link>
    </div>
  )
}

export default RequirementsForm