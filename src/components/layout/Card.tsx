import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  name: string;
  description: string;
  imagePath: string;
  path: string;
}

const Card: React.FC<CardProps> = ({ name, description, imagePath, path }) => {
  return (
    <div className="max-w-sm flex flex-row rounded-xl h-56 font-sans overflow-hidden border shadow-sm w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 m-2">
      <div className="w-1/2 h-full">
        <Image
          className=" object-cover object-center w-full h-full"
          src={imagePath}
          width={500}
          height={200}
          alt={name}
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between">
        <div className="px-4 sm:px-6 py-4">
          <h4 className="font-bold text-lg sm:text-xl mb-2">{name}</h4>
          <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>

        <div className="px-4 sm:px-6 py-4">
          <Link
            href={path}
            className="bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Acessar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
