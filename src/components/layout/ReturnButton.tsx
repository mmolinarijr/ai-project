'use client';

import { useRouter } from 'next/navigation';

const ReturnButton = () => {
  const router = useRouter();

  const handleReturn = () => {
    router.back();
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
      onClick={handleReturn}>
      Retornar
    </button>
  );
};

export default ReturnButton;