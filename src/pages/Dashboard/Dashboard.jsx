import React from 'react';
import "./Dashboard.scss";
import DashboardTop from '../../component/DashboardTop/DashboardTop'
import Table from '../../component/Table/Table';
import MostOrdered from '../../component/MostOrdered/MostOrdered';
import Example from '../../component/Chart/Chart';

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard__content">
                <DashboardTop />
                <Table />
            </div>
            <div className="dashboard__right">
                <MostOrdered />
                <Example />
            </div>
        </div>
    )
}

export default Dashboard
