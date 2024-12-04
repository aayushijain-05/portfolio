import user2 from "../assets/user2.png";
import user4 from "../assets/user4.png";

export const UserJourney = ({ user }: { user: any }) => {


  return (
    <div className="relative text-sm leading-loose border-4 border-orange-200 rounded-md p-6 max-w-5xl mx-auto mb-6 ">
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex flex-col">
          <img src={user?.image} alt={user?.name} className="rounded-lg max-w-xs h-auto object-cover" />
          <div className="mt-4">
            <p className="text-lg font-bold mb-4 text-left">{user?.name || "Sara Lewis"}</p>
            <p className="text-sm">
              Age: {user?.age || 30} years old </p><p  className="text-sm">Profession: {user?.profession || "School Bus Driver"}
            </p>
            <p className="italic text-xs mt-2 hover:text-sm hover:cursor-pointer">
              Credit to: {user?.credit || "Lucas Sankey"}
            </p>
          </div>
        </div>

        <div className="md:w-2/3 md:pl-6">
          <div className="mt-4">
            <strong>SCENARIO:</strong>
            <p>
              {user?.scenario ||
                "Sara works the morning shifts at 7 am. In the morning, Sara likes to pre-order her coffee and a drink for her co-worker on the app and goes for a pleasant walk over to the coffee shop before she heads over for her shift. On her way home after her work, she likes to pick up another drink for her walk home."}
            </p>
          </div>

          <div className="mt-4">
            <strong>EXPECTATIONS:</strong>
            <ul className="list-disc pl-5">
              {user?.expectations && Array.isArray(user?.expectations) ? (
                user?.expectations.map((item: string, index: number) => <li key={index}>{item}</li>)
              ) : (
                <p>No expectations available.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        {
          user.name=="Sara Lewis"?
        
        <img src={user2} alt="user illustration" className="w-full h-auto object-cover rounded-md" />:<img src={user4} alt="user illustration" className="w-full h-auto object-cover rounded-md" />}
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 md:ml-20">
          <strong>OPPORTUNITY:</strong>
          <ul className="list-disc pl-5">
            {user?.opportunity && Array.isArray(user?.opportunity) ? (
              user?.opportunity.map((item: string, index: number) => <li key={index}>{item}</li>)
            ) : (
              <p>No opportunity available.</p>
            )}
          </ul>
        </div>

        <div className="flex-1">
          <strong>INTERNAL OWNERSHIP:</strong>
          <ul className="list-disc pl-5">
            {user?.internalOwnership && Array.isArray(user?.internalOwnership) ? (
              user?.internalOwnership.map((item: string, index: number) => <li key={index}>{item}</li>)
            ) : (
              <p>No internal ownership available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
