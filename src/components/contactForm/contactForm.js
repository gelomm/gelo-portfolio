import React from 'react'
import { useState } from 'react'

import '../contactForm/contact.css'

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
        name: name.value,
        email: email.value,
        message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (

        <form className='contact-form-cont' onSubmit={handleSubmit}>
                <div className='input-cont'>
                    <div>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" required />
                        </div>
                    </div>
                    <button className='button-28' type="submit">{status}</button>
                </div>
        </form>

    )
}

export default ContactForm