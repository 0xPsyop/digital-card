import React from "react"
import fb from "../icons/fb.png"
import tw from "../icons/tw.png"
import gh from "../icons/gh.png"
import ig from "../icons/ig.png"
import pn from "../icons/pn.png"

export default function Footer (){
    return(
        <div className="foot">
           <img alt="logo" src={fb}/>
           <img alt="logo" src={tw}/>
           <img alt="logo" src={gh}/>
           <img alt="logo" src={ig}/>
           <img alt="logo" src={pn}/>
        </div>
    )
}