import React from "react"
import img from "../manujaya.png";

export default function Info(){
    return(
        <div className="info">
           <img src={img} className="hero" alt="hero-img"/>
           <h1>Manujaya Sri</h1>
           <h4> Front-end Developer</h4>
           <p> manujaya.com</p>
           <button> Email </button>
        </div>
    )
}