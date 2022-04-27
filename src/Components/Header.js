import React from "react"
import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
        <section id="header">
            <Link to="/"><img className="logo" src={ require ("./group70Logo.png")} alt="Group70 logo"/></Link>
        <div>
            <ul id="navbar">
                <li id="active"><Link className="link active" to="/">Home</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/product" className="link">Product</Link></li>
                <li><Link to="/contact" className="link">Contact</Link></li>
            </ul>
        </div>
        </section>
        </>
    )
}