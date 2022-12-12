import React from 'react'
import './contact.css'

const Success = ({name}) => {
return (
    <div className='success-cont'>
        {/* <h1>Email Sent</h1> */}
        <h3>Thank you for reaching out {name || "Juan"}.</h3>
        <h1>Your email has been sent!</h1>
    </div>
)
}

export default Success