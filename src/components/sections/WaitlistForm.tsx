'use client';

import { useState } from 'react';
import { FiArrowRight, FiCheck, FiMail } from 'react-icons/fi';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      // This would be replaced with an actual API integration
      // such as Mailchimp, ConvertKit, etc.
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form
      setEmail('');
    }, 1500);
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <FiMail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Join the <span className="text-blue-200">Waitlist</span>
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Be the first to know when Build in the open launches. Early members will receive exclusive benefits and priority access.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center max-w-md mx-auto">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 backdrop-blur-sm mb-6">
                    <FiCheck className="w-8 h-8 text-green-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-white/80">
                    Thanks for joining. We'll keep you updated on our progress and let you know when we launch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-grow px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isLoading ? (
                          <>
                            <span className="animate-spin inline-block w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"></span>
                            Processing...
                          </>
                        ) : (
                          <>
                            Join Now <FiArrowRight className="ml-1" />
                          </>
                        )}
                      </button>
                    </div>
                    
                    {error && (
                      <p className="text-red-300 text-sm mt-2">{error}</p>
                    )}
                    
                    <p className="text-sm text-white/70 mt-4">
                      We respect your privacy. We'll never share your information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm; 