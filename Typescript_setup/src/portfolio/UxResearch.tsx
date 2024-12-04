import { UserJourneyCard } from "../components/UserJourneyCard";
import { PersonaCarousel } from "../components/PersonaCarousel";

interface UxResearchProps {
  personas: any[];
  user: any;
  className: string;
}

export const UxResearch = ({ personas, user, className }: UxResearchProps) => {
  return (
    <div className="mt-20">
      <h1 className="text-xl font-extrabold md:pt-20 md:text-3xl text-gray-600 text-center font-changa">UX RESEARCH</h1>
      <hr className="border-t-1 border-black my-8" />
      <p
        className={`uppercase font-semibold text-xl mt-16 border-l-4 ${
          className || "border-orange-200"
        } p-4 mb-10 text-gray-800 font-droid`}
      >
        Personas
      </p>
      <PersonaCarousel personas={personas} className="border-red-900" />
      <p
        className={`uppercase font-semibold text-xl mt-16 border-l-4 ${
          className || "border-orange-200"
        } p-4 mb-10 text-gray-800 font-droid`}
      >
        User Journey
      </p>
      <UserJourneyCard user={user} />
    </div>
  );
};
