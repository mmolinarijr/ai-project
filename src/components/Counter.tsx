'use client';

import React, { useState } from 'react';
import ReturnButton from '@/components/layout/ReturnButton';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const decrementButtonStyle = count === 0 ? "bg-red-500 opacity-50 cursor-not-allowed hover:bg-red-500" : "bg-red-500 hover:bg-red-700";

  return (
    <div className="flex flex-col items-center">
      <ReturnButton />
      
      <p className="text-2xl font-bold mb-4">Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </button>
      <button
        className={`mt-4 ${decrementButtonStyle} text-white font-bold py-2 px-4 rounded`}
        onClick={decrementCount}
        disabled={count === 0}
      >
        Decrementar
      </button>
    </div>
  );
};

export default Counter;
