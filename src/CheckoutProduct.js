import React from 'react';
import "./Product.css";

function CheckoutProduct() {
    return (
        <div>
            <div className="checkoutProduct">
                <img src="https://cdn-images.farfetch-contents.com/17/84/87/78/17848778_39911989_1000.jpg" alt="" className="checkoutProduct__image" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">
                        sdfsdf safasdfsdfsadfsadfsadfasdf asdfasd fasdf asdf asdf
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>20</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        ⭐⭐
                    </div>
                    <button>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
