import React, { useContext, useRef } from 'react'
import { Context } from "../Context/Context";
import Delete from "../../Libra/Svgs/Delete";
import "./Modal.scss";
import "../../component/Order/Order.scss";
import { ModalContext } from "../Context/ModalContenxt";


//images
import Line from "../../assets/img/line.png"
import Plus from "../../Libra/Svgs/Plus";
import Cash from "../../Libra/Svgs/Cash";
import Card from "../../Libra/Svgs/Card";
import Pay from "../../Libra/Svgs/Pay";


function Modal() {
    const {orders, setOrders} = useContext(Context);
    const {modal, setModal} = useContext(ModalContext);
    const refModal = useRef()

    return (
        <div ref={refModal} className='modal modal-active' onClick={e => {
                if(refModal.current == e.target){
                    setModal(!modal);
                }
            
            }}>
            <div className="modal__container">
                <div className="modal__confirmation">
                    <img src={Line} alt="line" className='modal__confirmation-img' onClick={() => {
                        setModal(!modal);
                    }} />

                    <div className="modal__confirmation-head">
                        <div className="modal__confirmation-box">
                            <h3 className="modal__confirmation-title">
                                Confirimation
                            </h3>
                            <span className="modal__confirmation-info">
                                Orders #34562
                            </span>
                        </div>
                        <button>
                            <Plus />
                        </button>
                    </div>

                    {orders.length > 0 && <ul className="order__list">
                        {orders.map(order => (
                            <li className="order__list-item" key={order.id}>
                                <div className="order__list-block">
                                    <img src={order.img} alt="order-food" className="order__list-block-img" width="45" />
                                    <div className="order__list-content">
                                        <p>{order.title}</p>
                                        <small>${order.money}</small>
                                    </div>
                                    <span className="order__list-num">
                                        {order.number}
                                    </span>
                                    <span className="order__list-sum">
                                        ${order.number * order.money}
                                    </span>
                                </div>
                                <div className="order__list-bottom">
                                        <input type="text" placeholder="Order note"/>
                                        <button onClick={() => {
                                            setOrders(orders.filter(food => food.id !== order.id));
                                            order.number = 0;
                                        }}>
                                            {<Delete />}
                                        </button>
                                </div>
                            </li>
                        ))}  
                    </ul>}

                    <div className="order__result">
                        <small className="order__result-text">Discount</small>
                        <p>$0</p>
                    </div>
                    <div className="order__result">
                        <small className="order__result-text">Sub total</small>
                        <p>$21.03</p>
                    </div>
                </div>
                <div className="modal__payment">
                   <div className="modal__payment-head">
                       <h3 className="modal__payment-head-title">
                           Payment
                       </h3>
                       <span className="modal__payment-info">
                       3 payment method available
                       </span>
                   </div>

                   <h2 className="modal__payment-title">
                       Payment Method
                   </h2>

                   <div className="modal__payment-box">
                       <button>
                            <Cash />
                           Credit Card
                        </button>
                       <button>
                           <Pay />
                           Paypal
                        </button>
                       <button>
                           <Card />
                           Cash
                        </button>
                   </div>

                   <form className="modal__payment-form">
                       <label htmlFor="cardName">
                           Cardholder Name
                       </label>
                       <input id='cardName' type="text" placeholder='Levi Ackerman' />
                       <label htmlFor="cardNum">
                           Cardholder Number
                       </label>
                       <input id='cardNum' type="text" placeholder='2564 1421 0897 1244' />
                       <div className="modal__payment-box">
                            <div>
                            <label htmlFor="cardDate">
                            Expiration Date
                            </label>
                            <input id='cardDate' type="text" placeholder='02/2022' />
                            </div>
                            <div>
                            <label htmlFor="cardPas">
                                CVV
                            </label>
                            <input id='cardPas' type="password" />              
                            </div>
                       </div>
                       <div className="modal__payment-box">
                            <div>
                                <label htmlFor="cardSelect">
                                Order type
                                </label>
                                <select id="cardSelect">
                                    <option value="one">Dine in</option>
                                    <option value="one">to go</option>
                                    <option value="one">Delivery</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="cardPas">
                                    Table no
                                </label>
                                <input id='cardTab' type="number" placeholder='140' />              
                            </div>
                       </div>
                   </form>

                   <div className="modal__payment-btnGroup">
                       <button onClick={() => {
                           setModal(!modal);
                       }}>Close</button>
                       <button>Confirm Payment</button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
