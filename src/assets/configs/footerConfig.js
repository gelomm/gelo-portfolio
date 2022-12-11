import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn, FaFacebook} from "react-icons/fa";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/gelomm",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/angelo-mendenilla",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://facebook.com/geloymm",
            className: "social-icon",
            target: "_blank",
            icon: <FaFacebook size={50}/>
        }
    ]
}

export default footerConfig
