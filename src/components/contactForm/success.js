import React from 'react'
import Aos from 'aos'


import './contact.css'
import 'aos/dist/aos.css';

const Success = ({name}) => {
    Aos.init();
return (
    <div className='success-cont' data-aos="zoom-in">
        {/* <h1>Email Sent</h1> */}
        <h3>Thank you for reaching out<span>{name || "Juan"}</span>.</h3>
        <h1>Your email has been sent!</h1>
    </div>
)
}

export default Success