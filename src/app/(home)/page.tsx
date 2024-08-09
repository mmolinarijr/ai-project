import { menuList } from '@/lib/menuList';
import Card from '@/components/layout/Card';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center bg-white text-black dark:bg-black dark:text-white justify-between w-full'>
      <div className="flex flex-wrap justify-center gap-5 pt-10 mt-5 w-full">
        {menuList.map((page) => (
          <Card
            key={page.id}
            name={page.name}
            description={page.description}
            imagePath={page.imagePath}
            path={page.path}
          />
        ))}
      </div>
    </main>

  );
}
