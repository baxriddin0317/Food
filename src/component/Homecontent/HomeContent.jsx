import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cold from '../Cold/Cold';

function HomeContent() {
    return (
        <div> 
            <Routes>
                <Route path="/" element={<Cold />} />
                <Route path="/:foodType" element={<Cold />} />
            </Routes>
        </div>
    )
}

export default HomeContent;
