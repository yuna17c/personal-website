import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function SkillIcon({skill,icon, desc, color}) {
    return (
        <div className="skills-container">
            <FontAwesomeIcon icon={icon} style={{color: color}} className="skill-icon" />
            <h5>{skill} <span>{desc}</span></h5>
        </div>
    )
}

export default SkillIcon;
