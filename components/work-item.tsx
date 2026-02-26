import React from 'react';

interface WorkItemProps {
  company: string;
  role: string;
  date: string;
  url?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ company, role, date, url }) => {
  return (
    <div className="py-2 -mx-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200">
      <div className="flex-grow">
        <div className="flex justify-between items-baseline">
          {url ? (
            <a 
              href={url}
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:opacity-75 flex items-center group"
            >
              <span className="border-b border-gray-300 dark:border-gray-600 pb-0.5 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors">
                {company}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ) : (
            <span className="font-medium">{company}</span>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{role}</div>
      </div>
    </div>
  );
};

export default WorkItem;