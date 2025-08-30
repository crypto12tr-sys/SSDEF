import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How much money can I earn with GainHoney?',
      answer: 'Earnings vary based on the number of surveys you complete and their complexity. Most users earn between $200-$800 per month. High-value surveys can pay $5-$25 each, while quick polls pay $0.50-$2. Your earning potential increases as you complete more surveys and build your profile.'
    },
    {
      question: 'How do I get paid and when?',
      answer: 'We offer multiple payout options including PayPal, bank transfer, and popular cryptocurrencies like Bitcoin and Ethereum. Minimum withdrawal is $10. Payments are processed within 24-48 hours for digital payments and 3-5 business days for bank transfers.'
    },
    {
      question: 'Is GainHoney really free to use?',
      answer: 'Yes, GainHoney is completely free to join and use. There are no hidden fees, membership costs, or charges. We make money by connecting you with market research companies who pay us for facilitating quality survey responses.'
    },
    {
      question: 'What types of surveys are available?',
      answer: 'We offer a wide variety of surveys including consumer product feedback, brand awareness studies, political polls, lifestyle questionnaires, and technology usage surveys. Survey lengths range from 2-minute quick polls to 20-minute detailed studies.'
    },
    {
      question: 'How do I qualify for surveys?',
      answer: 'Survey eligibility is based on demographic information in your profile such as age, location, interests, and purchasing habits. Complete your profile thoroughly to maximize your survey opportunities. Some surveys have specific requirements like owning certain products or belonging to particular age groups.'
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Absolutely. We use bank-level encryption to protect your data and never sell your personal information to third parties. Survey responses are anonymized and aggregated. We comply with GDPR, CCPA, and other privacy regulations to ensure your information stays secure.'
    },
    {
      question: 'Can I use GainHoney on my mobile device?',
      answer: 'Yes! Our platform is fully mobile-optimized and works seamlessly on smartphones and tablets. You can complete surveys anywhere, anytime. We also have mobile apps for iOS and Android with push notifications for new survey opportunities.'
    },
    {
      question: 'What if I don\'t qualify for a survey after starting it?',
      answer: 'If you don\'t qualify after starting a survey (which happens sometimes due to quotas being filled), you\'ll still receive a small completion credit of $0.10-$0.25 for your time. This ensures you\'re never completely unrewarded for your effort.'
    },
    {
      question: 'How do I increase my survey opportunities?',
      answer: 'Keep your profile updated and complete, respond to surveys promptly, maintain a high completion rate, and check the platform regularly. Active users with complete profiles receive 3-5x more survey invitations than inactive users.'
    },
    {
      question: 'Can I refer friends and earn bonuses?',
      answer: 'Yes! Our referral program gives you 10% of your friends\' earnings for their first 3 months, plus a $5 bonus when they complete their first survey. There\'s no limit to how many people you can refer, creating an additional passive income stream.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about earning with GainHoney
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-[#F2BB16]/20 glow-border overflow-hidden transition-all duration-300 hover:shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F2BB16] glow-icon flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-[#F2BB16] text-white rounded-lg font-medium hover:bg-[#E6A914] transition-all glow-button">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;