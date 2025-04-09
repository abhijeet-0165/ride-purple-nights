
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 purple-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-purple-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start carpooling?</h2>
              <p className="text-xl text-gray-300">
                Join our community today and experience a better way to travel.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-lg flex items-center gap-2 text-lg">
                  Sign up now
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/rides">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-6 rounded-lg text-lg">
                  Browse rides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
