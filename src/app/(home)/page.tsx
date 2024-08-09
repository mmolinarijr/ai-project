import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-wrap justify-center gap-4'>
        <Link href='/articles'>Artigos</Link>
        <Link href='/users'>Usuários</Link>
      </div>
    </main>
  );
}
