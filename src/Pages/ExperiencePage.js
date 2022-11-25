import React from 'react';
import Title from '../Components/Title';
import ServicesSection from '../Components/ServicesSection';
import evol1 from '../img/skills/evol1.png';
import evol2 from '../img/skills/evol2.png';
import evol3 from '../img/skills/evol3.png';
import SkillSection from '../Components/SkillSection';
import cpp from '../img/skills/cppp.png';
import rlogo from '../img/skills/r.png';
import python from '../img/skills/python.png';
import sql from '../img/skills/sql.png';
import js from '../img/skills/js.png';
import html from '../img/skills/html.png';
import java from '../img/skills/java.png';
import django from '../img/skills/django.png';
import tableau from '../img/skills/tableau.png';
import jupyter from '../img/skills/jupyter.png';
import react from '../img/skills/react.png';
import node from '../img/skills/node.png';
import jenkins from '../img/skills/jenkins.png';
import { faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import SkillIcon from '../Components/SkillIcon';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

function ExperiencePage() {
    return (
        <div>
            <Title title={'My Experience'} span={'My Experience'} />
            <div className="services-container">
            <ServicesSection image={evol1} title={'Software Engineer in Test'} 
                where={'Curinos'} date={' MAY 2021 - AUG 2021'}
                />
                <ServicesSection image={evol2} title={'Data Scientist'} 
                where={'Wish (Contextlogic)'} date={' JAN 2022 - APR 2022'} 
                />
                <ServicesSection image={evol3} title={'Software Developer'} 
                where={'Trend Micro'} date={' SEP 2022 - DEC 2022'}
                />
            </div>
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillContainer">
                <SkillSection skill={'Python'} img={python} desc={': 5+ years' }></SkillSection>
                <SkillSection skill={'C/C++'} img={cpp} desc={ ': 3+ years ' }></SkillSection>
                <SkillSection skill={'SQL'} img={sql} desc={ ': 1+ years' }></SkillSection>
                <SkillSection skill={'R'} img={rlogo} desc={ ': 2+ years ' }></SkillSection>
                {/* <SkillSection skill={'Java'} img={java} desc={ ': 1+ years' }></SkillSection> */}
                {/* <SkillSection skill={'HTML/CSS'} img={html} desc={ ': 3+ years ' }></SkillSection> */}
                <SkillSection skill={'Jupyter Notebook'} img={jupyter} desc={''}></SkillSection>
                <SkillSection skill={'Django'} img={django} desc={''}></SkillSection>
                <SkillSection skill={'Node.js'} img={node} desc={''}></SkillSection>
                <SkillSection skill={'Tableau'} img={tableau} desc={''}></SkillSection>
                <SkillSection skill={'React'} img={react} desc={''}></SkillSection>
                <SkillSection skill={'Jenkins'} img={jenkins} desc={''}></SkillSection>
                {/* <SkillSection skill={'JavaScript'} img={js} desc={ ': 1+ years' }></SkillSection> */}
            </div>
        </div>
    )
}

export default ExperiencePage;
