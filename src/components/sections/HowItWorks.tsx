import { FiFileText, FiUsers, FiArrowUp } from 'react-icons/fi';

const stepsData = [
  {
    icon: <FiFileText size={40} className="text-blue-500" />,
    title: 'Document Your Journey',
    description: "Share milestones, challenges, and insights publicly. Our tools make it easy to document your progress and share updates with your community."
  },
  {
    icon: <FiUsers size={40} className="text-green-500" />,
    title: 'Engage With Your Community',
    description: "Seek feedback, collaborate, and learn together. Building relationships with customers, investors, and other founders accelerates your growth."
  },
  {
    icon: <FiArrowUp size={40} className="text-purple-500" />,
    title: 'Grow Transparently',
    description: "Scale your venture authentically with the support of peers. As your company grows, your transparency becomes your biggest competitive advantage."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 text-sm font-medium py-1 px-3 rounded-full mb-4 inline-block">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Build in the open provides a simple framework for building your company with transparency at its core.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {stepsData.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="mb-6 flex justify-center lg:justify-start">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-center lg:text-left">
                  {step.description}
                </p>
                
                {/* Step number indicator */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  {index + 1}
                </div>
              </div>
              
              {/* Only show connector for first two steps on large screens */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 text-gray-400 z-10">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-10 rounded-xl shadow-lg text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to start building in the open?
          </h3>
          <p className="text-lg text-white/90 mb-8">
            Join our community of transparent founders and access our suite of tools designed for open building.
          </p>
          <a 
            href="#join" 
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors inline-block shadow-sm"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 