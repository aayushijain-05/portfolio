const Footer = () => {
  return (
    <div className="bg-footer w-full h-96">
      <div className="flex items-center flex-col md:flex-row md:justify-center gap-5 font-inconsolate">
        <p className="text-purple-200 text-xs mt-20 md:mt-24 cursor-pointer hover:text-blue-500">LINKEDIN</p>
        <p className="text-purple-200 text-xs md:mt-24 cursor-pointer hover:text-blue-500">EMAIL</p>
        <p className="text-purple-200 text-xs md:mt-24 cursor-pointer hover:text-blue-500">INSTAGRAM</p>
      </div>
      <div className="h-0.5 m-6 min-w-max bg-purple-200"></div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-purple-200 text-sm font-inconsolate">@ ESMERALDA STUDIOS 2019</p>
      </div>
    </div>
  );
};

export default Footer;
