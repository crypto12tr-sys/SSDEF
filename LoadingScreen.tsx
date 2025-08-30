import React from 'react';
import { Hexagon } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Breathing Glowing Logo */}
      <div className="relative">
        {/* Outer glow rings */}
        <div className="absolute inset-0 animate-ping">
          <Hexagon className="w-24 h-24 text-[#F2BB16]/10 stroke-1" fill="none" stroke="currentColor" />
        </div>
        <div className="absolute inset-0 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Hexagon className="w-20 h-20 text-[#F2BB16]/20 stroke-1 m-2" fill="none" stroke="currentColor" />
        </div>
        <div className="absolute inset-0 animate-pulse" style={{ animationDelay: '1s' }}>
          <Hexagon className="w-16 h-16 text-[#F2BB16]/30 stroke-2 m-4" fill="none" stroke="currentColor" />
        </div>
        
        {/* Main logo with breathing effect */}
        <div className="relative animate-breathing-glow">
          <Hexagon className="w-12 h-12 text-[#F2BB16] stroke-[3px] m-6" fill="none" stroke="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;