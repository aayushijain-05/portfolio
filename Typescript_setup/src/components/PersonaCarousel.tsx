import { useState } from "react";

import { PersonaCard } from "./PersonaCard";

interface Persona {
  name: string;
  age: number;
  profession: string;
  image: string;
  dailyActivity: string[];
  goals: string[];
  painPoints: string[];
}

interface PersonaCarouselProps {
  personas: Persona[];
  className: string;
}

export const PersonaCarousel = ({ personas, className }: PersonaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % personas.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + personas.length) % personas.length);
  };

  return (
    <div className={`relative border-4  mt-6 rounded-md ${className || "border-orange-200"}`}>
      <PersonaCard {...personas[currentIndex]} className="bg-purple-100" />
      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 p-4">
        {personas.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button className="text-orange-200 p-2 text-5xl" onClick={prevSlide}>
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 sm:hidden">
        <button className="text-orange-200 p-2 text-5xl" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};
