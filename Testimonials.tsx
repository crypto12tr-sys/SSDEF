import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'College Student',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'GainHoney has been a game-changer for me! I\'ve earned over $500 in my first month just by completing surveys during my free time between classes.',
      rating: 5,
      earnings: '$500+'
    },
    {
      name: 'Mike Chen',
      role: 'Part-time Worker',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The platform is incredibly user-friendly and the payouts are always on time. I love that I can choose between cash and crypto payments.',
      rating: 5,
      earnings: '$750+'
    },
    {
      name: 'Emma Wilson',
      role: 'Stay-at-home Mom',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Perfect for earning extra income while my kids nap. The surveys are interesting and I\'ve already cashed out $300 this month!',
      rating: 5,
      earnings: '$300+'
    },
    {
      name: 'David Rodriguez',
      role: 'Freelancer',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'As someone who works from home, GainHoney provides a nice passive income stream. The Bitcoin payouts are especially convenient.',
      rating: 5,
      earnings: '$650+'
    },
    {
      name: 'Lisa Thompson',
      role: 'Retiree',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'I was skeptical at first, but GainHoney has proven to be legitimate and reliable. Great way to supplement my retirement income.',
      rating: 5,
      earnings: '$400+'
    },
    {
      name: 'Alex Kim',
      role: 'Software Developer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The variety of surveys keeps things interesting, and the instant notifications for new opportunities are really helpful.',
      rating: 5,
      earnings: '$800+'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who are already earning with GainHoney.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#F2BB16]/20 glow-border">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F2BB16] glow-icon" fill="currentColor" />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#F2BB16]/30" />
                <p className="text-gray-700 leading-relaxed pl-4">{testimonial.content}</p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Monthly Earnings</span>
                <span className="font-semibold text-[#F2BB16] glow-text">{testimonial.earnings}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 px-6 py-4 bg-white rounded-xl shadow-sm border border-[#F2BB16]/20 glow-border">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-gray-700">Join <strong className="text-[#F2BB16] glow-text">50,000+</strong> happy users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;