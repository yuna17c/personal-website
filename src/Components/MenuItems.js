import React from 'react'
import {Link } from "react-router-dom";

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=> {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="blank">{item.icon1}</a>
                                    <Link to={item.link2}>{item.icon2}</Link>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.desc}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
