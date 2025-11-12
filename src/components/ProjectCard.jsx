import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Eye } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Paused':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Completed':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Upcoming':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full border border-gray-100"
    >
      {/* Header with Status */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-joveo-text font-poppins flex-1 leading-tight">
          {project.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)} ml-2 whitespace-nowrap`}>
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-joveo-blue/10 text-joveo-blue rounded-md text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Owners */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
        <User className="h-4 w-4 text-gray-400" />
        <div className="flex -space-x-2">
          {project.owners.map((owner, index) => (
            <div
              key={index}
              className="h-8 w-8 rounded-full bg-joveo-orange text-white flex items-center justify-center text-xs font-semibold border-2 border-white"
              title={owner}
            >
              {getInitials(owner)}
            </div>
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-2">
          {project.owners.join(', ')}
        </span>
      </div>

      {/* Footer with Date and Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Calendar className="h-3 w-3" />
          <span>Updated: {new Date(project.lastUpdated).toLocaleDateString()}</span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={onClick}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-joveo-blue hover:bg-joveo-blue hover:text-white rounded-lg transition-colors border border-joveo-blue"
          >
            <Eye className="h-3.5 w-3.5" />
            Details
          </button>
          {project.links && project.links.length > 0 && (
            <a
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-joveo-blue text-white hover:bg-joveo-blue/90 rounded-lg transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Docs
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
