
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Car, DollarSign, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient min-h-screen pt-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Share Rides,<br />
              <span className="text-gradient">Save Money</span> &<br />
              Reduce Emissions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Connect with drivers and passengers going your way. RidePulse makes carpooling easy, affordable, and eco-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/rides">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-lg flex items-center gap-2 text-lg">
                  Find a Ride
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/offer-ride">
                <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/20 px-6 py-6 rounded-lg flex items-center gap-2 text-lg">
                  Offer a Ride
                  <Car size={20} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            <div className="relative">
              <div className="glass-card rounded-xl p-6 md:p-8 shadow-xl max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Popular Routes</h3>
                
                {[
                  {from: "New York", to: "Boston", price: "$25", seats: 3},
                  {from: "Los Angeles", to: "San Francisco", price: "$35", seats: 2},
                  {from: "Chicago", to: "Detroit", price: "$30", seats: 4},
                ].map((route, index) => (
                  <div key={index} className="mb-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-white">{route.from} → {route.to}</div>
                        <div className="text-sm text-gray-400">Next available: Today</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-purple-400">
                          <DollarSign size={16} className="mr-1" />
                          <span>{route.price}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Users size={14} className="mr-1" />
                          <span>{route.seats} seats left</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Link to="/rides">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-2">
                    View All Routes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
