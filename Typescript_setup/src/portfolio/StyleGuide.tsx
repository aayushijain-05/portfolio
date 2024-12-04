import CardA from "../components/CardA";
interface GuideProps {
  array: { image: string; bgColor: string }[];
    className?:string;
  }

export const StyleGuide = ({array,className}:GuideProps) => {
  return (
    <div className="mt-20">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600">
        Style Guide
      </p>
      <p className={`uppercase font-semibold text-xl mt-16 border-l-4 border-orange-200  p-6 text-gray-800 ${className}`}>logos & font family</p>
      <div className={`grid grid-cols-2 gap-4 mt-20 md:grid-cols-3`}>
        {array &&
          array.map((img) => {
            return <CardA image={img.image} className={`h-56 md:h-72 border-2 border-orange-200 rounded-md  bg-pink-900 ${img.bgColor}  ${className}`} />;
          })}
      </div>
    </div>
  );
};
