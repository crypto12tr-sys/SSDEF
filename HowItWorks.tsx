import React from 'react';
import { UserPlus, ClipboardList, Coins, Wallet } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your free account in under 60 seconds. No credit card or personal information required.',
      color: 'bg-[#714F09] text-white'
    },
    {
      icon: Coins,
      title: 'Earn Points',
      description: 'Receive points instantly after completing each survey. Points can be converted to cash or crypto.',
      color: 'bg-[#F2BB16]/20 text-[#B8860B]'
    },
    {
      icon: Wallet,
      title: 'Get Paid',
      description: 'Withdraw your earnings via PayPal, bank transfer, or popular cryptocurrencies like Bitcoin.',
      color: 'bg-[#F2BB16] text-white'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-[#F2BB16] glow-text">GainHoney</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start earning in just 4 simple steps. Our streamlined process makes it easy to turn your free time into real money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group p-8 rounded-2xl border border-[#F2BB16]/20 glow-border bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${step.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-12 h-12" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#F2BB16] text-white rounded-full flex items-center justify-center text-lg font-bold glow-badge shadow-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-[#FFE285] leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-[#F2BB16]/10 rounded-xl border border-[#F2BB16]/20 glow-border">
            <span className="text-[#B8860B] font-medium">💡 Pro Tip: Complete your profile to unlock higher-paying surveys!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;