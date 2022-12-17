import React from 'react'
import {AttentionSeeker} from "react-awesome-reveal";
import SkillsItems from "./SkillsItems";
import skillsConfig from "../../assets/configs/skillsConfig";
import "./Skills.css"
import Aos from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
    Aos.init();
    return (
        <section id="skills">
            <div>
                <div className="skills-div">
                    <h1 className="main-skills-h1">
                        <span className="main-skills"><strong>Main Skills & Tools</strong></span>
                    </h1>
                    <div data-aos="zoom-in-up">
                        <div className="main-skills">
                            <SkillsItems config={skillsConfig.mainSkills}/>
                        </div>
                    </div>

                    <h1 className="complementary-skills-h1">
                        <span className="complementary-skills"><strong>Complementary Skills & Tools</strong></span>
                    </h1>
                    <div data-aos="zoom-in-up">
                        <div className="complementary-skills">
                            <SkillsItems config={skillsConfig.complementarySkills}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Skills