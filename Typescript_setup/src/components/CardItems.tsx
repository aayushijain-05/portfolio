import React from "react";
import { motion } from "framer-motion";

interface CardItemsProps {
  type: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export const CardItems = ({ type: Type, title, subtitle, description, image }: CardItemsProps) => {
  return (
    <div className="lg:mx-40 lg:pt-20 m-4">
      <div className="relative group hover:bg-black/50 hover:backdrop-blur-xs">
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration:1}}

          
          className="w-full h-2/4 overflow-hidden relative"
        >
          <Type image={image} />
        </motion.div>
        <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 group-hover:backdrop-blur-xs transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-orange-100/50 backdrop-blur-xs text-black text-center p-4">
          <div>
            <h1 className="text-2xl font-semibold mb-4 font-concert">{title}</h1>
            <p className="text-sm font-droid">
              <span>
                {subtitle}
                <br />
              </span>
              <span>{description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
