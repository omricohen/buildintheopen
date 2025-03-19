import { FiUsers, FiMessageCircle, FiLayout } from 'react-icons/fi';

const communityFeatures = [
  {
    icon: <FiUsers className="w-8 h-8 text-blue-500" />,
    title: "Connect with like-minded founders",
    description: "Join a community of entrepreneurs committed to building transparent, authentic businesses."
  },
  {
    icon: <FiMessageCircle className="w-8 h-8 text-green-500" />,
    title: "Share experiences and insights",
    description: "Contribute to discussions and learn from others who are walking the same path."
  },
  {
    icon: <FiLayout className="w-8 h-8 text-purple-500" />,
    title: "Document your journey",
    description: "Use our platform to share updates, milestones, and learnings as you build your company openly."
  }
];

const Community = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-blue-600">Community</span>
          </h2>
          <p className="text-lg text-gray-700">
            Connect with founders who are committed to building their companies openly and transparently.
          </p>
        </div>
        
        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {communityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Community Preview */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">
                Building is better together
              </h3>
              <p className="text-xl mb-8 text-white/90">
                We're creating a space where transparency is celebrated and founders can support each other through the challenges of building a company.
              </p>
              <a 
                href="#join" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Join the Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community; 