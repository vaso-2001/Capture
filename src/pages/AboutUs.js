import React from "react";
//page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection'
/// Animation
import {pageAnimation} from "../animation"
import {motion} from 'framer-motion'


const AboutUs=()=>{
    return(
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <ServicesSection/>
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs;