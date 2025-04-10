
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MapPin, Clock, Calendar, Users, Star, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export type RideProps = {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  price: number;
  seats: number;
  driver: {
    name: string;
    rating: number;
    avatar?: string;
  };
};

const RideCard = ({ ride }: { ride: RideProps }) => {
  return (
    <Card className="bg-gray-900 border-purple-500/20 hover:border-purple-500/50 transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
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
              <div className="flex items-center">
                <div className="flex items-center text-yellow-400 mr-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{ride.driver.rating}</span>
                </div>
                <span className="text-gray-400 text-sm">Driver</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end text-xl text-purple-400 font-semibold">
              <DollarSign className="h-5 w-5 mr-1" />
              <span>{ride.price}</span>
            </div>
            <div className="flex items-center justify-end text-gray-400 text-sm">
              <span>per seat</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-[20px_1fr] gap-2 items-start">
            <MapPin size={18} className="text-purple-500 mt-1" />
            <div>
              <div className="text-white font-medium">From: {ride.from}</div>
              <div className="text-white font-medium">To: {ride.to}</div>
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
          
          <div className="flex items-center">
            <Users size={18} className="text-purple-500 mr-2" />
            <span className="text-gray-300">{ride.seats} seats available</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-800 p-4">
        <div className="w-full flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="w-full border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
            View Details
          </Button>
          <Link to={`/book/${ride.id}`} className="w-full sm:w-auto sm:ml-auto">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Book Seat
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RideCard;
