import Articles from '@/components/Articles';
import articles from '@/db/articles.json';

const ArticlesMenu = async () => {
  return <Articles articles={articles} />;
};

export default ArticlesMenu;
