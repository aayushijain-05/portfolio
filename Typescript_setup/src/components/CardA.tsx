import { motion } from "framer-motion";

interface CardAProps {
  image: string;
  className?: string;
}

const CardA = ({ image, className }: CardAProps) => {
  return (
    <motion.div
      className={`h-44 ${className} relative overflow-hidden`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img src={image} className="h-full w-full rounded-md object-cover" alt="Gallery Item" />
    </motion.div>
  );
};

export default CardA;
