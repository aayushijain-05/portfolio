interface AboutCompProps{
  title: string;
  description: string;
}

export const AboutComp = ({title,description}:AboutCompProps) => {
  return (
    <div>
    <p className="text-pink-900 text-center text-2xl">{title}</p>
    <p className="text-center text-sm leading-loose text-gray-500">{description}</p>
</div>
  )
}
