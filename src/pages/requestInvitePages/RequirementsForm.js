import React, { useState } from 'react'
import RequestButton from './RequestButton'

const RequirementsForm = () => {

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [workEmail, setWorkEmail] = useState(null);
  const [comopanyWebsite, setCompanyWebsite] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
      setFirstName(value);
    }
    if(id === "lastName"){
      setLastName(value);
    }
    if(id === "workEmail"){
      setWorkEmail(value);
    }
    if(id === "comopanyWebsite"){
      setCompanyWebsite(value);
    }
}
  return (
    <div className="w-full sm:w-[550px] xl:mx-[20px] xl:w-[700px] p-[16px] mb-[24px] min-h-[960px] bg-white">
      <h1 className="text-left text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[40px] leading-[44px] font-bold mb-[24px]">
        {" "}
        Tell us your requirements{" "}
      </h1>
      <div className="grid gap-[24px]">
        <div className="">
          <p className="mb-[12px]"> First Name </p>
          <input
            type="text"
            value={firstName}
            onChange={(ev) => handleInputChange(ev)}
            placeholder="First Name"
            className="border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]"
          />
        </div>

        <div className="">
          <p className="mb-[12px]"> Last Name </p>
          <input
            type="text"
            value={lastName}
            onChange={(ev) => handleInputChange(ev)}
            placeholder="Last Name"
            className="border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]"
          />
        </div>

        <div className="">
          <p className="mb-[12px]">
            {" "}
            Work Email (We give priority access to company email ids){" "}
          </p>
          <input
            type="email"
            value={workEmail}
            onChange={(ev) => handleInputChange(ev)}
            placeholder="Work Email"
            className="border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]"
          />
        </div>

        <div className="">
          <p className="mb-[12px]">
            {" "}
            Company Website (without http:// or https://){" "}
          </p>
          <input
            type="text"
            value={comopanyWebsite}
            onChange={(ev) => handleInputChange(ev)}
            placeholder="Website Url"
            className="border-[1px] border-solid border-[rgba(20,20,20,.1)] rounded-[6px] pl-[13px] pt-[3px] w-full h-[50px]"
          />
        </div>

        <div className="">
          <p className="mb-[12px] text-[14px] leading-[22px] font-[400]">
            {" "}
            Job Title{" "}
          </p>
          <select className="bg-[#F3F3F3] border-[1px] border-solid border-[rgba(20,20,20,.1)] pl-[13px] pt-[3px] w-full h-[40px]">
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

        <div className="">
          <p className="mb-[12px] text-[14px] leading-[22px] font-[400]">
            {" "}
            JavaScript Library{" "}
          </p>
          <select className="bg-[#F3F3F3] border-[1px] border-solid border-[rgba(20,20,20,.1)] pl-[13px] pt-[3px] w-full h-[40px]">
            <option value="volvo">React Js</option>
            <option value="saab">Vue Js</option>
            <option value="opel">Angular Js</option>
            <option value="audi">Others</option>
          </select>
        </div>

        <div className="">
          <p className="mb-[12px] text-[14px] leading-[22px] font-[400]">
            {" "}
            What are you hoping to achieve with CopyCat?{" "}
          </p>
          <select className="bg-[#F3F3F3] border-[1px] border-solid border-[rgba(20,20,20,.1)] pl-[13px] pt-[3px] w-full h-[40px]">
            <option value="volvo">Scale Product Faster</option>
            <option value="saab">Develop MVP Faster</option>
            <option value="opel">Develop New Product Lines Faster</option>
            <option value="opel">
              Create Web Pages/Landing Pages at Scale
            </option>
            <option value="audi">Others</option>
          </select>
        </div>
        <RequestButton onClick={onclick} />
      </div>
      <p className="text-center pt-[1em] text-[20px] leading-[22px]">
        * We never share user details with third parties, period.
      </p>
    </div>
  );
}

export default RequirementsForm