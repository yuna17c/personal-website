import React from 'react';

function ServicesSection({image, title, text, where, date, link, list1, list2, list3, list4, link2}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                    <div className="service-content">
                        <img src={image} alt=""/>
                        <a href={link} target='blank'><h5 className="s-title">
                            {title}  |  <span>{where}</span>
                            <br /><span className="s-date" >{date}</span>
                        </h5></a>
                        <p className="s-text">
                            {text}
                        </p>
                        <p className ="s-list"><ul>
                            <li>{list1}</li>
                            <li>{list2}</li>
                            <li>{list3}</li>
                            <li>{list4}</li>
                        </ul></p>
                        <p className='s-desc'>{link2}</p>
                    </div>
                
            </div>
        </div>
    )
}

export default ServicesSection;
