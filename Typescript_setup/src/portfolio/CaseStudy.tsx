import PathLink from "../components/PathLink";
import { Link } from "react-router-dom";

interface CaseStudyProps {
  name: string;
  name2?: string;
  description: string;
  array: any[];
  img: string;
}
const CaseStudy = ({ name, name2, description, array, img }: CaseStudyProps) => {
  return (
    <div>
      <div className="px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:gap-5">
          <div className="grid grid-cols-1 md:w-96 md:justify-between">
            <h1 className="text-3xl font-extrabold md:pt-28 md:text-5xl text-gray-600 font-changa">
              {name} <br />
              <span className="text-gray-600 font-changa">{name2}</span>
            </h1>
            <p className="font-droid text-xs leading-5 mt-5">{description}</p>
          </div>

          <img src={img} className="mt-16 rounded-md" />
        </div>
        <p className="uppercase font-semibold text-xl mt-16 border-l-4 border-red-800 p-6 text-gray-700 font-droid">
          table of Content
        </p>
        {array &&
          array.map(({ text, link }) => {
            return (
              <Link to={link}>
                <PathLink text={text} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CaseStudy;
