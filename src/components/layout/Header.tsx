import Image from 'next/image';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full  p-4'>
      <span className="text-semi-bold">
        <Image src="/logo.webp" alt="Logo" width={150} height={150} />
      </span>
    </header>
  );
};

export default Header;
