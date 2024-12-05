import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import user2 from "../assets/user2.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";
import user7 from "../assets/user7.png";
import user8 from "../assets/user8.png";
import user9 from "../assets/user9.png";

export const SlickCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots: any) => (
      <div className="p-2 rounded-full bg-transparent">
        <ul className="m-0">{dots}</ul>
      </div>
    ),
  };

  return (
    <div>
      <img
        src={user2}
        className="w-full h-auto object-cover rounded-md cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        alt="User"
      />

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl z-60"
            aria-label="Close"
          >
            X
          </button>

          <div className="w-full h-full max-w-3xl bg-black/20 rounded-md">
            <Slider {...settings}>
              <div>
                <img src={user2} className="w-full h-auto object-cover rounded-md" alt="User 2" />
              </div>
              <div>
                <img src={user5} className="w-full h-auto object-cover rounded-md" alt="User 5" />
              </div>
              <div>
                <img src={user6} className="w-full h-auto object-cover rounded-md" alt="User 6" />
              </div>
              <div>
                <img src={user7} className="w-full h-auto object-cover rounded-md" alt="User 7" />
              </div>
              <div>
                <img src={user8} className="w-full h-auto object-cover rounded-md" alt="User 8" />
              </div>
              <div>
                <img src={user9} className="w-full h-auto object-cover rounded-md" alt="User 9" />
              </div>
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};
