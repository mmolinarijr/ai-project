'use client';

import { sortedMenuList } from '@/lib/menuList';
import Card from '@/components/layout/Card';

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full">
      {sortedMenuList.map((page) => (
        <Card
          key={page.id}
          name={page.name}
          description={page.description}
          imagePath={page.imagePath}
          path={page.path}
        />
      ))}
    </div>
  );
}
