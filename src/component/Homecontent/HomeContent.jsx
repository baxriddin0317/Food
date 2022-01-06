import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cold from '../Cold/Cold';

function HomeContent() {
    return (
        <div> 
            <Routes>
                <Route path="/" element={<h2>salom</h2>} exact />
                <Route path="/cold-dishes" element={<Cold />} />
                <Route path="/soup" element={<p>Soup</p>} />
                <Route path="/grill" element={<p>grill</p>} />
                <Route path="/appetizer" element={<p>appetxer</p>}/>
                <Route path="/dessert" element={<p>Dessert</p>}/>
            </Routes>
        </div>
    )
}

export default HomeContent;
