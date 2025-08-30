import React from 'react';
import { ArrowRight, Star, Shield, Zap, Hexagon } from 'lucide-react';

interface HeroProps {
  isLoggedIn: boolean;
  onSignUp: () => void;
}

const Hero: React.FC<HeroProps> = ({ isLoggedIn, onSignUp }) => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-[#141414] dark:to-[#141414] relative overflow-hidden">
      {/* Big Constant Logo with Radiating Waves */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central big constant logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ top: '40%' }}>
          <div className="translate-y-8 md:translate-y-20">
          {/* Main constant logo */}
          <div className="relative z-10">
            <Hexagon className="w-32 h-32 text-[#F2BB16]/30 stroke-2 animate-breathing-glow" fill="none" stroke="currentColor" />
          </div>
          
          {/* Radiating waves spreading across hero section */}
          <div className="absolute inset-0 animate-wave-1" style={{ animationDelay: '1s' }}>
            <Hexagon className="w-48 h-48 text-[#F2BB16] stroke-1 -m-8" fill="none" stroke="currentColor" style={{ opacity: 0.1 }} />
          </div>
          <div className="absolute inset-0 animate-wave-2" style={{ animationDelay: '1.3s' }}>
            <Hexagon className="w-64 h-64 text-[#F2BB16] stroke-1 -m-16" fill="none" stroke="currentColor" style={{ opacity: 0.08 }} />
          </div>
          <div className="absolute inset-0 animate-wave-3" style={{ animationDelay: '1.6s' }}>
            <Hexagon className="w-80 h-80 text-[#F2BB16] stroke-1 -m-24" fill="none" stroke="currentColor" style={{ opacity: 0.06 }} />
          </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Earn <span className="text-[#F2BB16] glow-text">Crypto</span> & <span className="text-[#F2BB16] glow-text">Cash</span>
            <br />
            by Completing <span className="text-[#F2BB16] glow-text">Surveys</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 dark:text-[#FFE285] mb-8 leading-relaxed">
            Join thousands of users earning <span className="text-[#F2BB16] glow-text">Real Money</span> through <span className="text-[#F2BB16] glow-text">The Most</span> trusted rewards platform.
          </p>

          {/* CTA Button */}
          {!isLoggedIn && (
            <div className="mb-8">
              <button
                onClick={onSignUp}
                className="inline-flex items-center px-8 py-4 bg-[#F2BB16] text-white text-lg font-semibold rounded-xl hover:bg-[#E6A914] transition-all transform hover:scale-105 glow-button-large"
              >
                Start Earning Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <p className="mt-4 text-sm text-gray-500 dark:text-[#f9cd76]">No credit card required • Free to join</p>
              
              {/* Trust Indicators */}
              <div className="flex justify-center items-center space-x-8 mt-8 text-sm text-gray-600 dark:text-[#f9cd76]">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-[#F2BB16] glow-icon" fill="currentColor" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#F2BB16] glow-icon" />
                  <span>Secure Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-[#F2BB16] glow-icon" />
                  <span>Instant Payouts</span>
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F2BB16] glow-text mb-2">$2.5M+</div>
              <div className="text-gray-600 dark:text-[#f9cd76]">Total Paid Out</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F2BB16] glow-text mb-2">50K+</div>
              <div className="text-gray-600 dark:text-[#f9cd76]">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F2BB16] glow-text mb-2">4.8★</div>
              <div className="text-gray-600 dark:text-[#f9cd76]">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;