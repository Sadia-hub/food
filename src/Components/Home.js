import React from "react"
import Staff from "./Staff"

export default function Home(){
    return(
        <>
        <section id="hero">
            <div id="hero-container">
            <h4>For your simple life pleasures,</h4>
            <h1>GROUP 70</h1>
            <h3>RESTUARANT</h3>
            <h4> got you covered</h4>
            </div>
        </section> 


        <section className="myRow">
            <div className="service-container">
                <div className="myCol4">
                    <div className="service-image">
                        <img src={ require("./img/breakfast-icon.png")} alt="breakfast-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>BREAKFAST</h4>
                        <p>Breakfast is served between 07:00am and 10:00am. <br/><br/>Our breakfast includes Bread Sandwich with a hot beverage, Akara and Pap, Instant noodles and egg, Moi-Moi with custard or pap, Cereal, Okpa and so forth.</p>
                    </div>
                </div>
                <div className="myCol4">
                    <div className="service-image">
                        <img src={require("./img/lunch-icon.png")} alt="lunch-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>LUNCH</h4>
                        <p>Lunch is served between 5.00pm and 7.00pm. <br/><br/>
                        Our lunch menu includes Rice and stew, Jollof rice and chicken, Boiled potato and tomato egg stew, Pounded yam with Egusi soup and so forth.</p>
                    </div>
                </div>
                <div className="myCol4">
                    <div className="service-image">
                        <img src={require("./img/dinner-icon.png")} alt="breakfast-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>DINNER</h4>
                        <p>Dinner is served between 5.00pm and 7.00pm. <br/><br/> 
                        Our lunch menu includes Fufu and egusi soup, Jollof rice, White rice and Sauce or stew, Edikaikong and Swallow, Porridge Yam and so forth</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="myRow">
            <div id="hotdish">
                <h1>Our Most Sort out dishes</h1>
                <hr/>
                <div className="hotdish-container">
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/burger.jpg")} alt=""/>
                </div>
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/fried-rice.jpg")} alt=""/>
                </div>
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/jollof-rice.jpg")} alt=""/>
                </div>
                <div className="myCol3">
                    <img src={require("./img/hot-dishes/potato-chip.jpg")} alt=""/>
                </div>

                </div>
            </div>
        </section>

        <Staff/>
        </>
    )
}