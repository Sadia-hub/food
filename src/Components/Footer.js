import React from "react"

export default function Footer(){
    return(
        <>
        <footer>
            <div id="col-container">

            <div class="col">
                <h4> OPENING HOURS</h4>
                <p><strong>Monday till Thursday: </strong>09:00Am–10:30Pm</p>
                <p><strong>Friday till Sunday:  </strong>09:00Am–11:00Pm</p>
            </div>
            <div class="col">
                <h4> CONTACT US </h4>
                <p><strong>Email: </strong>info@group70.com</p>
                <p><strong>Tel:  </strong>+234 810 1111 222</p>
            </div>
            <div class="col">
                <h4>LOCATIONS</h4>
                <p>Side Hustle Internship tower, <br/>Lagos,<br/> Nigeria</p>
            </div>
            <div class="col">
                <h4> MOBILE APP</h4>
                <p><img src={require("./img/apple_store.png")} alt="apple-store"/></p>
                <p><img src={require("./img/google_store.png")} alt="google-store"/></p>
            </div>
            </div>

            <div id="copywright">
                <p> <span>&copy;2022</span> GROUP70 RESTAURANT</p>
                <p>
                    <a href="/"><img src={require("./img/social/telegram-icon.png")} alt=""/></a>
                    <a href="/"><img src={require("./img/social/linkedIn-icon.png")} alt=""/></a>
                    <a href="/"><img src={require("./img/social/whatsApp-icon.png")} alt=""/></a>
                </p>
            </div>
        </footer>
        </>
    )
}