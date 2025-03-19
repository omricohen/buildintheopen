'use client';

import Link from 'next/link';
import { FiArrowRight, FiEye, FiUsers, FiActivity } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-32 lg:py-32 relative bg-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-80 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-24 right-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-100">
            <span className="text-blue-700 text-sm font-medium">The transparent founder's platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Build Your Company <span className="gradient-text">Openly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Join a community of founders committed to transparency, collaboration, and authentic connection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Link 
              href="#join" 
              className="btn-primary flex items-center justify-center gap-2 group text-lg px-8 py-4"
            >
              Join the Waitlist 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#how-it-works" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn How It Works
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            <div className="glass p-6 rounded-xl border border-gray-100 hover-card">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FiEye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Build in Public</h3>
              <p className="text-gray-600">Share your journey openly and build trust with users and investors.</p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-gray-100 hover-card">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                <FiUsers className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with like-minded founders and get feedback on your progress.</p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-gray-100 hover-card">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                <FiActivity className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Document milestones, learnings, and share regular updates with your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 