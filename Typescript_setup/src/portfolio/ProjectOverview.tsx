import CardText from "../components/CardText";
import Analysis from "../components/Analysis";
const ProjectOverview = ({ overviewArray, taskArray, competitiveAnalysisData }: any) => {
  return (
    <div className="mt-24">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600 mb-16 font-changa">
        Project Overview
      </p>
      {taskArray &&
        taskArray.map(({ text, description }: any) => (
          <CardText text={text} description={description} className="h-32 md:h-24 mt-5" />
        ))}
      <Analysis data={competitiveAnalysisData} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {overviewArray &&
          overviewArray.map(({ text, description }: any) => (
            <CardText text={text} description={description} className="h-32 mt-5 md:h-48" />
          ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
