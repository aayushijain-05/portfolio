import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
// import HomePage from "./portfolio/HomePage";
import Illustrations from "./portfolio/Illustrations";
import Project1 from "./portfolio/Project1";
import Graphics from "./portfolio/Graphics";
import Contact from "./portfolio/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/illustrations",
    element: <Illustrations />,
  },
  {
    path: "/project1",
    element: <Project1 />,
  },
  {
    path: "/graphics",
    element: <Graphics />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
