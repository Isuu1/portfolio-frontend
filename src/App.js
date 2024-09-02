import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Projects, {
  loader as projectsLoader,
} from "./Pages/Projects/Projects";
import ScrollToAnchor from "./Components/ScrollToAnchor";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProjectDetail, {
  loader as projectDetailLoader,
} from "./Components/ProjectDetail/ProjectDetail";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { useRef } from "react";
import Error from "./Components/Error/Error";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const projectsRef = useRef(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route exact path="/" errorElement={<Error />} />
        <Route
          loader={projectsLoader}
          index
          element={
            <>
              <ScrollToAnchor />
              <Header projectsRef={projectsRef} />
              <Home />
              <Projects projectsRef={projectsRef} />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path=":id"
          errorElement={<Error />}
          loader={projectDetailLoader}
          element={<ProjectDetail />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
