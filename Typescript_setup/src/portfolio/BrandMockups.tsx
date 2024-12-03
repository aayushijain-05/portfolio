import CardA from "../components/CardA";
interface MockupProps {
  array: any[];
  className?:string;
  height?:string;
}
const BrandMockups = ({ array,className,height }: MockupProps) => {
  return (
    <div className="mt-20">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600">
        Brand mockups
      </p>
      <div className="grid grid-cols-2 gap-4 mt-20 md:grid-cols-3">
        {array &&
          array.map((img) => {
            return <CardA image={img} className={`${height || 'md:h-72'}  h-56 ${className}`} />;
          })}
      </div>
    </div>
  );
};
export default BrandMockups;
