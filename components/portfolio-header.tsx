import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  name: string;
  education?: string;
  profileImage?: string; 
  socials: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    other?: string;
  };
}

const SocialLink = ({ href, label, isEmail }: { href: string; label: string, isEmail?: boolean }) => (
  <a 
    href={isEmail ? `mailto:${href}` : href}
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center text-gray-700 dark:text-gray-300 hover:opacity-75 group"
  >
    <span className="border-b border-gray-300 dark:border-gray-600 pb-0.5 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors">
      {label}
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  </a>
);

const PortfolioHeader: React.FC<HeaderProps> = ({ 
  name, 
  education,
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
      
      {education && (
        <p className="text-md text-gray-500 dark:text-gray-500 mb-6">{education}</p>
      )}

      {/* Social Links */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {socials.email && <SocialLink href={socials.email} label="Email" isEmail />}
        {socials.linkedin && <SocialLink href={socials.linkedin} label="LinkedIn" />}
        {socials.github && <SocialLink href={socials.github} label="Github" />}
        {socials.twitter && <SocialLink href={socials.twitter} label="X" />}
        {socials.other && <SocialLink href={socials.other} label="Website" />}
      </div>
    </header>
  );
};

export default PortfolioHeader; 
