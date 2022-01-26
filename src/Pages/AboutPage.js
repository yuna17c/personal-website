import React from 'react'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import curinos from '../img/curinos.png';
import intelligence from '../img/tutor.png';
import wish from '../img/wish.png';
import Title from '../Components/Title';

function AboutPage() {
    return (
        <div className="AboutPage" id="about">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'C/C++'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'React Native'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'88%'} width={'88%'} />
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Microsoft Office Suite'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'SQL'} progress={'70%'} width={'70%'} />
                {/* <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} /> */}
            </div>

            <Title title={'My Experience'} span={'My Experience'} />
            <div className="servives-container">
                <ServicesSection image={wish} title={'Data Scientist'} 
                text={'As a QA engineer, I designed and implemented debugging strategies for comprehensive and re-usable automated testing solutions. Over the four months of this internship, I:'} 
                where={'Wish Contextlogic'} date={' JAN 2022 - APR 2022'} link={"https://curinos.com/"}
                />
                <ServicesSection image={curinos} title={'Technical QA Engineer'} 
                text={'As a QA engineer, I designed and implemented debugging strategies for comprehensive and re-usable automated testing solutions. Over the four months of this internship, I:'} 
                list1={'Wrote automation scripts using Python, Robot framework, and Cypress and tested API using Postman.'}
                list2={'Participated in the development of Amplero, an AI based messaging app and Tikitapu, a data pipeline. '}
                list3={'Created and maintained 100+ documentations for automated and manual testing'}
                list4={'Interacted with the team to discuss code reviews and test analysis'}
                where={'Curinos Inc.'} date={' MAY 2021 - AUG 2021'} link={"https://curinos.com/"}
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
