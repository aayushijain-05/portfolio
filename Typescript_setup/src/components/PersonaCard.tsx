interface PersonaCardProps {
  name: string;
  age: number;
  profession: string;
  dailyActivity: string[];
  goals: string[];
  painPoints: string[];
  image: string;
  className: string;
}

export const PersonaCard = ({
  name,
  age,
  profession,
  dailyActivity,
  goals,
  painPoints,
  image,
  className,
}: PersonaCardProps) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:gap-8 p-8 bg-white rounded-lg max-w-4xl mx-auto mt-6 font-droid">
      <div
        className={`col-span-1 flex flex-col items-center mb-6 md:mb-0  ${className || "bg-orange-200"} rounded-md p-2`}
      >
        <img src={image} alt={name} className="w-40 rounded-md mb-6 object-cover shadow-md h-2/3" />
        <div className="h-1/3">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{name}</h2>
          <p className="text-lg text-gray-600">{profession}</p>
          <p className="text-sm text-gray-500">{age} years old</p>
        </div>
      </div>

      <div className="col-span-2 flex flex-col space-y-8 md:ml-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Daily Activity</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {dailyActivity.map((activity, index) => (
              <li key={index} className="text-sm">
                {activity}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Goals</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {goals.map((goal, index) => (
              <li key={index} className="text-sm">
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Pain Points</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {painPoints.map((painPoint, index) => (
              <li key={index} className="text-sm">
                {painPoint}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
