
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OfferRideForm from '@/components/OfferRideForm';

const OfferRide = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Offer a Ride</h1>
          <OfferRideForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfferRide;
