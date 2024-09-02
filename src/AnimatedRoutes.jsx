import React, { useEffect, useRef, useState } from "react";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToAnchor from "./Components/ScrollToAnchor";
import Header from "./Components/Header/Header";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Error from "./Components/Error/Error";
import ProjectDetail, {
  loader as projectDetailLoader,
} from "./Components/ProjectDetail/ProjectDetail";
import Projects, { loader as projectsLoader } from "./Pages/Projects/Projects";
import NotFound from "./Components/NotFound/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  const pathname = location.pathname;

  console.log(location);

  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      <Outlet />
      {/* <Route
        path="/"
        loader={projectsLoader}
        element={
          <>
            <ScrollToAnchor />
            <Header projectsRef={projectsRef} aboutRef={aboutRef} />
            <Home />
            <Projects projectsRef={projectsRef} />
            <About aboutRef={aboutRef} />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/:id"
        errorElement={<Error />}
        loader={projectDetailLoader}
        element={<ProjectDetail />}
      />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} /> */}
    </>
  );
};

export default AnimatedRoutes;
