import { useState } from 'react';

export const useFormField = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
};

export const useFormValidation = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const validateFields = (fields: { name: string; value: string }[]) => {
    const newErrors: string[] = [];

    fields.forEach(({ name, value }) => {
      if (!value) newErrors.push(`${name} é obrigatório.`);
    });

    const password = fields.find((f) => f.name === 'Password')?.value;
    const confirmPassword = fields.find((f) => f.name === 'Confirm Password')?.value;

    if (password !== confirmPassword) {
      newErrors.push('Senhas nao conferem.');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  return { errors, validateFields };
};
