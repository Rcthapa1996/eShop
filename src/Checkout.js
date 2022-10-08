import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://www.wordstream.com/wp-content/uploads/2022/07/bottom-rail-smart-ads-creator.png" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} ></CheckoutProduct>
                    )}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
