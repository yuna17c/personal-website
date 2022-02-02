import React from 'react'
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import SkillSection from '../Components/SkillSection';
import cpp from '../img/skills/cppp.png';
import rlogo from '../img/skills/rlogo.png';
import python from '../img/skills/python.png';
import sql from '../img/skills/sql.png';
import django from '../img/skills/django.png';
import tableau from '../img/skills/tableau.png';
import selenium from '../img/skills/selenium.png';
import { faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import SkillIcon from '../Components/SkillIcon';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

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
            <div className="skillsContainer">
                <SkillSection skill={'Django'} img={django} desc={''}></SkillSection>
                <SkillIcon skill={'Node.js'} icon={faNodeJs} desc={''}></SkillIcon>
                <SkillSection skill={'Tableau'} img={tableau} desc={''}></SkillSection>
                <SkillIcon skill={'React, React Native'} icon={faReact} desc={''}></SkillIcon>
                <SkillSection skill={'Selenium'} img={selenium} desc={''}></SkillSection>
                <SkillIcon skill={'Excel'} icon={faFileExcel} desc={''}></SkillIcon>
            </div>
        </div>
    )
}

export default AboutPage;
