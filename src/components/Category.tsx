import Image from "next/image";
export default function Category({ name, image }:{
    name : string,
    image:string
}) {
  return (
    <div className="flex flex-col items-center p-4 transform hover:scale-105 transition-transform bg-white rounded-2xl">
      <Image src={image} alt={name} width={20} height={30}
      className="min-w-32 min-h-32 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{name}</h3>
    </div>
  );
}