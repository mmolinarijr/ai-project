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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-wrap justify-center gap-4'>
        {pages.map((page) => (
          <Link
            key={page.id}
            href={page.path}>
            {page.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
