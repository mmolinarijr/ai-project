'use client'; 

import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Erro!</h2>
      <button
        onClick={
          () => reset()
        }>
        Tente novamente
      </button>
    </div>
  );
}

export default Error;
