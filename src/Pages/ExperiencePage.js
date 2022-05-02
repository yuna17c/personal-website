import React from 'react';
import Title from '../Components/Title';
import allBlogs from '../Components/allBlogs';
import ServicesSection from '../Components/ServicesSection';
import curinos from '../img/curinos.png';
import intelligence from '../img/tutor.png';
import wish from '../img/wish.png';

function ExperiencePage() {
    return (
        <div >
            <Title title={'My Experience'} span={'My Experience'} />
            <table>
            <div className="services-container">
                <tr>
                <ServicesSection image={wish} title={'Data Scientist'} 
                text={'As a Data scientist'} 
                list1={'Queried data on Presto and TreasureData to analyze user behavioural trends of Wish Access, a subscription service, and provided data to make decisions regarding A/B testing and controlled experiments.'}
                list2={'Investigated data about user behaviours related to shipping prices and identified an opportunity to increase the revenue by 22% while gaining user trust.'}
                list3={'Created Tableau and Superset dashboards to monitor data trends and communicate with product managers.'}
                list4={'Developed a pricing model for a subscription service based on historical user data and helped expand the service to different countries. '}
                where={'Wish Contextlogic'} date={' JAN 2022 - APR 2022'} //link={"https://curinos.com/"}
                />
                </tr>
                <tr>
                <ServicesSection image={curinos} title={'Technical QA Engineer'} 
                text={'As a QA engineer, I designed and implemented debugging strategies for comprehensive and re-usable automated testing solutions. My roles over the four months of this internship include:'} 
                list1={'Wrote automation scripts using Python, Robot framework, and Cypress and tested API using Postman.'}
                list2={'Participated in the development of Amplero, an AI based messaging app and Tikitapu, a data pipeline.'}
                list3={'Created and maintained 200+ documentations for automated and manual testing'}
                list4={'Interacted with the team to discuss code reviews and test analysis'}
                where={'Curinos Inc.'} date={' MAY 2021 - AUG 2021'} link={"https://curinos.com/"}
                />
                </tr>
                <tr>
                <ServicesSection image={intelligence} title={'Math Tutor'} where={'Marc Andrei Tutoring'}
                date={'SEP 2018 - Present'} link={'https://www.marcandrei.com/'}
                text={'Marc Andrei Tutoring is a student-founded group of student tutors that aim to aid students academically. As an individual with high achievements in mathematics, I mostly tutored math. '}
                list1={'Taught 15+ high school students in math and science'}
                list2={'Improved my students\' marks by 10-15%'}
                list3={'Developed and prepared lesson plans and studying strategies to meet students’ goals'}
                list4={'Communicated with students to attain feedback'}
                />
                </tr>
            </div>
            </table>
        </div>
    )
}

export default ExperiencePage;
