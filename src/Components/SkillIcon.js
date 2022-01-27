import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function SkillIcon({skill,icon, desc, color}) {
    return (
        <div className="skills-container">
            <table>
                <tr className='firstRow'>
                    <FontAwesomeIcon icon={icon} style={{color: color}} className="skill-icon" />
                </tr>
                <tr><h5>{skill}</h5></tr>
                <tr><p>{desc}</p></tr>
            </table>
            
        </div>
    )
}

export default SkillIcon;
