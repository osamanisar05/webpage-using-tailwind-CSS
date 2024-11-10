import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-20">
      <nav className="container mx-auto flex justify-between">
        <div className="text-3xl font-bold">Multi Page Website Using React Components</div>
        <div className="space-x-4">
          <Link className= "text-2xl font-bold hover:text-gray-300" to="/">Home</Link>
          <Link className="text-2xl font-bold hover:text-gray-300" to="/about">About</Link>
          <Link className=" text-2xl font-bold hover:text-gray-300" to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;