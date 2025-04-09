
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RideSearch from '@/components/RideSearch';
import RideCard, { RideProps } from '@/components/RideCard';
import { FilterX, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for rides
const mockRides: RideProps[] = [
  {
    id: '1',
    from: 'New York, NY',
    to: 'Boston, MA',
    date: 'Apr 15, 2025',
    time: '09:00 AM',
    price: 35,
    seats: 3,
    driver: {
      name: 'Michael Brown',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/150?img=12'
    }
  },
  {
    id: '2',
    from: 'Los Angeles, CA',
    to: 'San Francisco, CA',
    date: 'Apr 16, 2025',
    time: '10:30 AM',
    price: 45,
    seats: 2,
    driver: {
      name: 'Sarah Johnson',
      rating: 4.9,
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  },
  {
    id: '3',
    from: 'Chicago, IL',
    to: 'Detroit, MI',
    date: 'Apr 14, 2025',
    time: '08:15 AM',
    price: 30,
    seats: 4,
    driver: {
      name: 'Robert Davis',
      rating: 4.7,
      avatar: 'https://i.pravatar.cc/150?img=15'
    }
  },
  {
    id: '4',
    from: 'Miami, FL',
    to: 'Orlando, FL',
    date: 'Apr 17, 2025',
    time: '11:00 AM',
    price: 25,
    seats: 3,
    driver: {
      name: 'Jennifer Wilson',
      rating: 4.6,
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  },
  {
    id: '5',
    from: 'Seattle, WA',
    to: 'Portland, OR',
    date: 'Apr 18, 2025',
    time: '09:45 AM',
    price: 28,
    seats: 2,
    driver: {
      name: 'David Martinez',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/150?img=18'
    }
  }
];

const Rides = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [availableRides, setAvailableRides] = useState<RideProps[]>(mockRides);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Available Rides</h1>
            <p className="text-xl text-gray-400">Find and book your next ride</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with search and filters */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <RideSearch variant="card" />
                
                <div className="mt-6 bg-gray-900 rounded-xl border border-purple-500/20 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-white">Filters</h3>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={toggleFilters}
                        className="border-gray-700 text-gray-300 hover:text-white"
                      >
                        {showFilters ? <FilterX className="h-4 w-4 mr-1" /> : <Filter className="h-4 w-4 mr-1" />}
                        {showFilters ? "Hide" : "Show"}
                      </Button>
                    </div>
                  </div>
                  
                  {showFilters && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-white mb-2">Price range</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <input 
                              type="number" 
                              placeholder="Min" 
                              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                            />
                          </div>
                          <div>
                            <input 
                              type="number" 
                              placeholder="Max" 
                              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-white mb-2">Departure time</h4>
                        <div className="space-y-1">
                          {["Morning", "Afternoon", "Evening"].map((time) => (
                            <div key={time} className="flex items-center">
                              <input
                                type="checkbox"
                                id={time.toLowerCase()}
                                className="w-4 h-4 mr-2 accent-purple-500"
                              />
                              <label htmlFor={time.toLowerCase()} className="text-gray-300">{time}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-white mb-2">Driver rating</h4>
                        <div className="space-y-1">
                          {["4.5 & up", "4.0 & up", "3.5 & up"].map((rating) => (
                            <div key={rating} className="flex items-center">
                              <input
                                type="radio"
                                name="rating"
                                id={rating.replace(" & ", "")}
                                className="w-4 h-4 mr-2 accent-purple-500"
                              />
                              <label htmlFor={rating.replace(" & ", "")} className="text-gray-300">{rating}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-2">
                        Apply Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Main content - ride listings */}
            <div className="lg:w-2/3">
              <div className="space-y-6">
                {availableRides.length > 0 ? (
                  availableRides.map((ride) => (
                    <RideCard key={ride.id} ride={ride} />
                  ))
                ) : (
                  <div className="text-center p-8 bg-gray-900 rounded-xl border border-gray-800">
                    <h3 className="text-xl font-medium text-white mb-2">No rides found</h3>
                    <p className="text-gray-400 mb-4">
                      Try adjusting your search criteria or create your own ride.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Offer a Ride
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rides;
