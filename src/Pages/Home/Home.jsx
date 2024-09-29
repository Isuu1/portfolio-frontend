import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Home = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="home-container" id="home-container">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  value_area: 710.2328774690454,
                },
              },
              color: {
                value: "#e8a04f",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 23.976023976023978,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 94.69771699587272,
                color: "#9c5fa0",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      )}
      <div className="home-container__headline">
        <h2 className="home-container__headline__text">
          Hello there, my name is Jakub. I'm a <br></br>{" "}
          <TypeAnimation
            sequence={[
              "front-end developer.",
              1500,
              "web designer.",
              1500,
              "tech enthusiast.",
              1500,
            ]}
            speed={40}
            repeat={Infinity}
            style={{ color: "#811ae5", fontWeight: "bold" }}
          />
        </h2>

        <div className="home-container__headline__buttons">
          <a href="#projects-container">
            <button className="home-container__headline__buttons__my-work">
              My work
              <TbArrowBigDownLineFilled className="icon" />
            </button>
          </a>
          <a href="https://github.com/Isuu1">
            <button className="home-container__headline__buttons__github">
              GitHub
              <FaGithub className="icon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
