
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Calendar, Clock, Car, Users, IndianRupee, MapPin, Route } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ChitkaraMap from './ChitkaraMap';

const OfferRideForm = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('Chitkara University, Punjab');
  const [to, setTo] = useState('');
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState('1');
  const [price, setPrice] = useState('');
  const [vehicle, setVehicle] = useState('2-wheeler');
  const [vehicleModel, setVehicleModel] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Date Required",
        description: "Please select a date for your ride.",
        variant: "destructive",
      });
      return;
    }
    
    if (!time) {
      toast({
        title: "Time Required",
        description: "Please enter a time for your ride.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (from && to && date && time) {
        toast({
          title: "Ride Offered",
          description: "Your ride has been successfully offered.",
        });
        navigate('/student-dashboard');
      } else {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gray-900 border-purple-500/20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white">Offer a Ride</CardTitle>
          <CardDescription className="text-gray-400">
            Share your vehicle and help fellow students while reducing your travel costs
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="from" className="text-white">From</Label>
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white">
                <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                <span>{from}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="to" className="text-white">To</Label>
              <div className="relative">
                <Input
                  id="to"
                  placeholder="Enter destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white pl-9"
                  required
                />
                <MapPin className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-purple-500" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-white">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white hover:bg-gray-700",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="text-white">Time</Label>
                <div className="relative">
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white pl-9"
                    required
                  />
                  <Clock className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-purple-500" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vehicle-type" className="text-white">Vehicle Type</Label>
              <RadioGroup
                defaultValue="2-wheeler"
                value={vehicle}
                onValueChange={setVehicle}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2-wheeler" id="two-wheeler" className="border-purple-500" />
                  <Label htmlFor="two-wheeler" className="text-white">Two Wheeler</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4-wheeler" id="four-wheeler" className="border-purple-500" />
                  <Label htmlFor="four-wheeler" className="text-white">Four Wheeler</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vehicle-model" className="text-white">Vehicle Model</Label>
              <div className="relative">
                <Input
                  id="vehicle-model"
                  placeholder="e.g. Honda Activa, Maruti Swift"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white pl-9"
                  required
                />
                <Car className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-purple-500" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="seats" className="text-white">Available Seats</Label>
                <div className="relative">
                  <Input
                    id="seats"
                    type="number"
                    min="1"
                    max={vehicle === '2-wheeler' ? '1' : '4'}
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white pl-9"
                    required
                  />
                  <Users className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-purple-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price" className="text-white">Price per Seat (₹)</Label>
                <div className="relative">
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    placeholder="100"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white pl-9"
                    required
                  />
                  <IndianRupee className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-purple-500" />
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              {isLoading ? "Posting Ride..." : "Offer Ride"}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {/* Map card */}
      <Card className="bg-gray-900 border-purple-500/20 overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle className="text-xl font-bold text-white">Route Preview</CardTitle>
          <CardDescription className="text-gray-400">
            Map shows your starting point at Chitkara University
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-4">
          <div className="h-[400px] rounded-md overflow-hidden">
            <ChitkaraMap />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfferRideForm;
