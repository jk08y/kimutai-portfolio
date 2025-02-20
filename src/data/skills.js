/**
 * Skills data organized by categories
 */
const skills = [
    { 
      category: 'Programming Languages', 
      skills: [
        { name: 'Python', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'PHP', level: 80, color: 'bg-purple-500' },
        { name: 'SQL', level: 85, color: 'bg-green-600' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' }
      ]
    },
    { 
      category: 'Frameworks & Libraries', 
      skills: [
        { name: 'React', level: 85, color: 'bg-teal-500' },
        { name: 'Django', level: 90, color: 'bg-green-500' },
        { name: 'Next.js', level: 80, color: 'bg-gray-800' },
        { name: 'Flask', level: 85, color: 'bg-gray-600' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' }
      ]
    },
    { 
      category: 'Tools & Technologies', 
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'RESTful APIs', level: 90, color: 'bg-indigo-600' },
        { name: 'GraphQL', level: 75, color: 'bg-pink-600' },
        { name: 'Linux/Unix', level: 85, color: 'bg-gray-700' },
      ]
    },
    { 
      category: 'Cloud & Deployment', 
      skills: [
        { name: 'AWS', level: 80, color: 'bg-yellow-600' },
        { name: 'Google Cloud', level: 75, color: 'bg-blue-700' },
        { name: 'Firebase', level: 80, color: 'bg-yellow-700' },
        { name: 'Vercel', level: 90, color: 'bg-black' },
        { name: 'Netlify', level: 85, color: 'bg-teal-700' }
      ]
    }
  ];
  
  // Helper functions
  export const getAllSkills = () => {
    return skills.flatMap(category => category.skills);
  };
  
  export const getTopSkills = (limit = 10) => {
    return getAllSkills()
      .sort((a, b) => b.level - a.level)
      .slice(0, limit);
  };
  
  export const getSkillsByCategory = (categoryName) => {
    const category = skills.find(cat => cat.category === categoryName);
    return category ? category.skills : [];
  };
  
  export default skills;