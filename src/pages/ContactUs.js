import React from "react";
/// Animation
import {pageAnimation} from "../animation"
import {motion} from 'framer-motion'


const ContactUs =()=>{
    return(
        <motion.div style={{background: "#fff"}} exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <h1>
                Our Contact
            </h1>
        </motion.div>
    )
}

export default ContactUs
