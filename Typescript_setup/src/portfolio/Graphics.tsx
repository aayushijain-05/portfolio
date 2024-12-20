import Footer from "../components/Footer";
import gif5 from "../assets/gif5.gif";
import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from "../assets/gif4.gif";
import gif6 from "../assets/gif6.gif";
import gallery3 from "../assets/gallery3.png";
import Carousel from "../components/Carousel";
import OtherProjects from "./OtherProjects";
import { Navbar } from "@/components/Navbar";
import Scroll from "../components/Scroll";
import { motion } from "framer-motion";
const Graphics = () => {
  const imgArray = [gif1, gif2, gif3, gif4, gif5];
  const gifArray = [
    { image: gif5, link: "#" },
    { image: gallery3, link: "#" },
    { image: gif6, link: "#" },
  ];
  const carouselImages = [gif1, gif3];
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-40">
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-600 pt-10 uppercase font-changa">
          motion graphics
        </h1>
        <p className="text-xs mt-5 font-droid">
          Creativity is forever work in progress. These are animations of my 2d illustrations frame by frame in gif
          format.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-5 w-full">
          {imgArray &&
            imgArray.map((img) => {
              return (
                <motion.img
                  src={img}
                  alt=""
                  className="h-72 cursor-pointer md:h-96 w-full object-cover rounded-md mt-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              );
            })}
          <div className="mt-12">
            <Carousel images={carouselImages} />
          </div>
        </div>
        <OtherProjects array={gifArray} />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
      <Scroll />
    </div>
  );
};

export default Graphics;
