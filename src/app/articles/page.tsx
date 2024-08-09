import Image from 'next/image';

const articles = [
  {
    title: 'Artigo 1',
    coverImage: '/path/to/cover-image-1.jpg',
  },
  {
    title: 'Artigo 2',
    coverImage: '/path/to/cover-image-2.jpg',
  },
];

const Articles = () => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <Image src={article.coverImage} alt={article.title} width={500} height={300} />
        </div>
      ))}
    </div>
  );
};

export default Articles;
