const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mmolinariLink = 'https://github.com/mmolinarijr/';

  return (
    <footer className='fixed bottom-0 left-0 text-center w-full'>
      <p>
        All rights reserved &copy; {currentYear}{' '}
        <a
          className='hover:underline hover:text-blue-500'
          target="_blank"
          href={mmolinariLink}>
          mmolinari
        </a>
      </p>
    </footer>
  );
};

export default Footer;
