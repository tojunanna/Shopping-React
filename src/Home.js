import React from "react";
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="./images/homeimage.jpg" alt="" className="home__image" />

                    <div className="home__row">
                        <Product
                            id="1"
                            title="Burberry Men Black Letchford T-shirt"
                            price={450.99}
                            rating={5}
                            image="./images/burberry.jpeg"
                        />
                        <Product
                            id="2"
                            title="Burberry "
                            price={150.99}
                            rating={3}
                            image="./images/1.jpg" />
                    </div>

                    <div className="home__row">
                        <Product
                            id="3"
                            title="Burberry Men Black Letchford T-shirt"
                            price={300.99}
                            rating={3}
                            image="./images/2.jpg" />
                        <Product
                            id="4"
                            title="Burberry Men Black Letchford T-shirt"
                            price={199.99}
                            rating={5}
                            image="./images/5.jpg" />
                        <Product
                            id="5"
                            title="Burberry Men Black Letchford T-shirt"
                            price={450.99}
                            rating={4}
                            image="./images/4.jpg" />
                    </div>

                    <div className="home__row">
                        <Product
                            id="6"
                            title="Burberry Men Black Letchford T-shirt"
                            price={150}
                            rating={4}
                            image="./images/3.jpg" />
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home