import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function SkillSection({skill,img, icon, desc}) {
    return (
        <div className="skills-container">
            <table>
                <tr className='firstRow'>
                    <img src={img} />
                </tr>
                <tr><h5>{skill}</h5></tr>
                <tr><p>{desc}</p></tr>
            </table>
        </div>
    )
}

export default SkillSection;
