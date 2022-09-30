import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://www.wordstream.com/wp-content/uploads/2022/07/bottom-rail-smart-ads-creator.png" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <CheckoutProduct />
                    <CheckoutProduct />
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
