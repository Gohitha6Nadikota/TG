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
    <div className="w-[100%] flex justify-center items-center flex-col h-[500px] text-black p-3">
      <Image src={image} alt={title} width={70} height={70} />
      <h1 className="p-2">{title}</h1>
      <p className="p-2">{description}</p>
    </div>
  );
};

export default CapabilityBox;
