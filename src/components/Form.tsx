'use client';

import { useState, FormEvent } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValues, setSubmittedValues] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedValues([...submittedValues, inputValue]);
    setInputValue('');
  };

  const handleReset = () => {
    setInputValue('');
  };

  const handleClear = () => {
    setSubmittedValues([]);
  };

  const isSubmitDisabled = inputValue.trim() === '';
  const isResetDisabled = inputValue.trim() === '';
  const isClearDisabled = submittedValues.length === 0;

  return (
    <div className="max-w-lg mx-auto p-4 w-80 bg-white dark:bg-gray-900 rounded-lg border shadow-sm">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}>
        <label
          htmlFor="input"
          className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
          Digite seu Texto
        </label>
        <input
          type="text"
          id="input"
          value={inputValue}
          className="mb-4 w-full p-2 border rounded bg-white border-gray-300 text-black dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          onChange={(event) => setInputValue(event.target.value)}
        />

        <div className="flex flex-row justify-between w-full">
          <button
            className={`bg-gray-500 hover:bg-gray-600 dark:bg-gray-400 text-white px-4 py-2 mx-1 rounded-md ${
              isResetDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            type="button"
            disabled={isResetDisabled}
            onClick={handleReset}>
            Reset
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 text-white px-4 py-2 mx-1 rounded-md ${
              isSubmitDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600 dark:hover:bg-blue-500'
            }`}
            type="submit"
            disabled={isSubmitDisabled}>
            Enviar
          </button>
        </div>
      </form>

      {submittedValues.length > 0 && (
        <div className="mt-6">
          <h2 className="flex justify-center mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Valores Enviados
          </h2>

          <table className="min-w-full mt-4 border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-2 border-b border-gray-300 dark:border-gray-600 text-left text-gray-700 dark:text-gray-300">
                  #
                </th>
                <th className="p-2 border-b border-gray-300 dark:border-gray-600 text-left text-gray-700 dark:text-gray-300">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              {submittedValues.map((value, index) => (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800">
                  <td className="p-2 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                    {index + 1}
                  </td>
                  <td className="p-2 border-b border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center">
            <button
              className={`mt-4 bg-red-500 hover:bg-red-600 dark:bg-red-400 text-white px-4 py-2 rounded-md ${
                isClearDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-red-600 dark:hover:bg-red-500'
              }`}
              type="button"
              disabled={isClearDisabled}
              onClick={handleClear}>
              Limpar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
