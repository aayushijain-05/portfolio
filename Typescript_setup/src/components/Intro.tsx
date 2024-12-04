import imgHand from "../assets/hand.gif";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
export const Intro = () => {
  return (
    <div className="">
      <div className="text-base items-center pr-28 flex flex-col-reverse p-6 lg:flex-row space-x-8 lg:p-12 lg:items-center mt-6 lg:text-xl">
        <motion.img
          src={imgHand}
          alt="image"
          className="h-36 ml-48 opacity-80"
          animate={{ x: 50, y: 10, transition: { duration: 1 } }}
        />

        <div className="opacity-80">
          <motion.div
            className="text-purple-950 mb-22 font-black font-changa ml-12"
            animate={{ y: 10, transition: { duration: 1 } }}
          >
            HELLO!
          </motion.div>

          <motion.div className="mt-2" animate={{ x: 50, transition: { duration: 1 } }}>
            I AM ENKHMAA.
          </motion.div>

          <motion.div
            className="text-purple-950 font-black font-changa ml-24"
            animate={{ x: -50, transition: { duration: 1 } }}
          >
            INTERACTION DESIGNER
          </motion.div>

          <motion.div className="font-droid" animate={{ x: 50, transition: { duration: 1 } }}>
            INSPIRED BY FUNCTIONAL DESIGNS THAT
          </motion.div>

          <motion.div
            className="text-pink-900 font-black font-changa ml-24"
            animate={{ x: -50, transition: { duration: 1 } }}
          >
            HIGHLIGHT HUMAN EXPERIENCE.
          </motion.div>
        </div>
      </div>
      <div className="underline decoration-1 flex flex-row space-x-60  font-semibold justify-center mt-16">
        <Link
          to="#"
          className="flex items-center font-lato space-x-0 text-red-600 text-xl opacity-45 hover:text-red-600 hover:opacity-100"
        >
          <span>View Case Studies</span>
          <ArrowDown />
        </Link>
        <Link
          to="#"
          className="flex items-center font-lato space-x-0 text-red-600 text-xl opacity-45 hover:text-red-600 hover:opacity-100"
        >
          <span>View Gallery</span>
          <ArrowDown />
        </Link>{" "}
      </div>
    </div>
  );
};
