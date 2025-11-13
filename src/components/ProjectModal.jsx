import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, User, Tag } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-dark-bg/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Gradient background effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-accent/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-accent/10 blur-3xl rounded-full"></div>

          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="sticky top-0 bg-dark-bg/80 backdrop-blur-xl border-b border-white/10 p-8 flex items-start justify-between z-10">
              <div className="flex-1 pr-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-primary-accent to-secondary-accent rounded-full"></div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Updated {new Date(project.lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 space-y-8 max-h-[calc(90vh-140px)] overflow-y-auto">
              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                  Overview
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-primary-accent/10 text-primary-accent border border-primary-accent/20 rounded-xl text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Team Members ({project.owners.length})
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.owners.map((owner) => (
                    <div
                      key={owner}
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center text-white font-bold shadow-lg">
                        {getInitials(owner)}
                      </div>
                      <span className="text-white font-medium">{owner}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documentation Links */}
              {project.links && project.links.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Documentation
                  </h3>
                  <div className="space-y-3">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-accent/50 rounded-xl transition-all group"
                      >
                        <span className="text-white font-medium">{link.label}</span>
                        <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-primary-accent group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Action Button */}
              {project.sheetUrl && (
                <div className="pt-4">
                  <a
                    href={project.sheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-primary-accent to-secondary-accent hover:from-primary-accent/90 hover:to-secondary-accent/90 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-primary-accent/20 hover:shadow-primary-accent/40 hover:scale-105"
                  >
                    <span>Open Project Sheet</span>
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
