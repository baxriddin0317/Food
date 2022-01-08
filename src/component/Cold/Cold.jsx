import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
//styles
import "./Cold.scss"
// data 
import Foods from "../../assets/Baza/Baza";
import { Context } from '../Context/Context';

// const orderClick = (e) => {
//     console.log(e.currentTarget);
// }

function Cold() {
    const { foodType } = useParams();
    const {orders, setOrders} = useContext(Context);

    return (
        <div className='cold'>
            {Foods.length > 0 && <ul className='cold__list'>
                    {Foods.filter((food) => {
                        if(foodType){
                            return food.foodType === foodType;
                        }

                        return food.foodType === "hot-dishes";
                    }).map(food => (
                        <li className='cold__list-item' key={food.id} onClick={() => {
                            setOrders([...new Set([...orders, food])]);
                            
                            food.number = food.number ? food.number + 1 : 1;
                        }}>
                        <img className='cold__list-img' src={food.img} alt='food' width={150} />
                        <h2 className='cold__list-title'>{ food.title }</h2>
                        <span className='cold__list-money'>${ food.money }</span>
                        <span className='cold__list-theRest'>{ food.theRest } Bowls available</span>
                    </li>
                    ))}                
                </ul>
            }
        </div>
    )
}

export default Cold
