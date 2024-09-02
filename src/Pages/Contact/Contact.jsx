import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

//Icons
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { ReactComponent as TweeterIcon } from "../../images/social/twitter2-icon.svg";
import { ReactComponent as FbIcon } from "../../images/social/fb2-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/social/instagram2-icon.svg";
import { ReactComponent as CodepenIcon } from "../../images/social/codepen.svg";

//Animations
import {
  slideInBottom,
  opacityAnimation,
  headlineSpringAnimation,
  childDelayTopSpring,
} from "../../Styles/animations";

const Contact = () => {
  const [formSent, setFormSent] = useState(false);

  //Contact form function
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sfk8k4w",
        "template_ceelcy7",
        form.current,
        "IccS5zBxdnan6PYx_"
      )
      .then(
        (result) => {
          setFormSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container" id="contact-container">
      <div className="custom-shape-divider-top-1695729457">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <motion.h1
        className="contact-container__headline"
        whileInView={"visible"}
        initial="hidden"
        variants={headlineSpringAnimation}
      >
        Contact me
      </motion.h1>
      <motion.form
        className="contact-container__form"
        ref={form}
        onSubmit={sendEmail}
        whileInView={"visible"}
        initial="hidden"
        variants={childDelayTopSpring}
      >
        <motion.input
          type="text"
          placeholder="Your name"
          name="user_name"
          className="contact-container__form__input"
          required
          variants={slideInBottom}
        ></motion.input>
        <motion.input
          type="email"
          placeholder="Your email"
          name="user_email"
          className="contact-container__form__input"
          required
          variants={slideInBottom}
        ></motion.input>
        <motion.textarea
          placeholder="Type your message"
          name="message"
          className="contact-container__form__message"
          rows={15}
          required
          variants={slideInBottom}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="contact-container__form__button"
          variants={opacityAnimation}
        >
          Send
          <SendIcon />
        </motion.button>
        {formSent ? (
          <motion.div
            className="contact-container__form__sent"
            whileInView={"visible"}
            initial="hidden"
            variants={opacityAnimation}
          >
            <h2>Thanks for reaching out.</h2>
            <p>
              I will get back in touch with you as soon as possible.
            </p>
          </motion.div>
        ) : null}
      </motion.form>

      <motion.div
        className="contact-container__contact-details"
        whileInView="visible"
        initial="hidden"
        variants={childDelayTopSpring}
      >
        <motion.h3
          className="contact-container__contact-details__headline"
          variants={opacityAnimation}
        >
          Get in touch
        </motion.h3>
        <motion.p
          className="contact-container__contact-details__info"
          variants={opacityAnimation}
        >
          If you have any questions about my projects or you would
          like to work with me feel free to use my contact details or
          the contact form.
        </motion.p>
        <motion.p
          className="contact-container__contact-details__info"
          variants={opacityAnimation}
        >
          <EmailIcon />
          Email:{" "}
          <span className="--bold">jakub.babelek@gmail.com</span>
        </motion.p>
        <motion.p
          className="contact-container__contact-details__info"
          variants={opacityAnimation}
        >
          <LocalPhoneIcon />
          Phone: <span className="--bold">+44 079 2889 2470</span>
        </motion.p>
        <motion.div
          className="contact-container__contact-details__socials"
          variants={childDelayTopSpring}
        >
          <motion.i
            className="contact-container__contact-details__socials__icon"
            variants={opacityAnimation}
          >
            <a href="https://codepen.io/Isuususu" target="blank">
              <CodepenIcon
                style={{ width: "30px", height: "32px" }}
              />
            </a>
          </motion.i>
          <motion.i
            className="contact-container__contact-details__socials__icon"
            variants={opacityAnimation}
          >
            <a href="https://twitter.com/Isuususu1" target="blank">
              <TweeterIcon
                style={{ width: "30px", height: "32px" }}
              />
            </a>
          </motion.i>
          <motion.i
            className="contact-container__contact-details__socials__icon"
            variants={opacityAnimation}
          >
            <a
              href="https://www.facebook.com/jakub.babelek/"
              target="blank"
            >
              <FbIcon style={{ width: "30px" }} />
            </a>
          </motion.i>
          <motion.i
            className="contact-container__contact-details__socials__icon"
            variants={opacityAnimation}
          >
            <a
              href="https://www.instagram.com/isuususu/"
              target="blank"
            >
              <InstagramIcon style={{ width: "30px" }} />
            </a>
          </motion.i>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
