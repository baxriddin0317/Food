import React from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.scss";

//Images
import Logo from "../../assets/img/logo.png";
import Homesvg from "../../Libra/Svgs/Homesvg";
import Discount from '../../Libra/Svgs/Discount';
import Message from "../../Libra/Svgs/Message";
import Notficitoin from "../../Libra/Svgs/Notficition";
import Setting from "../../Libra/Svgs/Setting";
import Graph from "../../Libra/Svgs/Graph";
import Logaut from "../../Libra/Svgs/Logaut";

function Sidebar() {

    const handleClass = (evt) => {
        const remov = document.querySelector(".link-active");
        remov.classList.remove("link-active");

        evt.currentTarget.classList.add("link-active");
    }

    return (
        <div className='sidebar'>
            <Link className='sidebar__logo' to="/">
                <img src={Logo} alt="site-logo" width="56" height="56" />
            </Link>    

            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <Link className='sidebar__item-link link-active' to="/" onClick={handleClass}>
                        <span>
                            <Homesvg />
                        </span>
                    </Link>    
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__item-link ' to="/discount" onClick={handleClass}>
                        <span>
                            <Discount />
                        </span>
                    </Link>    
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__item-link' to="/notificition" onClick={handleClass}>
                        <span>
                            <Notficitoin />
                        </span>
                    </Link>    
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__item-link' to="/message" onClick={handleClass}>
                        <span>
                            <Message />
                        </span>
                    </Link>    
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__item-link' to="/graph" onClick={handleClass}>
                        <span>
                            <Graph />
                        </span>
                    </Link>    
                </li>
                <li className="sidebar__item">
                    <Link className='sidebar__item-link' to="/setting" onClick={handleClass}>
                        <span>
                            <Setting />
                        </span>
                    </Link>    
                </li>
                  
            </ul>  

            <button className="sidebar__btn">
                <Logaut />
            </button>
        </div>
    );
}

export default Sidebar
