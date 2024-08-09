'use client';

import { useState, FormEvent } from 'react';
import ReturnButton from './layout/ReturnButton';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    setSubmittedValue(inputValue);
  };

  const handleReset = () => {
    setInputValue('');
    setSubmittedValue(null);
  };

  const isSubmitDisabled = inputValue.trim() === '';
  const isResetDisabled = inputValue.trim() === '';

  return (
    <div>
      <ReturnButton />

      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <label htmlFor="input">Digite seu Texto</label>
        <input
          type="text"
          id='input'
          value={inputValue}
          className={`mb-4 p-2 border rounded bg-white border-gray-300 text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white`}
          onChange={(event) => setInputValue(event.target.value)}
        />

        <div className="flex flex-row">
          <button
            className={`bg-gray-500 hover:bg-gray-600 dark:bg-gray-400 text-white px-4 py-2 mx-1 rounded-md ${isResetDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-600 dark:hover:bg-gray-500'}`}
            type="button"
            disabled={isResetDisabled}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 text-white px-4 py-2 mx-1 rounded-md ${isSubmitDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600 dark:hover:bg-blue-500'}`}
            type="submit"
            disabled={isSubmitDisabled}
          >
            Enviar
          </button>
        </div>
      </form>
      {submittedValue && <p>{submittedValue}</p>}
    </div>
  );
};

export default Form;
