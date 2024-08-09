import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  description: string;
  imagePath: string;
  path: string;
}

const Card: React.FC<CardProps> = ({ name, description, imagePath, path }) => {
  return (
    <div className="max-w-sm max-h-96 rounded-lg font-sans overflow-hidden shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 m-2">
      <Image
        className="w-full object-cover"
        width={500}
        height={500}
        src={imagePath}
        alt={name}
      />

      <div className="px-4 sm:px-6 py-4">
        <h4 className="font-bold text-lg sm:text-xl mb-2">{name}</h4>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
      </div>

      <div className="px-4 sm:px-6 py-4">
        <Link
          href={path}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Acessar
        </Link>
      </div>
    </div>
  );
};

export default Card;
