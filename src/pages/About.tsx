
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Clock, Globe, Map, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About RidePulse</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're making transportation more affordable, efficient, and sustainable through carpooling.
            </p>
          </div>
          
          {/* How it Works Section */}
          <section id="how-it-works" className="py-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Start sharing rides in three simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-purple-900/30 rounded-full p-5 mb-6">
                  <Map className="h-10 w-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Search for a Ride</h3>
                <p className="text-gray-400">
                  Enter your origin, destination, and travel date to find available rides from drivers heading your way.
                </p>
                {/* Arrow connector - visible only on desktop */}
                <div className="hidden md:block absolute top-10 -right-6 transform translate-x-1/2">
                  <ArrowRight className="h-8 w-8 text-purple-500/70" />
                </div>
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-purple-900/30 rounded-full p-5 mb-6">
                  <CheckCircle className="h-10 w-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Book & Pay</h3>
                <p className="text-gray-400">
                  Select your preferred ride and complete the secure booking process with our easy payment system.
                </p>
                {/* Arrow connector - visible only on desktop */}
                <div className="hidden md:block absolute top-10 -right-6 transform translate-x-1/2">
                  <ArrowRight className="h-8 w-8 text-purple-500/70" />
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-900/30 rounded-full p-5 mb-6">
                  <Users className="h-10 w-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Travel Together</h3>
                <p className="text-gray-400">
                  Meet your driver at the agreed pick-up point and enjoy your shared journey to your destination.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-purple-500/20 rounded-xl p-8 md:p-12">
              <div className="md:flex items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to start saving?</h3>
                  <p className="text-gray-400 mb-6">
                    Whether you're traveling cross-country or just across town, find rides going your way or offer empty seats in your car.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">Save time with direct routes</p>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">Reduce your carbon footprint</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1532939163844-547f958e91b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="People carpooling" 
                    className="rounded-lg max-w-full h-auto shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
