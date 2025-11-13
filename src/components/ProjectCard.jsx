import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, Calendar, User } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  // Get initials from owner names
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      {/* Accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-accent to-secondary-accent rounded-l-2xl"></div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-accent/0 via-primary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Main card */}
      <div className="relative bg-white/5 backdrop-blur-md border border-glass-border hover:border-primary-accent/30 rounded-2xl p-8 transition-all duration-300">
        <div className="flex items-start justify-between gap-8">
          {/* Left: Content */}
          <div className="flex-1 space-y-6">
            {/* Title & Description */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-primary-accent/10 text-primary-accent border border-primary-accent/20 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta info */}
            <div className="flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated {new Date(project.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{project.owners.length} {project.owners.length === 1 ? 'Owner' : 'Owners'}</span>
              </div>
            </div>
          </div>

          {/* Right: Owners & Actions */}
          <div className="flex flex-col items-end gap-6">
            {/* Owner avatars */}
            <div className="flex items-center -space-x-3">
              {project.owners.map((owner, index) => (
                <div
                  key={owner}
                  title={owner}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center text-white font-bold text-sm border-4 border-dark-bg shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer"
                  style={{ zIndex: project.owners.length - index }}
                >
                  {getInitials(owner)}
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 w-48">
              {/* Open Sheet button */}
              {project.sheetUrl && (
                <a
                  href={project.sheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-accent to-secondary-accent hover:from-primary-accent/90 hover:to-secondary-accent/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-accent/20 hover:shadow-primary-accent/40 hover:scale-105"
                >
                  <span>Open Sheet</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}

              {/* Details button */}
              <button
                onClick={onClick}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-accent/50 text-white/90 font-semibold rounded-xl transition-all"
              >
                <span>Details</span>
                <Info className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
