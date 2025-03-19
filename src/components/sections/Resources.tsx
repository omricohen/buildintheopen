import { FiBook, FiTool, FiUsers, FiArrowRight } from 'react-icons/fi';

const resourcesData = [
  {
    icon: <FiTool size={32} className="text-blue-500" />,
    title: "Founder Tools",
    description: "Access specialized tools for transparent documentation, community engagement, and progress tracking.",
    bgClass: "bg-blue-50"
  },
  {
    icon: <FiBook size={32} className="text-purple-500" />,
    title: "Guides & Templates",
    description: "Download proven frameworks, templates, and strategies for building in the open effectively.",
    bgClass: "bg-purple-50"
  },
  {
    icon: <FiUsers size={32} className="text-green-500" />,
    title: "Expert Network",
    description: "Connect with mentors and advisors who specialize in transparent company building.",
    bgClass: "bg-green-50"
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-700 text-sm font-medium py-1 px-3 rounded-full mb-4 inline-block">Coming Soon</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Resources for <span className="text-blue-600">Open Builders</span>
          </h2>
          <p className="text-lg text-gray-700">
            Exclusive tools, guides, and resources designed specifically for founders committed to building openly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resourcesData.map((resource, index) => (
            <div 
              key={index} 
              className={`${resource.bgClass} p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 hover:translate-y-[-8px] transition-transform duration-300`}
            >
              <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mb-6">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {resource.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {resource.description}
              </p>
              <a href="#join" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                Learn more <FiArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-xl overflow-hidden shadow-lg">
          <div className="backdrop-blur-sm bg-white/10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to access these resources?</h3>
                <p className="text-white/90 text-lg">
                  Join the waitlist to be first in line when Build in the open launches. Early members receive exclusive benefits and early access.
                </p>
              </div>
              <a 
                href="#join" 
                className="relative group bg-white text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 rounded-lg transition-colors inline-block"
              >
                <span className="relative z-10 flex items-center">
                  Join Now 
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources; 