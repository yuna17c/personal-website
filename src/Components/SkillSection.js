import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function SkillSection({skill,img, icon, desc}) {
    return (
        <div className="skills-container">
            <div><img src={img}/></div>
            <div><h5>{skill}</h5></div>
        </div>
    )
}

export default SkillSection;
