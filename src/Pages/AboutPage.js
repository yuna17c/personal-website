import React from 'react'
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';


function AboutPage() {
    return (
        <div className="AboutPage" id="about">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
        </div>
    )
}

export default AboutPage;
