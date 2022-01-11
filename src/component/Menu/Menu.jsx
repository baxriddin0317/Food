import React from 'react'
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import Heart from '../../Libra/Svgs/Heart';
import Group from '../../Libra/Svgs/Group';
import Setting from '../../Libra/Svgs/Setting';
import Notificition from "../../Libra/Svgs/Notficition";

function Menu() {
    return (
        <div className='menu'>
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink className={'menu__item-link'} to="appereance">
                        <Heart />
                        <div>
                            <span className="menu__item-title">
                            Appereance
                            </span>
                            <span className="menu__item-text">
                            Dark and Light mode, Font size
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className='menu__item-link' to="your">
                        <Group />
                        <div>
                            <span className="menu__item-title">
                            Your Restaurant
                            </span>
                            <span className="menu__item-text">
                            Dark and Light mode, Font size
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className='menu__item-link' to="managment">
                        <Setting />
                        <div>
                            <span className="menu__item-title">
                            Products Management
                            </span>
                            <span className="menu__item-text">
                            Manage your product, pricing, etc
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className='menu__item-link' to="notification">
                        <Notificition />
                        <div>
                            <span className="menu__item-title">
                            Notification
                            </span>
                            <span className="menu__item-text">
                            Dark and Light mode, Font size
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className='menu__item-link' to="security">
                        <Group />
                        <div>
                            <span className="menu__item-title">
                            Your Restaurant
                            </span>
                            <span className="menu__item-text">
                            Dark and Light mode, Font size
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className='menu__item-link' to="login">
                        <Setting />
                        <div>
                            <span className="menu__item-title">
                            Products Management
                            </span>
                            <span className="menu__item-text">
                            Manage your product, pricing, etc
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink className='menu__item-link' to="aboutUs">
                        <Notificition />
                        <div>
                            <span className="menu__item-title">
                            Notification
                            </span>
                            <span className="menu__item-text">
                            Dark and Light mode, Font size
                            </span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
