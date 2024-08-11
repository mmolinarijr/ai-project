'use client';

import React, { useState } from 'react';
import Title from './layout/Title';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const decrementButtonStyle =
    count === 0 ? 'bg-red-500 opacity-50 cursor-not-allowed hover:bg-red-500' : 'bg-red-500 hover:bg-red-700';

  return (
    <div className="flex flex-col items-center">
      <Title title="Contador" />
      <p className="text-2xl bg-slate-400 dark:bg-gray-800 text-white px-20 py-10 rounded-md font-bold mb-4 transition duration-300 ease-in-out">
        {count}
      </p>

      <div className="flex flex-row-reverse gap-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}>
          Incrementar
        </button>
        <button
          className={`${decrementButtonStyle} text-white font-bold py-2 px-4 rounded`}
          onClick={decrementCount}
          disabled={count === 0}>
          Decrementar
        </button>
      </div>

      <button
        className="bg-gray-500 my-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
