import React from "react"
import Staff from "./Staff"
import Testimonials from "./Testimonials"
export default function About(){
    return(
        <>
        <section id="hero">
            <div id="hero-container">           
                <h1>About Us</h1>           
            </div>
        </section>

        

        <section className="myRow">
            <div className="service-container">
                <div className="myCol4">
                    <div className="service-image">
                        <img src={ require("./img/sheffs.png")} alt="breakfast-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>Best Sheffs</h4>
                        <p>We have best sheffs from all over the world. <br/><br/>They have experience of cooking from various different countries such as Pakistan, Nigeria, Kenya, India, Russia, China, London, Paris etc. So, you get to test different cultural foods</p>
                    </div>
                </div>
                <div className="myCol4">
                    <div className="service-image">
                        <img src={require("./img/food.png")} alt="lunch-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>Unique Recipes</h4>
                        <p>The best part is that our recipies are quite unique<br/><br/>
                        Each item in our restraunt is cooked with a unique recipe. You won't get the similar taste in any other restraunt
                       </p>
                    </div>
                </div>
                <div className="myCol4">
                    <div className="service-image">
                        <img src={require("./img/style.png")} alt="breakfast-icon"/>
                    </div>
                    <div className="service-desc">
                        <h4>Stylish Food</h4>
                        <p>Appetitie highly depends upon the appearance of the food<br/><br/> 
                        But don't worry, group 70 takes care of that. We present you every food with bright colors and pleasant appearance. 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="myRow">
            <div id="hotdish">
                <h1>Our Timings</h1>
                <hr/>
                <div className="hotdish-container">
                <div className="myCol3">
                    <h2>Monday-Friday</h2>
                    <h2>9:00 AM-10:00PM</h2>
                </div>
                <div className="myCol3">
                    <h2>Saturdays</h2>
                    <h2>9:00 AM-2:00AM</h2>
                </div>
                <div className="myCol3">
                    <h2>Sundays</h2>
                    <h2>9:00 AM-05:00PM</h2>
                </div>
                

                </div>
            </div>
        </section>

        <Staff/>


        

        </>
    )
}