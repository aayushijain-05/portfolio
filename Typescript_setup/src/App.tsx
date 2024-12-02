import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Illustrations from "./portfolio/Illustrations";
import Project1 from "./portfolio/Project1";
import Graphics from "./portfolio/Graphics";
import Contact from "./portfolio/Contact";
import Project3 from "./portfolio/Project3";
import { Project2 } from "./portfolio/Project2";
import {About} from "./portfolio/About";

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
  {
    path: "/project2",
    element: <Project2 />,
  },
  {

    path: "/about",
    element: <About />,
 
    path: "/project3",
    element: <Project3 />,
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
