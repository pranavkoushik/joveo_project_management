import React from 'react';
import { Building2, Users } from 'lucide-react';
import logo from '../../joveo-logo-og.webp';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img src={logo} alt="Joveo logo" className="h-10 w-auto rounded-md" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-joveo-blue font-poppins">
                Joveo — New Initiatives
              </h1>
              <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Global Supply & Partnerships
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="px-3 py-1 bg-joveo-orange/10 text-joveo-orange rounded-full font-medium">
              Project Portal
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
