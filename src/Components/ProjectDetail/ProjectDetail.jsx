import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { getProject } from "../../api";
import ReactMarkdown from "react-markdown";

//Back button icon
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

//Animations
import {
  singleProjectContentAppear,
  slideInBottom,
  slideInLeft,
} from "../../Styles/animations";

//Data loader
export function loader({ params }) {
  return getProject(params.id);
}

const ProjectDetail = () => {
  //useNavigate is used by 'Go back' button to know last location on the website
  const navigate = useNavigate();

  const project = useLoaderData();

  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <>
          <motion.div
            className="project-detail-container"
            key="projectDetail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 1,
              top: -1400,
              transition: { duration: 0.7, delay: 0.7 },
            }}
          >
            <motion.div
              className="project-detail-container__image"
              variants={slideInLeft}
              whileInView="visible"
              initial="hidden"
              exit="exit"
            >
              <img
                src={`${project?.data?.attributes.image2.data.attributes.url}`}
                className="project-detail-container__image__thumbnail"
                alt=""
              />
            </motion.div>
            {isVisible && (
              <motion.div
                className="project-detail-container__data"
                variants={singleProjectContentAppear}
                whileInView="visible"
                initial="hidden"
                exit="exit"
              >
                <motion.div variants={slideInBottom}>
                  <KeyboardBackspaceIcon
                    sx={{ fontSize: "50px" }}
                    className="project-detail-container__data__back-button"
                    onClick={() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        navigate(-1);
                      }, 600); // 600 before
                    }}
                  />
                </motion.div>
                <motion.h1
                  className="project-detail-container__data__title"
                  variants={slideInBottom}
                >
                  {project?.data?.attributes.title}
                </motion.h1>
                <motion.div
                  className="project-detail-container__data__tags"
                  variants={slideInBottom}
                >
                  {project?.data?.attributes?.tags}
                </motion.div>
                <motion.div
                  className="project-detail-container__data__desc"
                  variants={slideInBottom}
                >
                  <ReactMarkdown
                    children={project?.data?.attributes.desc}
                  />
                </motion.div>
                <motion.button
                  className="projects-container__tile__overlay__button--purple"
                  variants={slideInBottom}
                >
                  <a href={project?.data?.attributes?.liveUrl}>
                    Live site
                  </a>
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetail;
