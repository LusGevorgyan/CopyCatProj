import React from 'react'
import SectionOne from '../pages/sectionOne/SectionOne';
import SectionTwo from '../pages/sectionTwo/SectionTwo';
import SectionThree from '../pages/sectionThree/SectionThree';
import SectionFour from '../pages/sectionFour/SectionFour';
import SectionFive from '../pages/sectionFive/SectionFive';
import SectionSix from '../pages/sectionSix/SectionSix';
import SectionSeven from '../pages/sectionSeven/SectionSeven';
import SectionNine from '../pages/sectionNine/SectionNine';
import SectionContact from '../pages/sectionContact/SectionContact';
import SectionEight from '../pages/sectionEight/SectionEight';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer';
 
const Main = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='pt-[20px]'>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
          <SectionSix/>
          <SectionSeven/>
          <SectionEight/>
          <SectionNine/>
          <SectionContact/>
          <Footer/>
        </div>
    </div>
  )
}

export default Main