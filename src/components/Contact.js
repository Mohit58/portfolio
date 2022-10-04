import React, { useRef, useState, useEffect } from 'react'
import "../styles/contact.css";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PacmanLoader	 from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop:"21rem",
  };

function Contact() {
    const position = [29.472561,77.707130]
    const form = useRef();
    const [loading, setLoading] = useState(true);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_90674qt', 'template_wfc6fhd', form.current, 'VPBwW_dwnhH7M6Gi4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
      
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1200)
    })
    return (
        <>
         {loading ?  <PacmanLoader color={"#feb800"} loading={true} cssOverride={override} size={25}/>
                    :
        <div className="container contact">
            <div className="left m-4">
                <h1>Contact me</h1>
                <p>
            I am interested in react and react native apps. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
                <div className="contact-form">
                    <form  ref={form} onSubmit={sendEmail}>
                        <div className="half">
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="email" placeholder="Email" name="email"/>
                        </div>
                        <div>
                        <input type="text" placeholder="Subject" name="subject"/>
                        </div>
                        <div>
                        <textarea placeholder="message" name="message" rows="10"/>
                        </div>
                        <button className="form-btn">Send</button>
                    </form>
                </div>
            </div>
           <div className=" map-wrap">
               <div className="map-info">
                   Mohit Kumar
                   <br/>
                   Muzaffarnagar, Uttar Pradesh
                   <br/>
                   Kelapur Jasmor, Miranpur<br/>
                   <span>mk581991@gmail.com</span>
               </div>
          <MapContainer  style={{ width: '100%', height: '100%',position: 'relative'}}center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <Marker position={position}>
      <Popup>
        Mohit Lives Here, come over for a cup of coffee :) 
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  </div>}
  </>
    )
}

export default Contact
