import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { AnimatePresence, motion } from "framer-motion";
import DelayLink from "./DelayLink";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(true);

  const exitAnimation = {
    opacity: 0,
    transition: { duration: 0.5 },
  };

  let keyy = "projectDetail";

  const hideProjectDetail = () => {
    setIsVisible(false);
    keyy = null;
  };
  return (
    <div>
      <DelayLink to="/" delay={1000}>
        <button
          style={{ zIndex: "99", position: "absolute" }}
          onClick={hideProjectDetail}
        >
          dsadasdasdas
        </button>
      </DelayLink>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={keyy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={exitAnimation}
          >
            <ProjectDetail />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
