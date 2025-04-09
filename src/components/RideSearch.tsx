
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarIcon, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

type RideSearchProps = {
  className?: string;
  variant?: 'default' | 'card';
};

const RideSearch = ({ className, variant = 'default' }: RideSearchProps) => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState('1');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search for rides with these parameters
    // For now, we'll just navigate to the rides page
    navigate('/rides');
  };

  const isCard = variant === 'card';

  return (
    <div className={cn(
      'w-full',
      isCard ? 'bg-gray-900 p-6 rounded-xl border border-purple-500/20 shadow-lg' : '',
      className
    )}>
      {isCard && (
        <h2 className="text-2xl font-bold text-white mb-4">Find a Ride</h2>
      )}
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fromLocation" className="text-white">From</Label>
            <Input
              id="fromLocation"
              placeholder="City or address"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              required
              className={isCard ? 'bg-gray-800 border-gray-700 text-white' : ''}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="toLocation" className="text-white">To</Label>
            <Input
              id="toLocation"
              placeholder="City or address"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              required
              className={isCard ? 'bg-gray-800 border-gray-700 text-white' : ''}
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <Label htmlFor="date" className="text-white">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                    isCard ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' : ''
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-gray-800"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="passengers" className="text-white">Passengers</Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              max="10"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              required
              className={isCard ? 'bg-gray-800 border-gray-700 text-white' : ''}
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          Search Rides
        </Button>
      </form>
    </div>
  );
};

export default RideSearch;
