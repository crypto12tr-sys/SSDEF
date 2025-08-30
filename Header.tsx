import React from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onSignUp: () => void;
  onLogout: () => void;
  onShowHome: () => void;
  onShowPartnership: () => void;
  currentPage: 'home' | 'partnership';
}

const Header: React.FC<HeaderProps> = ({ 
  isLoggedIn, 
  onLogin, 
  onSignUp, 
  onLogout, 
  onShowHome, 
  onShowPartnership, 
  currentPage 
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-sm shadow-sm z-50 border-b border-[#F2BB16]/20 glow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={onShowHome}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <Hexagon className="w-8 h-8 text-[#F2BB16] glow-icon stroke-[3px]" fill="none" stroke="currentColor" />
              <div className="absolute inset-0 animate-pulse">
                <Hexagon className="w-8 h-8 text-[#F2BB16]/40 stroke-2" fill="none" stroke="currentColor" />
              </div>
              <div className="absolute inset-0 animate-ping">
                <Hexagon className="w-8 h-8 text-[#F2BB16]/20 stroke-1" fill="none" stroke="currentColor" />
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Gain<span className="text-[#F2BB16] glow-text">Honey</span>
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={onShowHome}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'home' 
                  ? 'text-[#F2BB16] bg-[#F2BB16]/10 glow-text' 
                  : 'text-gray-700 hover:text-[#F2BB16] hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={onShowPartnership}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'partnership' 
                  ? 'text-[#F2BB16] bg-[#F2BB16]/10 glow-text' 
                  : 'text-gray-700 hover:text-[#F2BB16] hover:bg-gray-50'
              }`}
            >
              Partnership
            </button>
          </nav>
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {!isLoggedIn ? (
              <>
                <button
                  onClick={onLogin}
                  className="px-6 py-2 text-gray-700 hover:text-[#F2BB16] transition-all border-2 border-[#F2BB16] hover:border-[#E6A914] rounded-lg hover:shadow-lg hover:shadow-[#F2BB16]/20 glow-button-outline"
                >
                  Sign In
                </button>
                <button
                  onClick={onSignUp}
                  className="px-6 py-2 bg-[#F2BB16] text-white rounded-lg font-medium hover:bg-[#E6A914] transition-all glow-button"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={onLogout}
                  className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center pt-40">
          <div className="bg-white dark:bg-[#221F11] rounded-2xl shadow-2xl p-8 mx-4 w-full max-w-sm">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#F2BB16] hover:text-[#E6A914] transition-colors"
              >
                <X className="w-6 h-6 glow-icon" />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="relative">
                  <Hexagon className="w-8 h-8 text-[#F2BB16] glow-icon stroke-[3px]" fill="none" stroke="currentColor" />
                  <div className="absolute inset-0 animate-pulse">
                    <Hexagon className="w-8 h-8 text-[#F2BB16]/40 stroke-2" fill="none" stroke="currentColor" />
                  </div>
                  <div className="absolute inset-0 animate-ping">
                    <Hexagon className="w-8 h-8 text-[#F2BB16]/20 stroke-1" fill="none" stroke="currentColor" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Gain<span className="text-[#F2BB16] glow-text">Honey</span>
            
            {/* Mobile Navigation */}
            <div className="space-y-4 mb-6">
              <button
                onClick={() => {
                  onShowHome();
                  setIsMenuOpen(false);
                }}
                className={`w-full px-6 py-3 rounded-lg transition-all ${
                  currentPage === 'home' 
                    ? 'text-[#F2BB16] bg-[#F2BB16]/10 glow-text' 
                    : 'text-gray-700 hover:text-[#F2BB16] hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onShowPartnership();
                  setIsMenuOpen(false);
                }}
                className={`w-full px-6 py-3 rounded-lg transition-all ${
                  currentPage === 'partnership' 
                    ? 'text-[#F2BB16] bg-[#F2BB16]/10 glow-text' 
                    : 'text-gray-700 hover:text-[#F2BB16] hover:bg-gray-50'
                }`}
              >
                Partnership
              </button>
              <div className="flex justify-center pt-4">
                <ThemeToggle />
              </div>
            </div>
            
                </span>
              </div>
            </div>
            {!isLoggedIn ? (
              <div className="space-y-4">
                <button
                  onClick={() => {
                    onLogin();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 text-gray-700 hover:text-[#F2BB16] transition-all border-2 border-[#F2BB16] hover:border-[#E6A914] rounded-lg hover:shadow-lg hover:shadow-[#F2BB16]/20 glow-button-outline"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    onSignUp();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-[#F2BB16] text-white rounded-lg font-medium glow-button"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;