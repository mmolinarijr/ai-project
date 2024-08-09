import Image from 'next/image';
import ThemeToggleButton from './ThemeToggleButton';
import Link from 'next/link';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full p-5 mb-10 flex justify-evenly border-b dark:border-slate-700'>
      <Image src="/logo.webp" alt="Logo" width={150} height={150} />

      <div className="flex gap-5 items-center font-semibold">
        <Link
          className="hover:underline hover:text-blue-600 dark:text-white"
          href="/"
        >
          <div className="flex gap-1 items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </div>
        </Link>

        <NavMenu />

        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
