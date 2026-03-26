import React from 'react';
import PortfolioHeader from '@/components/portfolio-header';
import Section from '@/components/portfolio-section';
import WorkItem from '@/components/work-item';

export default function Home() {
  // Configure your personal information here
  const personalInfo = {
    name: "Donald Chu",
    education: "studying cs @ columbia",
    profileImage: "/profile-placeholder.jpg", // Add your image to the public folder
    socials: {
      email: "donaldvchu@gmail.com",
      linkedin: "https://www.linkedin.com/in/donald-chu-036527263/",
      github: "https://github.com/Donald646",
      twitter: "https://twitter.com/donaldvchu",
    }
  };

  // Work experience data
  const workExperience = [
    {
      company: "Phia",
      role: "Forward Deployed Engineering Intern",
      date: "2025 - Present",
      url: "https://phia.com",
    },
    {
      company: "Oclete",
      role: "Founder",
      date: "2024 - Present",
      url: "https://oclete.com",
    },
    {
      company: "Revision Dojo",
      role: "Full Stack Software Engineer",
      date: "2024",
      url: "https://revisiondojo.com",
    },
    {
      company: "ELSA",
      role: "AI Research Engineer Intern",
      date: "Jul 2024",
      url: "https://elsaspeak.com",
    },
    {
      company: "University of Houston-Victoria",
      role: "Research Assistant | Professor Tomitaka",
      date: "May 2023 - Aug 2023",
      url: "https://uhv.edu/",
    }
  ];

  // Publications data
  const publicationsData = [
    {
      title: "Machine learning-based prediction model for magnetic hyperthermia",
      journal: "IEEE Transactions on Magnetics",
      authors: "Chu, Donald; Tomitaka, Asahi.",
      link: "https://ieeexplore.ieee.org/document/10843262",
      date: "2023", // Extracted year, adjust if full date is available
    }
  ];
  
  // Free Time data
  const freeTimeData = [
    {
      name: "LLM Playground",
      description: "AI experiments — chat, word games, and prediction markets",
      url: "https://github.com/Donald646/llmplayground",
    },
  ];

  // Honors & Awards data
  const honorsData = [
    {
      award: "Computer Science Youth of America Hackathon",
      details: "2nd place in Advanced Track",
      year: "Jul 2023",
    },
    {
      award: "Vex Robotics Competition",
      details: "2nd in State, Worlds Qualifier",
      year: "May 2022",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6">
      {/* Header with Profile */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}>
        <PortfolioHeader 
          name={personalInfo.name}
          education={personalInfo.education}
          profileImage={personalInfo.profileImage}
          socials={personalInfo.socials}
        />
      </div>
      
      {/* About Paragraphs */}
      <div className="space-y-4 my-8 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <p className="text-gray-700 dark:text-gray-300">
          claude code enthusiast, interested in the application layer of AI.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I lift weights, play basketball, and travel.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Reach out at <a href={`mailto:${personalInfo.socials.email}`} className="underline hover:opacity-75">{personalInfo.socials.email}</a>.
        </p>
      </div>

      {/* Work Section */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <Section title="Work">
          <div className="space-y-1">
            {workExperience.map((work, index) => (
              <WorkItem
                key={index}
                company={work.company}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Section>
      </div>

      {/* Publications Section */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <Section title="Publications">
          <div className="space-y-3">
            {publicationsData.map((pub, index) => (
               <div key={index} className="py-2 -mx-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 flex items-center group">
                        <span className="border-b border-gray-300 dark:border-gray-600 pb-0.5 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors">
                          {pub.title}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">{pub.date}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{pub.authors}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 italic mt-0.5">{pub.journal}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Honors & Awards Section */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <Section title="Honors & Awards">
          <div className="space-y-3">
            {honorsData.map((honor, index) => (
              <div key={index} className="flex justify-between py-2 items-baseline -mx-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <div>
                  <p className="font-medium">{honor.award}</p>
                  {honor.details && <p className="text-sm text-gray-600 dark:text-gray-400">{honor.details}</p>}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">{honor.year}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Free Time Section */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
        <Section title="Free Time">
          <div className="space-y-1">
            {freeTimeData.map((project, index) => (
              <div key={index} className="py-2 -mx-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200">
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:opacity-75 flex items-center group"
                      >
                        <span className="border-b border-gray-300 dark:border-gray-600 pb-0.5 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors">
                          {project.name}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    ) : (
                      <span className="font-medium">{project.name}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
