import Image from "next/image";

interface FeatureBoxProps {
  title: string;
  description: string;
  image: string;
}

function FeatureBox({ title, description, image }: FeatureBoxProps) {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col h-[500px] text-black">
      <Image src={image} alt={title} width={40} height={40} />
      <h1 className="p-3">{title}</h1>
      <p className="p-3">{description}</p>
      <button className="bg-[#db833f] text-white p-3">Try Now</button>
    </div>
  );
}

export default FeatureBox;
