import React from 'react';
import "./DashboardTop.scss";

//icons 
import Coin from "../../Libra/Svgs/Coin";
import Customer  from "../../Libra/Svgs/Customer";
import Or from "../../Libra/Svgs/Or";
import Down from "../../Libra/Svgs/Down";
import Up from "../../Libra/Svgs/Up";

function DashboardTop() {
    const getDate = () => new Date().toDateString();

    return (
        <div className='dashboardTop'>
            <div className="dashboardTop__box">
                <span className="dashboardTop__box-title">
                    Dashboard
                </span>
                <span className="dashboardTop__box-info">
                    {getDate()}
                </span>
            </div>

            <div className="dashboardTop__content">
                <div className="dashboardTop__content-block">
                    <div className='dashboardTop__content-head'>
                    <span className="dashboardTop__content-val">
                        <Coin />
                    </span>
                    <span className='positiv'>+32.40%</span>
                    <span className="dashboardTop__content-arrow">
                        <Up />
                    </span>
                    </div>
                    <span className="dashboardTop__content-title">
                        $10.243.00
                    </span>
                    <span className="dashboardTop__content-sub">
                        Total Revenue
                    </span>
                </div>
                <div className="dashboardTop__content-block">
                    <div className='dashboardTop__content-head'>
                    <span className="dashboardTop__content-val">
                        <Or />
                    </span>
                    <span className='negativ'>+32.40%</span>
                    <span className="dashboardTop__content-arrow">
                        <Down />
                    </span>
                    </div>
                    <span className="dashboardTop__content-title">
                        $10.243.00
                    </span>
                    <span className="dashboardTop__content-sub">
                        Total Revenue
                    </span>
                </div>
                <div className="dashboardTop__content-block">
                    <div className='dashboardTop__content-head'>
                    <span className="dashboardTop__content-val">
                        <Customer />
                    </span>
                    <span className='positiv' >+32.40%</span>
                    <span className="dashboardTop__content-arrow">
                        <Up />
                    </span>
                    </div>
                    <span className="dashboardTop__content-title">
                        $10.243.00
                    </span>
                    <span className="dashboardTop__content-sub">
                        Total Revenue
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DashboardTop
