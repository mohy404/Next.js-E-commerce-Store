import Link from 'next/link';
import React, { ReactNode } from 'react'; 

// Define an interface for the component props
interface HeaderProps {
  title: string;
  actions?: ReactNode; // Use ReactNode for props that expect React components or elements
}

const Header = ({ title, actions }: HeaderProps) => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-xl font-bold text-gray-800 hover:text-gray-600">Home</a>
        </Link>
        {actions} 
      </div>
      <h1 className="text-xl">{title}</h1>
    </header>
  );
};

export default Header;
