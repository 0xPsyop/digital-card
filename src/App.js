import React from "react"
import Footer from "./components/Footer"
import About from "./components/About"
import Info from "./components/Info"


export default function App(){
    return(
        <div className="cont">
          <Info/>
          <About/>
          <Footer/>
        </div>
    )
}