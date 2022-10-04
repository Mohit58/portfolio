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
          fullScreen: {
            enable: true,
          },
          particles: {
            number: {
              value: 0,
            },
            color: {
              value: "",
            },
            shape: {
              type: ["circle", "square"],
            },
            opacity: {
              value: { min: 0, max: 1 },
              animation: {
                enable: true,
                speed: 1,
                startValue: "max",
                destroy: "min",
              },
            },
            size: {
              value: { min: 3, max: 7 },
            },
            life: {
              duration: {
                sync: true,
                value: 7,
              },
              count: 1,
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
              },
              drift: {
                min: -2,
                max: 2,
              },
              speed: { min: 10, max: 30 },
              decay: 0.1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
                top: "none",
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: "random",
              move: true,
              animation: {
                enable: true,
                speed: 60,
              },
            },
            tilt: {
              direction: "random",
              enable: true,
              move: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 15,
                max: 25,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              move: true,
              speed: {
                min: -15,
                max: 15,
              },
            },
          },
          detectRetina: true,
          background: {
            color: "#000000",
          },
          emitters: {
            direction: "none",
            spawnColor: {
              value: "#f00",
              animation: {
                l: {
                  enable: true,
                  offset: {
                    min: 0,
                    max: 100,
                  },
                  speed: 0,
                  sync: false,
                },
              },
            },
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.6,
            },
            rate: {
              delay: 0.1,
              quantity: 100,
            },
            size: {
              width: 0,
              height: 0,
            },
          },
        }}
      />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
