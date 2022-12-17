import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import projectConfig from "../assets/configs/projectConfig"
import "../assets/images/sklearn_genetic_opt.png"
import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';

const Projects = () => {
    Aos.init();
    return (
        <div className="wrapper" data-aos="zoom-in-up">
            {projectConfig.map((item) => (
                <CardItem item={item}/>
                )
            )}
        </div>)
}

export default Projects