import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function SkillSection({skill,img, icon, desc}) {
    return (
        <div className="skills-container">
            <img src={img} />
            <h5>{skill} <span>{desc}</span></h5>
        </div>
    )
}

export default SkillSection;
