'use client';

import { useFormField, useFormValidation } from '@/lib/hooks';
import { useState } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ErrorListProps {
  errors: string[];
}

const UserFormRefactored: React.FC = () => {
  const nameField = useFormField('');
  const emailField = useFormField('');
  const passwordField = useFormField('');
  const confirmPasswordField = useFormField('');
  const { errors, validateFields } = useFormValidation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateFields([
      { name: 'Nome', value: nameField.value },
      { name: 'Email', value: emailField.value },
      { name: 'Senha', value: passwordField.value },
      { name: 'Confirmar Senha', value: confirmPasswordField.value },
    ]);

    if (isValid) {
      console.log({
        name: nameField.value,
        email: emailField.value,
        password: passwordField.value,
      });
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col justify-center text-green-500">
          <p>Formulário enviado com sucesso!</p>
          <button
            onClick={() => window.history.back()}
            className="mt-2 px-2 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Voltar
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto p-5 my-3 bg-white dark:bg-gray-800 dark:text-black shadow-sm border rounded-md">
          <InputField
            label="Nome"
            type="text"
            {...nameField}
          />
          <InputField
            label="Email"
            type="email"
            {...emailField}
          />
          <InputField
            label="Senha"
            type="password"
            {...passwordField}
          />
          <InputField
            label="Confirmar Senha"
            type="password"
            {...confirmPasswordField}
          />
          {errors.length > 0 && <ErrorList errors={errors} />}
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Cadastrar
          </button>
        </form>
      )}
    </>
  );
};

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 dark:text-white font-semibold mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => (
  <ul className="mt-2 text-red-500">
    {errors.map((error, index) => (
      <li
        key={index}
        className="text-sm">
        {error}
      </li>
    ))}
  </ul>
);

export default UserFormRefactored;
