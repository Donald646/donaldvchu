import React from 'react';
import PortfolioHeader from '@/components/portfolio-header';
import Section from '@/components/portfolio-section';
import WorkItem from '@/components/work-item';

export default function Home() {
  // Configure your personal information here
  const personalInfo = {
    name: "Donald Chu",
    title: "Student, Developer, & Researcher",
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
      company: "Study Snail",
      role: "Founder, Developer, Marketer",
      date: "Jul 2024 - Present",
      url: "https:studysnail.com", // Replace with actual URL for Study Snail
    },
    {
      company: "Revision Dojo",
      role: "Full Stack Software Engineer",
      date: "2024",
      url: "https:revisiondojo.com", // Replace with actual URL for Revision Dojo
    },
    {
      company: "ELSA",
      role: "AI Research Engineer Intern",
      date: "Jul 2024",
      url: "https:elsaspeak.com", // Replace with actual URL for ELSA
    },
    {
      company: "University of Houston-Victoria",
      role: "Research Assistant | Professor Tomitaka",
      date: "May 2023 - Aug 2023",
      url: "https://uhv.edu/", // Replace with actual URL for UHV
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
      <PortfolioHeader 
        name={personalInfo.name}
        title={personalInfo.title}
        profileImage={personalInfo.profileImage}
        socials={personalInfo.socials}
      />
      
      {/* About Paragraphs */}
      <div className="space-y-4 my-8">
        <p className="text-gray-700 dark:text-gray-300">
          Currently building Study Snail, an AI-powered study tool with over 20,000 users, and building ticket software.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I lift weights, play basketball, and travel.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          reach out at <a href={`mailto:${personalInfo.socials.email}`} className="underline hover:opacity-75">{personalInfo.socials.email}</a>.
        </p>
      </div>

      {/* Work Section */}
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

      {/* Publications Section */}
      <Section title="Publications">
        <div className="space-y-3">
          {publicationsData.map((pub, index) => (
             <div key={index} className="py-2">
              <div className="flex-grow">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {pub.title}
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

      {/* Honors & Awards Section */}
      <Section title="Honors & Awards">
        <div className="space-y-3">
          {honorsData.map((honor, index) => (
            <div key={index} className="flex justify-between py-2 items-baseline">
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
  );
}
