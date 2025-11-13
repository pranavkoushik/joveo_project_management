import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import logo from '../../joveo-logo-og.webp';

const Header = ({ searchQuery, setSearchQuery }) => {
  const teamMembers = [
    { name: 'Aakanksha', initials: 'AA' },
    { name: 'Gungun', initials: 'GG' },
    { name: 'Soham', initials: 'SH' },
    { name: 'Pranav', initials: 'PK' },
    { name: 'Raj', initials: 'RJ' },
    { name: 'Satyam', initials: 'ST' }
  ];

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-dark-bg via-[#1a1f2e] to-dark-bg overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-50"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Top Navigation Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-20"
        >
          <div className="flex items-center gap-4">
            <img src={logo} alt="Joveo" className="h-12 w-auto" />
            <div className="h-8 w-px bg-white/10"></div>
            <span className="text-white/60 text-sm">Global Supply & Partnerships</span>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, tags, owners..."
              className="w-80 pl-12 pr-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-primary-accent/50 focus:bg-white/10 transition-all"
            />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Team Identity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 backdrop-blur-sm border border-white/10 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-secondary-accent rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-medium">Currently Active</span>
            </motion.div>

            <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
              New
              <br />
              <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">
                Initiatives
              </span>
            </h1>

            <p className="text-2xl text-white/60 mb-8 leading-relaxed">
              A curated view of initiatives we're pushing.
            </p>

            <p className="text-white/40 text-sm mb-12">
              Driving innovation and strategic partnerships across global supply chains.
            </p>

            {/* Team Members */}
            <div className="space-y-4">
              <h3 className="text-white/60 text-sm uppercase tracking-wider font-semibold">Team Members</h3>
              <div className="flex flex-wrap gap-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary-accent/50 transition-all cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center text-white font-bold text-sm">
                        {member.initials}
                      </div>
                      <span className="text-white/80 font-medium">{member.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Team Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/30 to-secondary-accent/30 blur-3xl"></div>
              
              {/* Glass card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/20 via-transparent to-secondary-accent/20 rounded-3xl"></div>
                
                <div className="relative flex flex-col items-center justify-center space-y-8">
                  {/* Large team initials */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center shadow-2xl shadow-primary-accent/50"
                  >
                    <span className="text-8xl font-bold text-white">NI</span>
                  </motion.div>

                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">New Initiatives</h2>
                    <p className="text-white/60">6 Active Members</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 w-full pt-8 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">12+</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">6</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">24/7</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
              <div className="w-1 h-3 bg-white/60 rounded-full mx-auto"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
