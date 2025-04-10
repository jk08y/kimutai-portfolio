/**
 * Projects data
 */
const projects = [
  {
    id: 1,
    title: 'Mermaid Editor Pro',
    description: 'Modern, browser-based editor for creating diagrams using Mermaid syntax',
    technologies: ['React', 'TypeScript', 'Monaco Editor', 'Mermaid.js', 'TailwindCSS', 'Vite'],
    category: 'Web Development',
    githubLink: 'https://github.com/jk08y/mermaid-editor',
    liveLink: 'https://cs5.pro',
    image: '/projects/mermaid-editor.png',
    details: [
      'Live diagram preview',
      'Multiple diagram types support',
      'Auto-save functionality',
      'Export to SVG/PNG',
      'Dark & Light themes',
      'Template gallery'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Secure File Sharing App',
    description: 'Lightweight, secure file-sharing platform with advanced features',
    technologies: ['PHP', 'JavaScript', 'SQL', 'JSON'],
    category: 'Web Development',
    githubLink: 'https://github.com/jk08y/secure-share',
    liveLink: null,
    image: '/projects/secure-share.png',
    details: [
      'Drag-and-drop file upload functionality',
      'Configurable file expiration system',
      'Robust security protocols',
      'User-friendly interface'
    ],
    featured: true
  },
  {
    id: 3,
    title: 'Video Chat App',
    description: 'WebRTC-powered app for seamless video communication',
    technologies: ['React', 'WebRTC', 'Socket.IO', 'WebSockets', 'Node.js'],
    category: 'Web Development',
    githubLink: 'https://github.com/jk08y/',
    liveLink: null,
    image: '/projects/video-chat.png',
    details: [
      'Peer-to-peer video calling',
      'Real-time communication',
      'Responsive interface',
      'Complex state management'
    ],
    featured: true
  },
  {
    id: 4,
    title: 'X API Automation',
    description: 'Flask app for tweet scheduling and automation',
    technologies: ['Python', 'Flask', 'API Integration'],
    category: 'Web Development',
    githubLink: 'https://github.com/jk08y/x-api',
    liveLink: null,
    image: '/projects/twitter-api.png',
    details: [
      'Instant tweet posting',
      'Tweet scheduling',
      'API integration',
      'Error handling'
    ],
    featured: false
  },
  {
    id: 5,
    title: 'Job Board App',
    description: 'Modern job listing platform with Next.js 14',
    technologies: ['Next.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL'],
    category: 'Web Development',
    githubLink: 'https://github.com/jk08y/',
    liveLink: null,
    image: '/projects/job-board.png',
    details: [
      'Responsive job listings',
      'Modern architecture',
      'TypeScript integration',
      'Interactive job search'
    ],
    featured: true
  },
  {
    id: 6,
    title: 'CLI Productivity Toolkit',
    description: 'Terminal toolkit to enhance productivity',
    technologies: ['Zsh', 'Bash', 'Shell', 'Python', 'Tmux'],
    category: 'Development Tools',
    githubLink: 'https://github.com/jk08y/mybash',
    liveLink: null,
    image: '/projects/cli-toolkit.png',
    details: [
      'Custom Zsh configurations',
      'Utility scripts',
      'Improved workflow',
      'Cross-platform support'
    ],
    featured: false
  },
  {
    id: 7,
    title: 'Django Video Conferencing',
    description: 'Video app using Django and ZegoCloud',
    technologies: ['Django', 'Python', 'WebRTC', 'PostgreSQL', 'React'],
    category: 'Web Development',
    githubLink: 'https://github.com/jk08y/',
    liveLink: null,
    image: '/projects/django-video.png',
    details: [
      'ZegoCloud integration',
      'Django backend',
      'Secure video calling',
      'Responsive UI'
    ],
    featured: true
  }
];

// Helper functions
export const getProjectCategories = () => {
  return ['All', ...new Set(projects.map(p => p.category))];
};

export const getFilteredProjects = (category) => {
  return category === 'All' 
    ? projects 
    : projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export default projects;
