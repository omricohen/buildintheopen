'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiEye, FiUsers, FiActivity } from 'react-icons/fi';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="pt-20 pb-32 lg:py-32 relative bg-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white"></div>
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * -0.01}px)` }}
        ></div>
        <div 
          className="absolute top-80 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          style={{ transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.01}px)` }}
        ></div>
        <div 
          className="absolute bottom-24 right-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
          style={{ transform: `translate(${scrollY * 0.01}px, ${scrollY * 0.02}px)` }}
        ></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-100 animate-fadeIn shadow-sm">
            <span className="text-blue-700 text-sm font-medium">The transparent founder's platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slideUp">
            Build Your Company <span className="fancy-gradient">Openly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed animate-slideUp animation-delay-300">
            Join a community of founders committed to transparency, collaboration, and authentic connection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20 animate-slideUp animation-delay-600">
            <Link 
              href="#join" 
              className="btn-primary flex items-center justify-center gap-2 group text-lg px-8 py-4 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Join the Waitlist 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#how-it-works" 
              className="btn-secondary text-lg px-8 py-4 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Learn How It Works
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            <div className="glass p-6 rounded-xl border border-gray-100 hover-card group transition-all duration-300 animate-fadeIn animation-delay-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all">
                <FiEye className="w-6 h-6 text-blue-600 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">Build in Public</h3>
              <p className="text-gray-600">Share your journey openly and build trust with users and investors.</p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-gray-100 hover-card group transition-all duration-300 animate-fadeIn animation-delay-600">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all">
                <FiUsers className="w-6 h-6 text-purple-600 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">Community Support</h3>
              <p className="text-gray-600">Connect with like-minded founders and get feedback on your progress.</p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-gray-100 hover-card group transition-all duration-300 animate-fadeIn animation-delay-900">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all">
                <FiActivity className="w-6 h-6 text-green-600 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">Track Progress</h3>
              <p className="text-gray-600">Document milestones, learnings, and share regular updates with your audience.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add some animation styles at the root level */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-900 {
          animation-delay: 900ms;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
        
        .fancy-gradient {
          background-image: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientMove 4s ease infinite alternate;
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #ccc 1px, transparent 1px),
            linear-gradient(to bottom, #ccc 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Hero; 