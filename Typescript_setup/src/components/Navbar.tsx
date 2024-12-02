import { useState } from "react";
import imgSrc from "../assets/img.png";
import { NavItem } from "./NavItem";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-8 m-2">
      <img src={imgSrc} className="h-14 hover:opacity-70" />

      <div
        className="lg:hidden flex items-center cursor-pointer absolute top-4 right-4 z-50"
        onClick={toggleMenu}
      >
        <Menu/>
      </div>

      <ul className="hidden lg:flex flex-row justify-end space-x-12 mr-14 font-bold">
        <NavItem href="#">Projects</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="#">Say Hi !</NavItem>
      </ul>

      <div
        className={`fixed top-0 right-0 bg-white/10 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        } lg:hidden w-1/4 z-40`}
        
      >
        <ul className="mt-4 flex flex-col items-center justify-start m-2 h-full space-y-8 font-bold">
          <div className="hover:bg-gray-200  hover:px-4">
          <NavItem href="#">Projects</NavItem>
          
          </div>
          <div className="hover:bg-gray-200  hover:px-4">
          <NavItem href="#">About</NavItem>
          
          </div>
          <div className="hover:bg-gray-200  hover:px-4">
          <NavItem href="#">Say Hi !</NavItem>
          </div>

        
          
          
        </ul>
      </div>
    </div>
  );
};
