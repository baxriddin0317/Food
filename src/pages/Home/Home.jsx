import React from 'react'
import HomeContent from '../../component/Homecontent/HomeContent';
import HomeTop from '../../component/HomeTop/HomeTop';
import "./Home.scss"

function Home() {
    return (
        <div className='home'>
            <div className="home__content">
                <HomeTop />
                <HomeContent />
            </div>
            <div className="home__order">orders</div>
        </div>
    )
}

export default Home;
