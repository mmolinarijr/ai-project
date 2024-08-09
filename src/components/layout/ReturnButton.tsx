'use client';

import { useRouter } from 'next/navigation';

const ReturnButton = () => {
  const router = useRouter();

  const handleReturn = () => {
    router.back();
  };

  return (
    <div className="dark:bg-gray-800">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        onClick={handleReturn}>
        Retornar
      </button>
    </div>
  );
};

export default ReturnButton;