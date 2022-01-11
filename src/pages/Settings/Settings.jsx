import React from 'react'
import './Settings.scss'
import { Route, Routes } from 'react-router-dom';
import Menu from '../../component/Menu/Menu';
import Managment from '../../component/Managment/Managment';

function Settings() {
    return (
        <div className='setting'>
            <h2 className="setting__title">
                Settings
            </h2>

            <div className="setting__block">
                <div className="setting__block-menu">
                    <Menu />
                </div>
                <div className="setting__block-route">
                    <Routes>
                        <Route path="managment/*" exact={true} element= {<Managment />} />
                        <Route path="*" element= {<p>Bu page halia tayyor emas! products managment pagesi tayyor</p>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Settings;
