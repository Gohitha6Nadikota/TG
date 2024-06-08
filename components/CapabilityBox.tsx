import Image from "next/image";

interface CapabilityBoxProps {
  title: string;
  description: string;
  image: string;
}

const CapabilityBox: React.FC<CapabilityBoxProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col space-y-2 m-5 border border-black h-[380px]  ">
      <Image src={image} alt={title} width={40} height={40} />
      <h1 className="p-2">{title}</h1>
      <p className="p-2">{description}</p>
    </div>
  );
};

export default CapabilityBox;
