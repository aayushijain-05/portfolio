import { useState, useEffect } from "react";
const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 bg-purple-200/60 text-white rounded-md py-2 px-4 shadow-md hover:bg-purple-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Scroll;
