import Image from 'next/image';
import { FiEye, FiTrendingUp, FiUsers } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90 rounded-xl"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-white space-y-6">
                <FiEye className="w-16 h-16" />
                <h3 className="text-2xl md:text-3xl font-bold text-center">
                  Building in the open creates trust
                </h3>
                <div className="flex flex-col space-y-4 w-full max-w-sm">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <FiTrendingUp className="w-6 h-6 mb-2" />
                    <p className="text-sm md:text-base">Accelerate growth through authentic connections</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <FiUsers className="w-6 h-6 mb-2" />
                    <p className="text-sm md:text-base">Build a community that supports your journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Build in the open</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Build in the open provides resources, tools, and a thriving community designed specifically for founders who want to build their businesses transparently, sharing the highs, lows, successes, and setbacks.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              We believe that building in the open leads to better companies, more authentic connections, and faster innovation. By sharing your journey, you'll build trust with customers, attract aligned team members, and learn from other founders who are walking the same path.
            </p>
            
            <p className="text-lg text-gray-700">
              Our platform makes it easy to document your journey, get feedback, and connect with others who share your commitment to transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 