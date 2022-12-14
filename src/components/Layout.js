import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Layout = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Sidebar />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 0,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0,
                sync: false
              }
            },
            size: {
              value: 8,
              random: { enable: true, minimumValue: 4 },
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 4,
                sync: false
              }
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: -0.5
              },
              speed: 5,
              direction: "top",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
                bottom: "none"
              },
              attract: {
                enable: true,
                distance: 300,
                rotate: {
                  x: 600,
                  y: 1200
                }
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          detectRetina: true,
          background: {
            color: "#000000"
          },
          emitters: [
            {
              direction: "top",
              particles: {
                color: "#ffffff"
              },
              rate: {
                quantity: 1,
                delay: 0.1
              },
              size: {
                width: 100,
                height: 10
              },
              position: {
                x: 50,
                y: 100
              }
            }
          ]
        }}
      />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
