interface InputProps {
  type: string;
  name: string;
}

export const Input = ({ type, name }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      className="rounded-md h-10 w-48 focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-gray-300 text-sm $ backdrop-blur-md "
    />
  );
};
