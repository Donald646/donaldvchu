import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  if (!title) {
    return <div className="mb-8">{children}</div>;
  }
  
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
        {title}
      </h2>
      <div className="mt-3">
        {children}
      </div>
    </section>
  );
};

export default Section; 