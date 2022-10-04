import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Typical from "react-typical";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Player } from "@lottiefiles/react-lottie-player";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: "21rem",
};

function Home() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  });
  
  return (
    <div className="Home">
      {loading ? (
        <PacmanLoader
          color={"#feb800"}
          loading={true}
          cssOverride={override}
          size={25}
        />
      ) : (
        <div className="content">
          <div className="left">
            <h1 className="h1">Hi,</h1>
            <h1>
              I am
              Mohit Kumar
              <br />a{" "}
              <Typical
                steps={[
                  "Frontend Engineer",
                  1800,
                  "JavaScript Developer",
                  1800,
                  "React Developer",
                  1800,
                  "Learning NodeJS",
                  1200,
                ]}
                loop={Infinity}
                wrapper="b"
                className="typical"
              />
            </h1>
            <h2> Frontend Engineer / React Developer</h2>
            <a
              href="https://drive.google.com/file/d/1IhW06rSruprOHnr9abhUQej6Tc0L10tC/view?usp=sharing"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="right">
            <Player
              autoplay
              loop
              speed="0.4"
              src="https://assets3.lottiefiles.com/private_files/lf30_WdTEui.json"
              className="developer"
            >
            </Player>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
