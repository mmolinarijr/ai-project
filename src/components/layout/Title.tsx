interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h2 className="flex justify-center text-2xl font-bold mb-2">{title}</h2>;
};

export default Title;
