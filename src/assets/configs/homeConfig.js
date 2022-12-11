import React from 'react'
import {BsClipboardData} from "react-icons/bs";


const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Angelo</strong>
        </h1>,
    titles: [
        "Aspiring",
        "Web Developer",
        "Software Developer",
    ],
    about: {
        start: "I am a recent graduate in Computer Engineering from" + 
        " the University of Batangas. Ever since I was a kid, I have"+
        " always been curious about technology and how things work. "+
        "This curiosity led me to take a keen interest in computers "+
        "and electronics, and eventually prompted me to pursue a degree"+
        " in Computer Engineering. ",
        exit: "In college, I started studying the basics of web development"+
        " and I have continued to learn and grow my skills in this field until now."+
        " I don't have any professional experience yet, but I am eager to learn and "+
        "grow as a web developer. Thank you for visiting my portfolio website!"
    },
    workTimeline: [
        {
            id: "work-0",
            title: "Work experience will be added here soon",
            company: "",
            description: "",
            date: "2022",
            icon: <BsClipboardData/>,
            tags: [""]
        }
    ]
}


export default homeConfig