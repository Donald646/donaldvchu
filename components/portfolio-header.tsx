import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  name: string;
  title: string;
  profileImage?: string; 
  socials: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    other?: string;
  };
}

const PortfolioHeader: React.FC<HeaderProps> = ({ 
  name, 
  title,
  socials 
}) => {
  return (
    <header className="flex flex-col items-center py-8">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image 
          src={"/pfp.png"} 
          alt={name}
          width={128} 
          height={128}
          className="fit"
          priority
        />
      </div>

      {/* Name & Title */}
      <h1 className="text-3xl font-semibold mt-2 mb-1">{name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{title}</p>

      {/* Social Links */}
      <div className="flex space-x-4">
        {socials.email && (
          <a 
            href={`mailto:${socials.email}`} 
            aria-label="Email" 
            className="text-gray-700 dark:text-gray-300 hover:opacity-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        )}
        {socials.linkedin && (
          <Link 
            href={socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="text-gray-700 dark:text-gray-300 hover:opacity-75"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </Link>
        )}
        {socials.twitter && (
          <Link 
            href={socials.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter" 
            className="text-gray-700 dark:text-gray-300 hover:opacity-75"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </Link>
        )}
        {socials.github && (
          <Link 
            href={socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className="text-gray-700 dark:text-gray-300 hover:opacity-75"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </Link>
        )}
        {socials.other && (
          <Link 
            href={socials.other} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Other" 
            className="text-gray-700 dark:text-gray-300 hover:opacity-75"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </Link>
        )}
      </div>
    </header>
  );
};

export default PortfolioHeader; 