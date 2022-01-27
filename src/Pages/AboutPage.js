import React from 'react'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';

import Title from '../Components/Title';
import SkillSection from '../Components/SkillSection';
import cpp from '../img/cppp.png';
import rlogo from '../img/rlogo.png';
import python from '../img/python.png';
import sql from '../img/sql.png';
import { faHtml5, faJsSquare, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import SkillIcon from '../Components/SkillIcon';

function AboutPage() {
    return (
        <div className="AboutPage" id="about">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <h5>LANGUAGES</h5>
            <div className="skillsContainer">
                <SkillSection skill={'Python'} img={python} desc={'5+ years experience' }></SkillSection>
                <SkillSection skill={'C/C++'} img={cpp} desc={ '3+ years experience' }></SkillSection>
                <SkillSection skill={'SQL'} img={sql} desc={ '3+ years experience' }></SkillSection>
                <SkillIcon skill={'JavaScript'} icon={faJsSquare} desc={ '1+ years experience' } color={'#FFF77C'}></SkillIcon>
                <SkillSection skill={'R'} img={rlogo} desc={ '2+ years experience' }></SkillSection>
                <SkillIcon skill={'HTML/CSS'} icon={faHtml5} desc={ '4+ years experience' } color={'#FFB266'}></SkillIcon>
            </div>
            <h5>TOOLS/FRAMEWORK</h5>
        </div>
    )
}

export default AboutPage;
