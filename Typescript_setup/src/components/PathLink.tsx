const PathLink = ({ text }: { text: string }) => {
  return (
    <p className="px-9 flex items-center space-x-0 text-pink-300 text-xl font-medium hover:text-red-600 hover:opacity-100 underline md:mb-6 mb-2 font-lato">
      <span>{text}</span>
    </p>
  );
};

export default PathLink;
