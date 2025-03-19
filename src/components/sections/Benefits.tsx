import { FiUsers, FiMessageCircle, FiTrendingUp } from 'react-icons/fi';

const benefitsData = [
  {
    icon: <FiUsers size={36} className="text-blue-500" />,
    title: 'Build Accountability',
    description: "Creating in public builds natural accountability. When your community knows what you're working on, you'll stay motivated and focused on delivering quality work.",
  },
  {
    icon: <FiMessageCircle size={36} className="text-green-500" />,
    title: 'Leverage Community Feedback',
    description: "Get real-time insights from potential users and fellow founders. This immediate feedback loop helps refine your ideas faster and build something people truly want.",
  },
  {
    icon: <FiTrendingUp size={36} className="text-purple-500" />,
    title: 'Accelerate Learning',
    description: "Learn from shared experiences in real-time. By connecting with others building openly, you'll avoid common pitfalls and discover new opportunities for growth.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Build in the <span className="text-blue-600 dark:text-blue-400">Open</span>?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Building your company openly comes with powerful advantages that can transform your entrepreneurial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 