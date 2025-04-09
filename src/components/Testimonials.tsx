
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Commuter",
    image: "https://i.pravatar.cc/150?img=32",
    content: "I've been using RidePulse for my daily commute to work for 3 months now. It's saved me over $400 in gas and parking fees, plus I've made some great friends!",
    stars: 5
  },
  {
    name: "Mark Thompson",
    role: "Weekend Traveler",
    image: "https://i.pravatar.cc/150?img=11",
    content: "As someone who travels between cities every weekend, RidePulse has been a game changer. Reliable drivers, easy booking, and much cheaper than taking the train.",
    stars: 4
  },
  {
    name: "Jessica Lee",
    role: "Driver",
    image: "https://i.pravatar.cc/150?img=5",
    content: "I drive to work every day and used to go alone. Now I can offset my gas costs by picking up passengers going the same way. The app makes it super simple to connect.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of happy carpoolers who are saving money and reducing their carbon footprint.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-purple-500/20"
            >
              <div className="flex items-center mb-4 space-x-1">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-purple-500 text-purple-500" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-600" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
