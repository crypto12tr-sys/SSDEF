import React from 'react';
import { ArrowRight, Users, Globe, Eye, Shield, CheckCircle, Building2, Handshake, Clock, Lock, TrendingUp } from 'lucide-react';

interface PartnershipProps {
  onRequestPartnership: () => void;
}

const Partnership: React.FC<PartnershipProps> = ({ onRequestPartnership }) => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '5K+' },
    { icon: Globe, label: 'Countries Covered', value: '20+' },
    { icon: Eye, label: 'Monthly Visits', value: '10K+' },
    { icon: Shield, label: 'Privacy Compliant', value: 'GDPR' }
  ];

  const benefits = [
    'High-quality respondents for accurate data.',
    'Global audience coverage.',
    'GDPR & CCPA compliance.',
    'API, iframe, and offerwall integrations.',
    'Engaged and responsive users.',
    'Dedicated technical support.'
  ];

  const expectations = [
    {
      icon: Handshake,
      title: 'Transparency',
      description: 'Clear and honest communication at all stages.'
    },
    {
      icon: CheckCircle,
      title: 'Fair Survey Quality',
      description: 'High-quality surveys that respect users\' time and privacy.'
    },
    {
      icon: Clock,
      title: 'Reliable Payments',
      description: 'On-time payments to maintain a sustainable collaboration.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Commitment to user privacy and GDPR compliance.'
    },
    {
      icon: TrendingUp,
      title: 'Mutual Growth',
      description: 'Partnerships focused on long-term success for both sides.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-[#141414] dark:to-[#141414]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Partner with <span className="text-[#F2BB16] glow-text">GainHoney</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-[#FFE285] mb-8 max-w-2xl mx-auto">
            Providing high-quality, GDPR-compliant survey respondents for your research.
          </p>
          <button
            onClick={onRequestPartnership}
            className="inline-flex items-center px-8 py-4 bg-[#F2BB16] text-white text-lg font-semibold rounded-xl hover:bg-[#E6A914] transition-all transform hover:scale-105 glow-button-large"
          >
            Request Partnership
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* About Our Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#FFE285] max-w-3xl mx-auto">
              GainHoney is a growing survey and rewards platform where thousands of users participate in surveys and get rewarded. We help survey networks reach real, engaged respondents quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl border border-[#F2BB16]/20 glow-border">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2BB16]/20 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-[#F2BB16] glow-icon" />
                </div>
                <div className="text-3xl font-bold text-[#F2BB16] glow-text mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-[#FFE285] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-xl border border-[#F2BB16]/20 glow-border">
                <CheckCircle className="w-6 h-6 text-[#F2BB16] glow-icon flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-[#FFE285] text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Expect From Our Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-[#FFE285] max-w-4xl mx-auto">
              We believe that long-term partnerships are built on trust, transparency, and mutual growth. To ensure the best experience for our users and partners, we value:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expectations.map((expectation, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl border border-[#F2BB16]/20 glow-border hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2BB16]/20 rounded-2xl mb-6">
                  <expectation.icon className="w-8 h-8 text-[#F2BB16] glow-icon" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{expectation.title}</h3>
                <p className="text-gray-600 dark:text-[#FFE285] leading-relaxed">{expectation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Grow Together */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Grow Together!
          </h2>
          <p className="text-xl text-gray-600 dark:text-[#FFE285] mb-8">
            Ready to integrate with us and access our engaged respondents? Let's talk!
          </p>
          <button
            onClick={onRequestPartnership}
            className="inline-flex items-center px-8 py-4 bg-[#F2BB16] text-white text-lg font-semibold rounded-xl hover:bg-[#E6A914] transition-all transform hover:scale-105 glow-button-large mb-8"
          >
            Request Partnership
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <div className="text-gray-500 dark:text-[#FFE285]">
            <p>Contact us at: <a href="mailto:partnerships@gainhoney.com" className="text-[#F2BB16] hover:text-[#E6A914] glow-text">partnerships@gainhoney.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;