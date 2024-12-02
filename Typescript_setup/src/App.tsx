import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
// import HomePage from "./portfolio/HomePage";
import Illustrations from "./portfolio/Illustrations";
import Project1 from "./portfolio/Project1";
import Graphics from "./portfolio/Graphics";
import Contact from "./portfolio/Contact";
import { Project2 } from "./portfolio/Project2";

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
]);



export default function App() {
  return <RouterProvider router={router} />;
}
