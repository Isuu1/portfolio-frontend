import React from "react";
import { motion } from "framer-motion";

//Icons
import { ReactComponent as JSIcon } from "../../images/javascript-icon.svg";
import { ReactComponent as HTMLIcon } from "../../images/html-icon.svg";
import { ReactComponent as CSSIcon } from "../../images/css-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { ReactComponent as ReactIcon } from "../../images/react-icon.svg";
import { ReactComponent as SassIcon } from "../../images/sass-icon.svg";
import { ReactComponent as WordpressIcon } from "../../images/wordpress-icon.svg";
import { ReactComponent as StrapiIcon } from "../../images/strapi-icon.svg";
import { ReactComponent as NextJSIcon } from "../../images/nextjs-icon.svg";
import { ReactComponent as SanityIcon } from "../../images/sanity-icon.svg";

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
            Hi there! I'm Jacob, a passionate and creative web
            developer with a knack for turning ideas into visually
            appealing and functional websites. I thrive on challenges
            and love bringing web projects to life with code.
          </motion.p>
          <motion.p
            className="about-container__data__desc"
            variants={slideInBottom}
          >
            When I'm not immersed in code, I enjoy exploring new
            places on my bike trips and playing online games with my
            friends. Yet, it's within the realm of coding where my
            passion truly ignites. I thrive on the challenge of
            mastering new technologies and seamlessly integrating them
            into my projects. With an unwavering commitment to
            perfection, I meticulously refine every detail, ensuring
            each project reaches its full potential.
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
        <h3 className="about-container__icons__headline">
          My skills
        </h3>
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
          <WordpressIcon style={{ width: "55px", height: "55px" }} />
          <p>Wordpress</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
