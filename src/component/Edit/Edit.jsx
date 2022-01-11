import React from 'react'
import { useParams } from 'react-router-dom'
//styles
import "./Edit.scss"
// data 
import Foods from "../../assets/Baza/Baza";
import Edit from "../../Libra/Svgs/Edit";
import Plus from "../../Libra/Svgs/Plus";
function EditComponent() {
    const { foodType } = useParams();

    return (
        <div className='card'>
            <ul className='card__list'>
                <li className="card__add">
                    <Plus />
                    Add new dish
                </li>
                {Foods.filter((food) =>food.foodType === foodType).map(food => (
                    <li className='card__list-item' key={food.id}>
                        <img className='card__list-img' src={food.img} alt='food' width={150} />
                        <h2 className='card__list-title'>{ food.title }</h2>
                        <span className='card__list-text'>${ food.money } </span>
                        <span className='card__list-dod'></span>
                        <span className='card__list-text'>{ food.theRest } Bowls</span>
                        <button className="card__list-btn">
                            <Edit />
                            Edit dish
                        </button>
                    </li>
                ))}                
            </ul>
        </div>
    )
}

export default EditComponent
