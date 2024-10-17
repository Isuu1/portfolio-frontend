import React from "react";
import { motion } from "framer-motion";

//Icons
import { ReactComponent as JSIcon } from "../../images/javascript-icon.svg";
import { ReactComponent as HTMLIcon } from "../../images/html-icon.svg";
import { ReactComponent as CSSIcon } from "../../images/css-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as ReactIcon } from "../../images/react-icon.svg";
import { ReactComponent as SassIcon } from "../../images/sass-icon.svg";
import { ReactComponent as TypescriptIcon } from "../../images/typescript-icon.svg";
import { ReactComponent as StrapiIcon } from "../../images/strapi-icon.svg";
import { ReactComponent as NextJSIcon } from "../../images/nextjs-icon.svg";
import { ReactComponent as SanityIcon } from "../../images/sanity-icon.svg";
import { ReactComponent as HerokuIcon } from "../../images/heroku-icon.svg";

//Animations
import {
  slideInBottom,
  opacityAnimation,
  iconsDelayAnimation,
  headlineSpringAnimation,
  childDelayTopSpring,
} from "../../Styles/animations";

const About = (props) => {
  return (
    <div
      className="about-container"
      id="about-container"
      ref={props.aboutRef}
    >
      <motion.div
        className="about-container__my-image-wrapper"
        whileInView={"visible"}
        initial="hidden"
        variants={opacityAnimation}
      >
        <div className="about-container__my-image-wrapper__image"></div>
      </motion.div>
      <motion.div
        className="about-container__data"
        whileInView={"visible"}
        initial="hidden"
        variants={childDelayTopSpring}
      >
        <motion.div
          className="about-container__headline"
          whileInView={"visible"}
          initial="hidden"
          variants={headlineSpringAnimation}
        >
          About me
        </motion.div>
        <motion.div
          whileInView={"visible"}
          initial="hidden"
          variants={childDelayTopSpring}
        >
          <motion.p
            className="about-container__data__desc"
            variants={slideInBottom}
          >
            Hi, I'm Jakub, an aspiring Full-Stack Software Engineer
            with a deep passion for technology and coding.
          </motion.p>
          <motion.p
            className="about-container__data__desc"
            variants={slideInBottom}
          >
            I transitioned into this field because I thrive on
            constant learning, solving real-world problems, and
            embracing new challenges. I'm currently mastering Next.js
            and TypeScript, driven by the excitement of building
            dynamic, user-focused applications. My background has
            given me strong problem-solving and organisational skills,
            which I love applying to complex coding challenges. When
            I'm not immersed in code, you can usually find me out on a
            bike trip, recharging for the next big project.
            <motion.p
              className="about-container__data__desc"
              variants={slideInBottom}
            >
              Get in touch and let's bring your ideas to life!
            </motion.p>
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="about-container__icons"
        whileInView={"visible"}
        initial="hidden"
        variants={childDelayTopSpring}
      >
        <h3 className="about-container__icons__headline">My stack</h3>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <JSIcon style={{ width: "55px", height: "55px" }} />
          <p>Javascript</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <TypescriptIcon style={{ width: "55px", height: "55px" }} />
          <p>Typescript</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <HTMLIcon style={{ width: "55px", height: "55px" }} />
          <p>HTML</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <CSSIcon style={{ width: "55px", height: "55px" }} />
          <p>CSS</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <SassIcon style={{ width: "55px", height: "55px" }} />
          <p>SASS</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <GithubIcon style={{ width: "60px", height: "55px" }} />
          <p>Git</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <ReactIcon style={{ width: "55px", height: "55px" }} />
          <p>React</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <NextJSIcon
            style={{ width: "55px", height: "55px", color: "white" }}
          />
          <p>NextJS</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <StrapiIcon style={{ width: "55px", height: "55px" }} />
          <p>Strapi</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <SanityIcon style={{ width: "55px", height: "55px" }} />
          <p>Sanity</p>
        </motion.div>
        <motion.div
          className="about-container__icons__icon"
          variants={iconsDelayAnimation}
        >
          <HerokuIcon style={{ width: "55px", height: "55px" }} />
          <p>Heroku</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
