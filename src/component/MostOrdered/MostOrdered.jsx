import React from 'react'
import "./MostOrdered.scss";
import data from "../../assets/Baza/Baza";


function MostOrdered() {
    return (
        <div className='most'>
            <div className='most__box'>
                <h3 className='most__box-title'>Most Ordered</h3>
                <select>
                    <option>Today</option>
                    <option>Yest</option>
                </select>
            </div>

            
            {data.length > 0 && <ul className="most__list">
                {data.map(food => (
                <li className="most__list-item" key={food.id}>
                    <img src={food.img} alt="" />
                    <div className="most__list-block">
                        <h2 className="most__list-title">
                        {food.title}
                        </h2>
                        <span className="most__list-text">
                        {food.theRest} dishes ordered
                        </span>
                    </div>
                </li>
                ))}
            </ul>}
            
            <button className='most__btn'>View All</button>
        </div>
    )
}

export default MostOrdered
