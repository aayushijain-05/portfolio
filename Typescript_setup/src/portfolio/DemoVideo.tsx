import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface DemoVideoProps {
  name: string;
  img: string;
}

const DemoVideo = ({ name, img }: DemoVideoProps) => {
  return (
    <div className="mt-20">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600 font-changa">
        {name} demo video
      </p>
      <div className="grid grid-colspan-1 gap-10 md:grid-cols-2 items-center justify-center mt-20 font-droid">
        <p className="text-sm border-l-4 border-red-800 p-2 cursor-pointer text-gray-800">
          To see the figma prototype,{" "}
          <Link to="#" className="text-red-500">
            click here
          </Link>
        </p>
        <motion.img
          src={img}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5, ease: "linear" },
          }}
          whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
        />
      </div>
    </div>
  );
};
export default DemoVideo;
