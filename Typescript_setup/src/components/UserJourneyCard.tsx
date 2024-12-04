import { UserJourney } from "./UserJourney";
interface UserJourneyCardsProps {
  user: {
    name: string;
    age: number;
    profession: string;
    image: string;
    imageCreditLink: string;
    credit: string;
    scenario: string;
    expectations: string[];
    opportunity: string[];
    internalOwnership: string[];
  }[];
}

export const UserJourneyCard = ({ user }: UserJourneyCardsProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {user.map((user, index) => (
        <UserJourney key={index} user={user} className="border-red-900" />
      ))}
    </div>
  );
};
