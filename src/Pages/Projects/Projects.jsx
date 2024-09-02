import React, { Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
//Fetching projects function
import { getProjects } from "../../api";
//Removing hash from url function
import { removeHash } from "../../utils";

//Animations
import {
  headlineSpringAnimation,
  opacityAnimation,
  childDelayTopSpring,
  newFancyAnimation,
} from "../../Styles/animations";
import Error from "../../Components/Error/Error";

export function loader() {
  return defer({ projects: getProjects() });
}

const Projects = (props) => {
  //Removing hash from url shortly after it was added by clicking on menu items,
  // hash at link was causing issue with a 'Go back' button in <ProjectDetail>
  // so button did not redirect to the same spot on website
  removeHash();

  const [category, setCategory] = useState("All");

  //Changing visibility of projects and changing category using search params
  function handleCatChange(cat) {
    setCategory(cat);
  }

  //Getting currently selected search param
  const typeFilter = category;

  //Loading all the data from a data loader
  const dataPromise = useLoaderData();

  function renderProjectElements(projects) {
    const elements = projects.data.map((item) =>
      // Mapping through the data to find item with current category
      item.attributes.categories.data.find(
        (el) => el.attributes.name === typeFilter
      ) ? (
        <motion.div
          className="projects-container__tile"
          key={item.id}
          whileInView="visible"
          initial="hidden"
          variants={newFancyAnimation}
          exit="exit"
        >
          <div className="projects-container__tile__overlay">
            <h2 className="projects-container__tile__overlay__title">
              {item.attributes.title}
            </h2>
            <p className="projects-container__tile__overlay__desc">
              {item.attributes.shortDesc}
            </p>
            <Link to={`/${item.id}`}>
              <button className="projects-container__tile__overlay__button">
                View more
              </button>
            </Link>

            <button className="projects-container__tile__overlay__button--purple">
              <a href={item?.attributes?.liveUrl}>Live site</a>
            </button>
          </div>
          <img
            src={`${item.attributes.image.data[0].attributes.url}`}
            className={`projects-container__tile__overlay__thumbnail`}
            alt=""
          />
        </motion.div>
      ) : null
    );
    return elements;
  }

  return (
    <motion.div
      className="projects-container"
      id="projects-container"
      ref={props.projectsRef}
      variants={childDelayTopSpring}
      whileInView={"visible"}
      initial="hidden"
    >
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      <motion.div
        className="projects-container__headline"
        whileInView={"visible"}
        initial="hidden"
        variants={headlineSpringAnimation}
      >
        My work
      </motion.div>
      <motion.div
        className="projects-container__type-selector"
        whileInView={"visible"}
        initial="hidden"
        variants={childDelayTopSpring}
      >
        <motion.button
          onClick={() => handleCatChange("All")}
          className={`projects-container__type-selector__button ${
            typeFilter === "All" ? "selected" : null // Adding class 'selected' to the button
          }`}
          variants={opacityAnimation}
        >
          All
        </motion.button>
        <motion.button
          onClick={() => handleCatChange("Web")}
          className={`projects-container__type-selector__button ${
            typeFilter === "Web" ? "selected" : ""
          }`}
          variants={opacityAnimation}
        >
          Web
        </motion.button>
        <motion.button
          onClick={() => handleCatChange("Ecommerce")}
          className={`projects-container__type-selector__button ${
            typeFilter === "Ecommerce" ? "selected" : ""
          }`}
          variants={opacityAnimation}
        >
          Ecommerce
        </motion.button>
        <motion.button
          onClick={() => handleCatChange("Mobile")}
          className="projects-container__type-selector__button"
          variants={opacityAnimation}
        >
          Mobile
        </motion.button>
      </motion.div>
      <AnimatePresence mode="wait">
        <Suspense
          key={category}
          fallback={
            <div
              style={{
                width: "100%",
                minHeight: "70vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="spinElement"></div>
            </div>
          }
        >
          <div className="projects-container__projects">
            <Await
              resolve={dataPromise.projects}
              errorElement={<Error />}
            >
              {renderProjectElements}
            </Await>
          </div>
        </Suspense>
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
