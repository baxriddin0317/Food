import React from 'react';
import { NavLink } from 'react-router-dom';
import "./HomeTop.scss";

function HomeTop() {
    const getDate = () => new Date().toDateString();
    return (
        <div className='homeTop'>
            <div className="homeTop__head">
                <div className="homeTop__head-box">
                    <h2 className="homeTop__head-title">
                    Jaegar Resto
                    </h2>
                    <span>{getDate()}</span>
                </div>
                <form className='homeTop__head-form'>
                    <input type="search" placeholder='Search for food, coffe, etc..' />
                </form>
            </div>
            {/* navigation */}
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__item-link" to="/">Hot Dishes</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__item-link" to="/cold-dishes">Cold Dishes</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__item-link" to="/soup">Soup</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__item-link" to="/grill">Grill</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__item-link" to="/appetizer">Appetizer</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__item-link" to="/dessert">dessert</NavLink>
                </li>
            </ul>

            <div className='homeTop__box'>
                <h3 className='homeTop__box-title'>Choose Dashes</h3>
                <select>
                    <option>Dine in</option>
                    <option>Dine out</option>
                </select>
            </div>
        </div>
    )
}

export default HomeTop
