import React from 'react';

interface WorkItemProps {
  company: string;
  role: string;
  date: string;
  url?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ company, role, date, url }) => {
  return (
    <div className="py-2">
      <div className="flex-grow">
        <div className="flex justify-between items-baseline">
          {url ? (
            <a 
              href={url}
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:underline hover:opacity-75"
            >
              {company}
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