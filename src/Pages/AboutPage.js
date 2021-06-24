import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import novantas from '../img/novantas.png';
import intelligence from '../img/tutor.png';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage" id="about">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={'94%'} width={'94%'} />
                <SkillsSection skill={'C'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'React Native'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'88%'} width={'88%'} />
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Microsoft Office Suite'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'SQL'} progress={'50%'} width={'50%'} />
                {/* <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} /> */}
            </div>

            <Tittle title={'My Experience'} span={'My Experience'} />
            <div className="servives-container">
                <ServicesSection image={novantas} title={'Technical QA Engineer'} 
                text={'As a QA engineer, I designed and implemented debugging strategies for comprehensive and re-usable automated testing solutions. Over the four months of this internship, I:'} 
                list1={'Wrote automation scripts using Python, Robot framework, and Cypress and tested API using Postman.'}
                list2={'Participated in the development of Amplero, an AI based messaging app and Tikitapu, a data pipeline. '}
                list3={'Created and maintained 100+ documentations for automated and manual testing'}
                list4={'Interacted with the team to discuss code reviews and test analysis'}
                where={'Novantas Inc.'} date={' MAY 2021 - AUG 2021'} link={"https://www.novantas.com/"}
                />
                <ServicesSection image={intelligence} title={'Math Tutor'} where={'Marc Andrei Tutoring'}
                date={'SEP 2018 - APR 2020'} link={'https://www.marcandrei.com/'}
                text={'Marc Andrei Tutoring is a student-founded group of student tutors that aim to aid students academically. As an individual with high achievements in mathematics, I mostly tutored math. As a tutor, I...'}
                list1={'Taught 15+ high school students in math and science'}
                list2={'Improved my students\' marks by 10-15%'}
                list3={'Developed and prepared lesson plans and studying strategies to meet students’ goals'}
                list4={'Communicated with students to attain feedback'}
                />
            </div>

        </div>
    )
}

export default AboutPage;
