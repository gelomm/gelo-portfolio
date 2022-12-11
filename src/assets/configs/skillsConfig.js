import {
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiJava,
    SiPython,
    SiDotnet,
    SiMysql
} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [

        {
            id: "skills-1",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JS"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS 3"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML 5"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiMysql size={50}/>,
            text: "SQL"
        }
    ],
    complementarySkills: [
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiJava size={50}/>,
            text: "Java"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiDotnet size={50}/>,
            text: "VB.Net"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        }
    ]
}

export default skillsConfig
