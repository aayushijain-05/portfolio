import { UserJourneyCard } from "../components/UserJourneyCard";
import { PersonaCarousel } from "../components/PersonaCarousel";

interface UxResearchProps {
  personas: any[];
  user: any;
}

export const UxResearch = ({ personas, user }: UxResearchProps) => {
  return (
    <div className="mt-20">
      <h1 className="text-xl font-extrabold md:pt-20 md:text-3xl text-gray-600 text-center">UX RESEARCH</h1>
      <hr className="border-t-1 border-black my-8" />
      <p className="uppercase font-semibold text-xl mt-16 border-l-4 border-orange-200 p-6 text-gray-800">Personas</p>
      <PersonaCarousel personas={personas} />
      <p className="uppercase font-semibold text-xl mt-16 border-l-4 border-orange-200 p-6 text-gray-800">
        User Journey
      </p>
      <UserJourneyCard user={user} />
    </div>
  );
};
