'use client';

import Image from 'next/image';
import Link from 'next/link';
import Title from './layout/Title';

interface Article {
  id: number;
  url: string;
  title: string;
  imageUrl: string;
  summary: string;
}

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <>
      <Title title="Artigos" />

      <div className="flex justify-center w-full flex-wrap gap-4">
        {articles.map((article: Article) => (
          <div
            key={article.id}
            className="border rounded-lg shadow-sm dark:bg-gray-800 w-full sm:w-5/12 md:w-3/12 p-3 transition duration-300 ease-in-out">
            <div className="w-full mb-2">
              <Image
                src={article.imageUrl}
                alt={article.title}
                className="object-cover w-full rounded-lg"
                width={300}
                height={150}
              />
            </div>
            <h2 className="text-base font-semibold mb-1">{article.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-500 line-clamp-3">{article.summary}</p>{' '}
            <Link
              href={article.url}
              className="block mt-2 text-blue-500 hover:underline text-sm">
              Leia mais...
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
