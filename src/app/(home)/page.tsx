import Link from 'next/link';

export default function Home() {
  const pages = [
    { id: 1, name: 'Artigos', path: '/articles' },
    { id: 2, name: 'Usuários', path: '/users' },
    { id: 3, name: 'Formulário', path: '/form' },
    { id: 4, name: 'Contador', path: '/counter' },
    { id: 5, name: 'Itens', path: '/items' },
  ];

  return (
    <main className='flex max-h-screen flex-col items-center bg-white text-black dark:bg-black dark:text-white justify-between w-full'>
      <div className='flex flex-wrap justify-center gap-2 pt-10 mt-16'>
        {pages.map((page) => (
          <Link
            key={page.id}
            className='p-4 text-2xl font-semibol hover:underline hover:text-blue-500'
            href={page.path}>
            {page.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
