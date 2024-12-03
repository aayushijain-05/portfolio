interface CardTextProps {
  className?: string;
  // array: any[];
  text: string;
  description: string;
}

const CardText = ({ className, text, description }: CardTextProps) => {
  return (
    <div
      className={`w-full rounded-md flex flex-col border-2 border-red-900 ${className} md:h-80 items-center justify-center`}
    >
      <p className="text-sm font-semibold text-center font-droid">{text}</p>
      <p className="font-droid text-sm text-center px-4">{description}</p>
    </div>
  );
};

export default CardText;
