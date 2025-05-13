import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="flex gap-8">
        <a href="#work" className="text-gray-800 dark:text-gray-200 hover:opacity-70">Work</a>
        <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:opacity-70">Projects</a>
      </div>
    </nav>
  );
};

export default NavBar; 