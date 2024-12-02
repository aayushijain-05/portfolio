export const UserJourney = ({ user }: { user: any }) => {
  console.log(user);

  return (
    <div className="relative border-4 border-orange-200 rounded-md p-6 max-w-5xl mx-auto mb-6">
      <div className="flex flex-col md:flex-row">
        
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 flex flex-col items-center">
          <img
            src={user?.image}
            alt={user?.name || "Default Name"}
            className="persona-image rounded-lg max-w-[250px] h-auto object-cover"
          />
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold">{user?.name}</p>
            <p className="text-lg">{user?.age} years old | {user?.profession}</p>
            <a href={user?.imageCreditLink} target="_blank" className="italic text-sm text-blue-600 mt-2">
              Credit: {user?.credit}
            </a>
          </div>
        </div>

      
        <div className="md:w-2/3 md:pl-6">
          <div className="mt-4">
            <strong>SCENARIO:</strong>
            <p>{user?.scenario}</p>
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

          <div className="mt-4 flex flex-col md:flex-row md:space-x-6">
           
            <div className="flex-1">
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
      </div>
    </div>
  );
};
