/**
 * Certifications and credentials data
 */
const certifications = [
    {
      id: 1,
      title: 'Google IT Support',
      issuer: 'Google',
      date: 'Feb 2023',
      credentialId: 'D7RXKJ7UE4K2',
      verificationLink: 'https://coursera.org/share/b2223505867d4ee4aa293afd4f4553bb',
      image: '/certifications/google-it-support.webp',
      skills: ['Data Analytics', 'Technical Support', 'Problem Solving', 'Network Protocols', 'Teamwork'],
      description: 'Comprehensive training in technical support fundamentals, computer networking, operating systems, system administration, and security.',
      featured: true
    },
    {
      id: 2,
      title: 'IT Security: Defense against the digital dark arts',
      issuer: 'Google',
      date: 'Feb 2023',
      credentialId: 'CZUH5NVRW6G7',
      verificationLink: 'https://coursera.org/share/11a04a09fd37cc8a56ffd52abc8fbccc',
      image: '/certifications/it-security.webp',
      skills: ['Technical Support', 'Network Security', 'Troubleshooting', 'Cybersecurity', 'Risk Assessment'],
      description: 'Advanced training in cybersecurity principles, authentication systems, network security, encryption techniques, and security best practices.',
      featured: true
    },
    {
      id: 3,
      title: 'Operating Systems and You: Becoming a Power User',
      issuer: 'Google',
      date: 'Feb 2023',
      credentialId: 'DN6GB27CEPD9',
      verificationLink: 'https://coursera.org/share/059d3e1780f1736d8644af614d738b86',
      image: '/certifications/os-power-user.webp',
      skills: ['Powershell', 'Technical Support', 'Command-Line Interface', 'Linux', 'Windows Administration'],
      description: 'Comprehensive training in operating system management, command line interfaces, file systems, and power user techniques for both Windows and Linux.',
      featured: false
    }
  ];
  
  // Helper functions
  export const getFeaturedCertifications = () => {
    return certifications.filter(cert => cert.featured);
  };
  
  export const getCertificationById = (id) => {
    return certifications.find(cert => cert.id === parseInt(id));
  };
  
  export const getCertificationsByIssuer = (issuer) => {
    return certifications.filter(cert => cert.issuer === issuer);
  };
  
  export default certifications;