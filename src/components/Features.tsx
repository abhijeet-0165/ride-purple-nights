
import React from 'react';
import { Car, DollarSign, Shield, Users, Leaf, Clock } from 'lucide-react';

const featureItems = [
  {
    icon: <Car className="h-10 w-10 text-purple-500" />,
    title: "Easy Ride Sharing",
    description: "Find or offer rides with just a few clicks. Our simple interface makes carpooling hassle-free."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-purple-500" />,
    title: "Save Money",
    description: "Split travel costs with other passengers. Drivers earn by filling empty seats."
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-500" />,
    title: "Verified Profiles",
    description: "Travel with confidence. All users are verified for your safety and peace of mind."
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "Community Rated",
    description: "Read reviews from other travellers to choose the right ride companion."
  },
  {
    icon: <Leaf className="h-10 w-10 text-purple-500" />,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint by sharing rides and decreasing the number of cars on the road."
  },
  {
    icon: <Clock className="h-10 w-10 text-purple-500" />,
    title: "Flexible Scheduling",
    description: "One-time trips or regular commutes - find the perfect ride to match your schedule."
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose RidePulse?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform connects drivers with empty seats to passengers going the same way. 
            Save money, make friends, and help the environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-purple-500/20 rounded-xl p-6 shadow-lg hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="bg-purple-900/20 rounded-full p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
