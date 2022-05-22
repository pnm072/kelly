import React from 'react'
import Nav from '../components/navbar/Nav'
import About from '../components/body/about'
import Facts from '../components/body/facts'
import Skills from '../components/body/skills'
import Testimonials from '../components/body/testimonials'
import Footer from '../components/footer/foot'
 function Aboutpage() {
  return (
   <>
         <Nav/>
        <About/>
        <Facts/>
        <Skills/>
        <Testimonials/>
        <Footer/>
   </>
  )
}
export default Aboutpage;
