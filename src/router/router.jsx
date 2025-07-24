import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ProjectDesc from "../components/ProjectDesc";
import Layout from "../pages/Layout";
import AllProjects from "../components/AllProjects";
import ErrorElement from "../pages/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/project/:projID",
        element: <ProjectDesc />,
      },
      {
        path: "/all-projects",
        element: <AllProjects />,
      },
    ],
  },
]);

export default router;
