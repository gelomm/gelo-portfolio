import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";


import RpsReact from "../images/head.png"
import CardRegister from "../images/card-register.png"
import temperatureCalc from "../images/temperature.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-3",
        title: "Rock Paper Scissor React",
        links: [
            {
                name: "repo",
                url: "https://github.com/gelomm/rock-paper-scissor-react.git",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/gelomm/rock-paper-scissor-react/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://rps-gamify-react.netlify.app/",
                icon: <AiFillEye/>,
            }
        ],
        image: RpsReact,
        description: "A simple Rock Paper Scissor Game with UI created using React.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Card Registration Form",
        links: [
            {
                name: "repo",
                url: "https://github.com/gelomm/card-register.git",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/gelomm/card-register/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://gelomm.github.io/card-register/",
                icon: <AiFillEye/>,
            }
        ],
        image: CardRegister,
        description: "First ever React project. This was a challenge from frontend Mentor website.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Basic Temperature Calculator",
        links: [
            {
                name: "repo",
                url: "https://github.com/gelomm/temperature.git",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/gelomm/temperature/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://gelomm.github.io/temperature/",
                icon: <AiFillEye/>,
            }
        ],
        image: temperatureCalc,
        description: "A simple project that converts temperature input into Celsius or Fahrenheit."+
        "This project is made to practice DOM manipulation."+
        "Made with Httml, CSS, and JavaScript.",
        target: "_blank"
    },
]

export default projectConfig

