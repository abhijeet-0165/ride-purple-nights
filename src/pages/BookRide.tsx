
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Calendar, Clock, CreditCard, User, Car } from 'lucide-react';
import { RideProps } from '@/components/RideCard';

// Mock data for finding a specific ride by id
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

const BookRide = () => {
  const { rideId } = useParams<{ rideId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [seatCount, setSeatCount] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Find ride data from mock data
  const ride = mockRides.find(r => r.id === rideId);
  
  if (!ride) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="pt-28 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Ride not found</h1>
            <p className="text-gray-400 mb-8">The ride you're looking for doesn't exist.</p>
            <Button 
              onClick={() => navigate('/rides')} 
              className="bg-purple-600 hover:bg-purple-700"
            >
              Browse Available Rides
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleBooking = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Booking confirmed!",
        description: `Your ride from ${ride.from} to ${ride.to} has been booked.`,
        variant: "default",
      });
      
      // Redirect to dashboard after booking
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 2000);
  };
  
  const totalPrice = ride.price * seatCount;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Book Your Ride</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ride details */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Ride Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      {ride.driver.avatar ? (
                        <AvatarImage src={ride.driver.avatar} alt={ride.driver.name} />
                      ) : (
                        <AvatarFallback className="bg-purple-600">{ride.driver.name.charAt(0)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <h3 className="text-white font-medium">{ride.driver.name}</h3>
                      <div className="flex items-center text-yellow-400">
                        <svg className="h-4 w-4 fill-current mr-1" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span>{ride.driver.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 border-t border-gray-800 pt-4">
                    <div className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <MapPin size={18} className="text-purple-500 mt-1" />
                      <div>
                        <div className="text-gray-400 text-sm">From</div>
                        <div className="text-white font-medium">{ride.from}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-[20px_1fr] gap-2 items-start">
                      <MapPin size={18} className="text-purple-500 mt-1" />
                      <div>
                        <div className="text-gray-400 text-sm">To</div>
                        <div className="text-white font-medium">{ride.to}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Calendar size={18} className="text-purple-500 mr-2" />
                        <span className="text-gray-300">{ride.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="text-purple-500 mr-2" />
                        <span className="text-gray-300">{ride.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">Price per seat</span>
                      <span className="text-purple-400 font-semibold">${ride.price}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="seat-count" className="text-white">Number of seats</Label>
                      <div className="flex items-center">
                        <Button 
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={seatCount <= 1}
                          onClick={() => setSeatCount(prev => Math.max(1, prev - 1))}
                          className="border-gray-700 text-gray-300 h-10"
                        >
                          -
                        </Button>
                        <Input
                          id="seat-count"
                          type="number"
                          min="1"
                          max={ride.seats}
                          value={seatCount}
                          onChange={(e) => setSeatCount(Math.min(ride.seats, Math.max(1, parseInt(e.target.value) || 1)))}
                          className="w-16 text-center mx-2 bg-gray-800 border-gray-700 text-white"
                        />
                        <Button 
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={seatCount >= ride.seats}
                          onClick={() => setSeatCount(prev => Math.min(ride.seats, prev + 1))}
                          className="border-gray-700 text-gray-300 h-10"
                        >
                          +
                        </Button>
                        <span className="text-gray-400 ml-4">
                          {ride.seats} available
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Payment section */}
            <div>
              <Card className="bg-gray-900 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Select payment method</Label>
                      <RadioGroup 
                        value={paymentMethod} 
                        onValueChange={setPaymentMethod}
                        className="mt-2 space-y-2"
                      >
                        <div className="flex items-center space-x-2 bg-gray-800 p-3 rounded-md border border-gray-700">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                            <CreditCard className="h-5 w-5 mr-2 text-purple-400" />
                            <span className="text-white">Credit Card</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-800 p-3 rounded-md border border-gray-700">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="text-white cursor-pointer">
                            <div className="flex items-center">
                              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.084-.03.15a.81.81 0 0 1-.8.683h-2.87a.42.42 0 0 1-.415-.487L8.414 22l.282-1.82.55-3.43a.808.808 0 0 1 .798-.687h2.527c3.905 0 6.95-1.575 7.838-6.13.032-.174.61-1.032-2.187-.86a.414.414 0 0 1-.477-.49l.06-.358c.072-.494.325-.78.646-.945.526-.266 1.387-.398 2.303-.398h.213c.322 0 .633.022.93.064.79.11 1.33.34 1.67.685z" fill="#253B80" />
                                <path d="M18.28 7.573c-.156-.77-.486-1.4-.923-1.856A3.89 3.89 0 0 0 16.33 4.95c-.713-.386-1.55-.64-2.492-.772C13.24 4.08 12.59 4.03 11.897 4H6.433a.804.804 0 0 0-.794.686l-2.4 15.2c-.45.3.184.576.486.576h2.87L7.6 14.693l-.008-.05.55-3.43a.805.805 0 0 1 .794-.686h1.973c3.214 0 5.732-1.3 6.462-5.06.028-.157.038-.307.047-.455.317.177.585.392.81.644.36.39.63.885.808 1.473.178.587.231 1.23.145 1.917-.73.586-.193 1.124-.358 1.6.447-.187.84-.404 1.186-.66.517-.38.945-.85 1.271-1.415z" fill="#179BD7" />
                              </svg>
                              <span>PayPal</span>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {paymentMethod === 'credit-card' && (
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="card-number" className="text-white">Card Number</Label>
                          <Input 
                            id="card-number" 
                            placeholder="1234 5678 9012 3456" 
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry" className="text-white">Expiry Date</Label>
                            <Input 
                              id="expiry" 
                              placeholder="MM/YY" 
                              className="bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvc" className="text-white">CVC</Label>
                            <Input 
                              id="cvc" 
                              placeholder="123" 
                              className="bg-gray-800 border-gray-700 text-white"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="name" className="text-white">Name on Card</Label>
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Seats</span>
                      <span className="text-white">{seatCount} x ${ride.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Service fee</span>
                      <span className="text-white">$2.00</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-semibold mt-4">
                      <span className="text-white">Total</span>
                      <span className="text-purple-400">${totalPrice + 2}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={handleBooking}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Pay $${totalPrice + 2}`}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookRide;
