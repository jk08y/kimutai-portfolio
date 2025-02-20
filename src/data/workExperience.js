/**
 * Work experience data
 * Contains professional history information
 */
const workExperience = [
    {
      company: '254Cloud',
      location: 'Nairobi, Kenya',
      website: 'https://254cloud.com',
      roles: [
        {
          title: 'Software Developer',
          period: 'Jan 2024 - Present',
          type: 'Full-time',
          responsibilities: [
            'Engineered scalable software solutions enhancing product functionality',
            'Orchestrated cross-functional collaborations to streamline development workflows',
            'Optimized application performance through strategic code refactoring',
            'Implemented CI/CD pipelines to automate deployment processes',
            'Developed microservices architecture for improved system scalability'
          ],
          technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
        },
        {
          title: 'Technical Support Specialist',
          period: 'Jan 2022 - Apr 2024',
          type: 'Full-time',
          responsibilities: [
            'Diagnosed and resolved complex web hosting infrastructure challenges',
            'Implemented proactive support strategies improving customer resolution rates',
            'Streamlined technical troubleshooting processes for enhanced efficiency',
            'Maintained 99.9% uptime for client hosting environments',
            'Collaborated with development team to resolve critical production issues'
          ],
          technologies: ['Linux', 'Apache', 'MySQL', 'PHP', 'cPanel', 'CloudLinux']
        }
      ]
    },
    {
      company: 'Proxify',
      location: 'Remote (US-based)',
      website: 'https://proxify.io',
      roles: [
        {
          title: 'Software Engineer',
          type: 'Remote Contract',
          period: 'Aug 2022 - Oct 2023',
          responsibilities: [
            'Architected cross-platform applications with modular, scalable design',
            'Executed high-priority projects consistently meeting aggressive deadlines',
            'Facilitated global team collaboration through agile methodologies',
            'Developed secure authentication systems with multi-factor capabilities',
            'Implemented complex data visualization features for analytics dashboard'
          ],
          technologies: ['React', 'TypeScript', 'GraphQL', 'Next.js', 'PostgreSQL']
        }
      ]
    },
    {
      company: 'Hubstaff',
      location: 'Remote (US-based)',
      website: 'https://hubstaff.com',
      roles: [
        {
          title: 'Software Engineer',
          type: 'Contract Remote',
          period: 'Aug 2022 - Oct 2023',
          responsibilities: [
            'Developed innovative software solutions driving operational efficiency',
            'Implemented cutting-edge technologies to enhance product capabilities',
            'Contributed to architectural design of complex web and mobile platforms',
            'Maintained and optimized large-scale distributed systems',
            'Collaborated on time-tracking features with focus on UX and reliability'
          ],
          technologies: ['Ruby on Rails', 'React', 'Redis', 'Elasticsearch', 'AWS']
        }
      ]
    },
    {
      company: 'Unilever',
      location: 'Kenya',
      website: 'https://unilever.com',
      roles: [
        {
          title: 'Internship',
          type: 'On-site',
          period: 'Sep 2021 - Oct 2022',
          responsibilities: [
            'Supported enterprise software development lifecycle',
            'Conducted comprehensive code reviews ensuring high-quality standards',
            'Actively participated in software engineering best practices implementation',
            'Assisted in the migration of legacy systems to modern architecture',
            'Contributed to internal tool development for process automation'
          ],
          technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Jenkins', 'Git']
        }
      ]
    }
  ];
  
  // Helper functions
  export const getTotalExperienceYears = () => {
    const startDate = new Date('2021-09-01'); // First job start date
    const currentDate = new Date();
    const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthDiff = currentDate.getMonth() - startDate.getMonth();
    
    return parseFloat((yearDiff + monthDiff / 12).toFixed(1));
  };
  
  export const getCurrentPosition = () => {
    // Find the most recent role
    let current = null;
    let latestDate = new Date(0);
    
    workExperience.forEach(exp => {
      exp.roles.forEach(role => {
        if (role.period.includes('Present')) {
          const startDate = new Date(role.period.split(' - ')[0]);
          if (startDate > latestDate) {
            latestDate = startDate;
            current = {
              role: role.title,
              company: exp.company
            };
          }
        }
      });
    });
    
    return current;
  };
  
  export default workExperience;