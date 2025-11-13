import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import projectsData from './projects.json';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on search
  const filteredProjects = useMemo(() => {
    if (!searchQuery) return projectsData;
    
    const query = searchQuery.toLowerCase();
    return projectsData.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query)) ||
      project.owners.some(owner => owner.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-dark-bg bg-noise">
      {/* Header/Hero Section */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Projects Section */}
      <main className="relative">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Active Initiatives</h2>
                <p className="text-white/60">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} 
                  {searchQuery && ' matching your search'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Cards - Full Width Layout */}
          {filteredProjects.length > 0 ? (
            <div className="space-y-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"
            >
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-white mb-3">No projects found</h3>
              <p className="text-white/60 text-lg">Try adjusting your search criteria</p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="text-center">
            <p className="text-white/40 text-sm mb-2">
              © 2025 Joveo — Global Supply & Partnerships | New Initiatives Team
            </p>
            <p className="text-white/30 text-xs">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
