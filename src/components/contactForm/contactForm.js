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
    const [formErr, setFormErr] = useState({
        nameErr: "",
        emailErr: "",
        messageErr: "",
    })
    const [inputErr, setInputErr] = useState({
        inputNameErr: "",
        inputEmailErr: "",
        inputMessageErr: "",
        
        nameStyleErr: "",
        emailStyleErr: "",
        messageStyleErr: "",
    })

    const [isSubmit, setIsSubmit] = useState(false)

    const handleName = (e) =>{
        const newVal = {
            ...formVal,
            name: formVal.name = e.target.value
        }
        setFormVal(newVal)

        if (formVal.name.length > 0 ) {
            setFormErr({ ...formErr, nameErr: formErr.nameErr = ""})
                setInputErr({ ...inputErr, 
                    inputNameErr: inputErr.inputNameErr = "",
                    nameStyleErr: inputErr.nameStyleErr = ""
                })
        }
    }
    const handleEmail = (e) =>{
        const newVal = {
            ...formVal,
            email: formVal.email = e.target.value
        }
        setFormVal(newVal)

        if (formVal.email.length > 0 ) {
            setFormErr({ ...formErr, emailErr: formErr.emailErr = ""})
                setInputErr({ ...inputErr, 
                    inputEmailErr: inputErr.inputEmailErr = "",
                    emailStyleErr: inputErr.emailStyleErr = ""
                })
        }
    }
    const handleMessage = (e) =>{
        const newVal = {
            ...formVal,
            message: formVal.message = e.target.value
        }
        setFormVal(newVal)

        if (formVal.message.length > 0 ) {
            setFormErr({ ...formErr, messageErr: formErr.messageErr = ""})
                setInputErr({ ...inputErr, 
                    inputMessageErr: inputErr.inputMessageErr = "",
                    messageStyleErr: inputErr.messageStyleErr = ""
                })
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    
    const email = () =>{
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
    }


        //errors
        if (formVal.name == "") {
            setFormErr({ ...formErr, nameErr: formErr.nameErr = "name-error"})
            setInputErr({ ...inputErr, 
                inputNameErr: inputErr.inputNameErr = "Please add your name.",
                nameStyleErr: inputErr.nameStyleErr = "input-name-error"
            })
        }

        if (formVal.email == "") {
            setFormErr({ ...formErr, emailErr: formErr.emailErr = "email-error"})
            setInputErr({ ...inputErr, 
                inputEmailErr: inputErr.inputEmailErr = "Please add your email.",
                emailStyleErr: inputErr.emailStyleErr = "input-email-error"
            })
        }

        if (formVal.message == "") {
            setFormErr({ ...formErr, messageErr: formErr.messageErr = "message-error"})
            setInputErr({ ...inputErr, 
                inputMessageErr: inputErr.inputMessageErr = "Please add your message.",
                messageStyleErr: inputErr.messageStyleErr = "input-message-error"
            })
        }
        if (formVal.name != "" && formVal.email != "" && formVal.message != "") {
            email();
        }

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
                            <input className={inputErr.nameStyleErr} value={formVal.name} onChange={handleName} type="text" name="user_name" />
                            <span className={formErr.nameErr}>{inputErr.inputNameErr}</span>
                        </div>
                        <div>
                            <label>Email</label>
                            <input className={inputErr.emailStyleErr} value={formVal.email} onChange={handleEmail} type="email" name="user_email" />
                            <span className={formErr.emailErr}>{inputErr.inputEmailErr}</span>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea className={inputErr.messageStyleErr} value={formVal.message} onChange={handleMessage} name="message" />    
                            <span className={formErr.messageErr}>{inputErr.inputMessageErr}</span>
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
