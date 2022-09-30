import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" alt="" className="home__image" />
                    <div className="home__row">
                        <Product
                            id="123422232"
                            title="Bag dfsdf sfsaf asrewr sdfdsf sczxkjjijirjxzc aep weop w off"
                            price={11.94}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/81oUvlsYcnL._SY879_.jpg"
                        />
                        <Product
                            id="12342223211"
                            title="Bagdsfdsf asdfs adfasd fasdf asf asdf asdfas"
                            price={51.94}
                            rating={3}
                            image="https://cdn-images.farfetch-contents.com/17/32/18/07/17321807_37727337_1000.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="12342222232"
                            title="Bag dfsdf sdfsa df sdf sdf sadjijirjxzc aep weop w off"
                            price={113.94}
                            rating={5}
                            image="https://cdn-images.farfetch-contents.com/17/60/97/42/17609742_40117877_1000.jpg"
                        />
                        <Product
                            id="123344422232"
                            title="Bag dfsdf sfssdf asfas fasf asdfjxzc aep weop w off"
                            price={41.94}
                            rating={2}
                            image="https://cdn-images.farfetch-contents.com/17/60/97/42/17609742_40118850_1000.jpg"
                        />
                        <Product
                            id="123666422232"
                            title="Bag dfsdf sfsad fasdf asdf asjxzc aep weop w off"
                            price={23.94}
                            rating={1}
                            image="https://cdn-images.farfetch-contents.com/17/84/87/78/17848778_39911989_1000.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="1234321232"
                            title="Bsdf asdf asdf sczxkjjijirjxzc aep weop w off"
                            price={121.94}
                            rating={5}
                            image="https://cdn-images.farfetch-contents.com/17/60/97/42/17609742_40118847_1000.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
