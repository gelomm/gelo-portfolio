import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            'service_1bw8w0n', 
            'template_f2qco1i', 
            form.current, 'mMpzcEMxAOtmXwtfY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form className='contact-form-cont' ref={form} onSubmit={sendEmail}>
            <div className='input-cont'>
                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="message" />    
                    </div>
                </div>
                <input className='button-28' type="submit" value="Send" />
            </div>
        </form>

    )
}

export default ContactForm
