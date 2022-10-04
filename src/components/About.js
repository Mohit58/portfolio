import React,{ useState, useEffect } from 'react'
import AboutUs from "../assets/images/about.png"
import "../styles/about.css"
import PacmanLoader	 from "react-spinners/PacmanLoader";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop:"21rem",
};




function About() {
  let [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1200)
    })
    return (
        <>
         {loading ?  <PacmanLoader color={"#feb800"} loading={true} cssOverride={override} size={25}/>
                    :
        <div className="container About">
            <div className="leftA">
            <img src={AboutUs} alt="aboutUs"/>
            </div>
            <div className="rightA">
                <h1>About me</h1>
                <p>
                    I've always wanted to combine my love for advance technologies with my willing to help other guys in the tech world. <br />
                    React JS | React Native | JavaScript | Next JS | Redux | React Query | Storybook
                </p>
            </div>
        </div>}
        </>
    )
}

export default About
