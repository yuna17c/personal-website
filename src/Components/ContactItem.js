import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactItem({icon, text1, text2,title}) {
    return (
        <div className="ContactItem">
            <a href={text2} target="blank">
                <div className="contact">
                    <div>
                        <FontAwesomeIcon icon={icon} className={"contact-icon"}/>
                    </div>
                    <div className="right-items">
                        <h6>{title}</h6>
                        <p>{text1}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ContactItem;
