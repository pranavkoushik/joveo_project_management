import React from 'react';
import { Info, Github, FileCode } from 'lucide-react';

const ManagerInstructions = () => {
  return (
    <div className="bg-gradient-to-br from-joveo-blue/5 to-joveo-orange/5 rounded-2xl p-6 border border-joveo-blue/20">
      <div className="flex items-start gap-3 mb-4">
        <div className="bg-joveo-blue rounded-lg p-2">
          <Info className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-joveo-text font-poppins">
            Manager Edit Instructions
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            How to add or update projects in this portal
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 space-y-4">
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-joveo-blue text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div className="flex-1">
              <p className="text-gray-700 font-medium">Navigate to the GitHub repository</p>
              <p className="text-sm text-gray-500 mt-1">Access your project's GitHub page</p>
            </div>
            <Github className="h-5 w-5 text-gray-400" />
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-joveo-blue text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div className="flex-1">
              <p className="text-gray-700 font-medium">Open <code className="px-2 py-0.5 bg-gray-100 rounded text-joveo-blue">src/projects.json</code></p>
              <p className="text-sm text-gray-500 mt-1">Locate the projects data file</p>
            </div>
            <FileCode className="h-5 w-5 text-gray-400" />
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-joveo-blue text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div className="flex-1">
              <p className="text-gray-700 font-medium">Add or modify project entries</p>
              <p className="text-sm text-gray-500 mt-1">Edit the JSON file with new project data</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-joveo-blue text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div className="flex-1">
              <p className="text-gray-700 font-medium">Commit and push changes</p>
              <p className="text-sm text-gray-500 mt-1">Save your changes to the repository</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-joveo-orange text-white flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div className="flex-1">
              <p className="text-gray-700 font-medium">Site auto-updates via Vercel/Netlify</p>
              <p className="text-sm text-gray-500 mt-1">Your changes will be live in a few minutes</p>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            <strong>Note:</strong> Each project requires: id, title, description, status, owners, lastUpdated, tags, and links array.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagerInstructions;
