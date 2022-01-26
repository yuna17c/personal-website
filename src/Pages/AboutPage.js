import React from 'react'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';

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
        </div>
    )
}

export default AboutPage;
