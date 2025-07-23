import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ProjectDesc from "../components/ProjectDesc";
import Layout from "../pages/Layout";
import AllProjects from "../components/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
