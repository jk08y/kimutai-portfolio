import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';
import projects, { getProjectCategories } from '../../data/projects';
import Modal from '../common/Modal';

/**
 * Projects section with filtering and modal details
 */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const categories = getProjectCategories();
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Showcasing my work across different technologies
            </p>
          </motion.div>
          
          {/* Filters - Scrollable on mobile */}
          <div className="flex overflow-x-auto hide-scrollbar pb-3 justify-start md:justify-center">
            <div className="flex space-x-2 px-1">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm transition-colors ${
                    activeFilter === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                layout
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
              >
                {/* Image with overlay */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={project.image || `/projects/placeholder.png`}
                    alt={`${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCAzNjAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM3NTc1NzUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiPiR7cHJvamVjdC50aXRsZX08L3RleHQ+PC9zdmc+`;
                    }}
                  />
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3">
                      <div className="flex space-x-2">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                            aria-label={`GitHub: ${project.title}`}
                          >
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                            aria-label={`Live demo: ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
                    {project.description}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                      >
                        <Code className="w-2.5 h-2.5 mr-1" />
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Details button */}
                  <button 
                    onClick={() => openModal(project)}
                    className="w-full py-1.5 px-3 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors text-sm flex items-center justify-center"
                  >
                    <Layers className="mr-1.5 w-3.5 h-3.5" />
                    Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
            <Layers className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-1">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No projects in the "{activeFilter}" category yet
            </p>
          </div>
        )}
      </div>
      
      {/* Project details modal */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title={selectedProject?.title}
        size="lg"
      >
        {selectedProject && (
          <div>
            {/* Project image */}
            <div className="rounded-lg overflow-hidden mb-5 h-48 sm:h-64">
              <img 
                src={selectedProject.image || `/projects/placeholder.png`}
                alt={`${selectedProject.title}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzMDAiIHZpZXdCb3g9IjAgMCA2MDAgMzAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2NjY2NjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIzNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiPiR7c2VsZWN0ZWRQcm9qZWN0LnRpdGxlfTwvdGV4dD48L3N2Zz4=`;
                }}
              />
            </div>
            
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-5">
              {selectedProject.description}
            </p>
            
            {/* Features */}
            <div className="mb-5">
              <h3 className="text-lg font-medium mb-2">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                  >
                    <Code className="w-3.5 h-3.5 mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              {selectedProject.githubLink && (
                <a 
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 bg-gray-900 hover:bg-black text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              )}
              {selectedProject.liveLink && (
                <a 
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects; 
