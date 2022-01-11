import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import EditComponent from '../Edit/Edit';
import './Managment.scss';

function Managment() {

    const classAdd = ({isActive}) => isActive ? 'nav__item-link active-link' : 'nav__item-link';

    return (
        <div className='edit'>
            <div className="edit__head">
                <span className="edit__head-title">
                Products Management
                </span>
                <span className="edit__head-cate">
                Manage Categories
                </span>
            </div>
            {/* navigation */}
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className={classAdd} to="hot-dishes">Hot Dishes</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={classAdd} to="cold-dishes">Cold Dishes</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={classAdd} to="soup">Soup</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={classAdd} to="grill">Grill</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={classAdd} to="appetizer">Appetizer</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className={classAdd} to="dessert">dessert</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path=":foodType" element={<EditComponent />} />
            </Routes>

            <div className="edit__btngroup">
                <button className="edit__close">
                    Discard Changes
                </button>
                <button className="edit__save">
                    Save Change
                </button>
            </div>
        </div>
    )
}

export default Managment
