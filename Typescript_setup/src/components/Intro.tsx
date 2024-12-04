import imgHand from "../assets/hand.gif";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";


export const Intro = () => {
  return (
    <div className="">
      <div className="text-base items-center pr-28 flex flex-col-reverse p-6 lg:flex-row lg:space-x-8 ml-28 lg:ml-64 lg:p-12 lg:items-center mt-6 lg:text-xl">
        <img src={imgHand} alt="image" className="h-20 mt-4 md:h-36 opacity-80 animate-slide-from-top" />
        <div className="opacity-80 text-center lg:text-justify">
          <strong className="text-purple-950 animate-slide-from-top font-black font-changa">HELLO!</strong>
          <div className="animate-slide-from-left font-droid">I AM ENKHMAA.</div>
          <strong className="text-purple-950 animate-slide-from-right font-black font-changa">
            INTERACTION DESIGNER
          </strong>
          <div className="animate-slide-from-left font-droid">INSPIRED BY FUNCTIONAL DESIGNS THAT</div>
          <strong className="text-pink-900 animate-slide-from-right font-black font-changa">
            HIGHLIGHT HUMAN EXPERIENCE.
          </strong>
        </div>
      </div>
      <div className="underline decoration-1 flex flex-row space-x-60  font-semibold justify-center mt-16">
        <Link
          to="#"
          className="flex items-center font-lato space-x-0 text-red-600 text-sm md:text-xl opacity-45 hover:text-red-600 hover:opacity-100"
        >
          <span>View Case Studies</span>
          <ArrowDown />
        </Link>
        <Link
          to="#"
          className="flex items-center font-lato space-x-0 text-red-600 text-sm md:text-xl opacity-45 hover:text-red-600 hover:opacity-100"
        >
          <span>View Gallery</span>
          <ArrowDown />
        </Link>{" "}
      </div>
    </div>
  );
};
