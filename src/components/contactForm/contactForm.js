import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'
import Success from './success';

const ContactForm = () => {

    const [formVal, setFormVal] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmit, setIsSubmit] = useState(false)

    const handleName = (e) =>{
        const newVal = {
            ...formVal,
            name: formVal.name = e.target.value
        }
        setFormVal(newVal)
    }
    const handleEmail = (e) =>{
        const newVal = {
            ...formVal,
            email: formVal.email = e.target.value
        }
        setFormVal(newVal)
    }
    const handleMessage = (e) =>{
        const newVal = {
            ...formVal,
            message: formVal.message = e.target.value
        }
        setFormVal(newVal)
    }

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
        
        // const newVal = {
        //     name: formVal.name = "",
        //     email: formVal.email = "",
        //     message: formVal.message = ""
        // }
        // setFormVal(newVal)
        setIsSubmit(true)

        setTimeout(() => {
            const newVal = {
                name: formVal.name = "",
                email: formVal.email = "",
                message: formVal.message = ""
            }
            setFormVal(newVal)

            setIsSubmit(false)
        }, 2000);
    };

    return (
        <>
            <form className='contact-form-cont' ref={form} onSubmit={sendEmail}>
            {(isSubmit)? 
            <>
            <Success
            name = {formVal.name}
            />
            </>
            :
            <>
                <div className='input-cont'>
                    <div>
                        <div>
                            <label>Name</label>
                            <input value={formVal.name} onChange={handleName} type="text" name="user_name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input value={formVal.email} onChange={handleEmail} type="email" name="user_email" />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea value={formVal.message} onChange={handleMessage} name="message" />    
                        </div>
                    </div>
                    <input className='button-28' type="submit" value="Send" />
                </div>
            </>
            }
            </form>
        </>

    )
}

export default ContactForm
