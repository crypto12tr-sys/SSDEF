import React from 'react';
import { Hexagon, Mail, Shield, Clock, Award } from 'lucide-react';

interface FooterProps {
  onShowPartnership: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowPartnership }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white dark:from-[#141414] dark:to-[#141414] border-t border-[#F2BB16]/20 glow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Hexagon className="w-8 h-8 text-[#F2BB16] glow-icon stroke-[3px]" fill="none" stroke="currentColor" />
                <div className="absolute inset-0 animate-pulse">
                  <Hexagon className="w-8 h-8 text-[#F2BB16]/40 stroke-2" fill="none" stroke="currentColor" />
                </div>
                <div className="absolute inset-0 animate-ping">
                  <Hexagon className="w-8 h-8 text-[#F2BB16]/20 stroke-1" fill="none" stroke="currentColor" />
                </div>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-gray-900">Gain</span><span className="text-[#F2BB16] glow-text">Honey</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-[#FFE285] mb-6 max-w-md">
              The most trusted rewards platform for earning cryptocurrency and cash through surveys. 
              Join thousands of users who have already earned over $2.5 million.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-[#F2BB16] glow-icon" />
                <span className="dark:text-[#F2BB16]">SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4 text-[#F2BB16] glow-icon" />
                <span className="dark:text-[#F2BB16]">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Award className="w-4 h-4 text-[#F2BB16] glow-icon" />
                <span className="dark:text-[#F2BB16]">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">FAQ</a></li>
              <li>
                <button 
                  onClick={onShowPartnership}
                  className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text"
                >
                  Partnership
                </button>
              </li>
              <li><a href="#" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">Referral Program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">Help Center</a></li>
              <li><a href="#" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 dark:text-[#FFE285] hover:text-[#F2BB16] transition-colors glow-text">Cookie Policy</a></li>
            </ul>
            <div className="mt-6 flex items-center space-x-2 text-gray-500">
              <Mail className="w-4 h-4 text-[#F2BB16] glow-icon" />
              <span className="text-sm dark:text-[#FFE285]">support@gainhoney.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F2BB16]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 GainHoney. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-500">Trusted by 50,000+ users worldwide</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#F2BB16] rounded-full glow-dot"></div>
                ))}
                <span className="text-sm text-[#F2BB16] ml-2 glow-text">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;