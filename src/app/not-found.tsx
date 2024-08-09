'use client';

import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold mb-4'>404</h1>
            <p className='text-xl mb-4'>Página não encontrada!</p>
            <button
                onClick={() => router.back()}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>
                Voltar
            </button>
        </div>
    );
};

export default NotFound;
