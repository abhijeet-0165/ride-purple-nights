
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Car, Clock, CreditCard, MapPin, MessageSquare, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    joinDate: "March 2025",
    ridesCompleted: 12,
    rating: 4.7
  };

  // Mock upcoming rides
  const upcomingRides = [
    {
      id: "1001",
      from: "New York, NY",
      to: "Philadelphia, PA",
      date: "Apr 17, 2025",
      time: "10:00 AM",
      driver: "Sarah Johnson",
      driverAvatar: "https://i.pravatar.cc/150?img=5",
      price: 28,
      status: "confirmed"
    },
    {
      id: "1002",
      from: "Philadelphia, PA",
      to: "New York, NY",
      date: "Apr 19, 2025",
      time: "06:30 PM",
      driver: "Michael Brown",
      driverAvatar: "https://i.pravatar.cc/150?img=12",
      price: 30,
      status: "pending"
    }
  ];

  // Mock ride history
  const rideHistory = [
    {
      id: "901",
      from: "New York, NY",
      to: "Boston, MA",
      date: "Apr 5, 2025",
      price: 45,
      driver: "Robert Davis"
    },
    {
      id: "902",
      from: "Boston, MA",
      to: "New York, NY",
      date: "Apr 8, 2025",
      price: 40,
      driver: "Jennifer Wilson"
    },
    {
      id: "903",
      from: "New York, NY",
      to: "Washington, DC",
      date: "Mar 28, 2025",
      price: 65,
      driver: "David Martinez"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar - User profile */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-gray-900 border-purple-500/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mt-2 mb-4">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-purple-600 text-2xl">{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
                    <p className="text-gray-400 mb-3">{user.email}</p>
                    
                    <div className="flex justify-center items-center mb-4">
                      <div className="flex items-center text-yellow-400 mr-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{user.rating}</span>
                      </div>
                      <span className="text-gray-400 text-sm">• {user.ridesCompleted} rides</span>
                    </div>
                    
                    <Link to="/profile/edit" className="w-full">
                      <Button variant="outline" className="w-full border-gray-700 text-gray-200 hover:bg-gray-800">
                        Edit Profile
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-900 border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2">
                      <Car className="h-4 w-4" />
                      Offer a Ride
                    </Button>
                    
                    <Button variant="outline" className="w-full border-gray-700 text-gray-200 hover:bg-gray-800 flex items-center justify-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Payment Methods
                    </Button>
                    
                    <Button variant="outline" className="w-full border-gray-700 text-gray-200 hover:bg-gray-800 flex items-center justify-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Messages
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Main content */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
              
              <Tabs defaultValue="upcoming" className="mb-8">
                <TabsList className="bg-gray-900 border border-gray-800">
                  <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-600">Upcoming Rides</TabsTrigger>
                  <TabsTrigger value="history" className="data-[state=active]:bg-purple-600">Ride History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="mt-4">
                  {upcomingRides.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingRides.map((ride) => (
                        <Card key={ride.id} className="bg-gray-900 border-purple-500/20 overflow-hidden">
                          <CardContent className="p-0">
                            <div className={`px-4 py-2 text-sm ${ride.status === 'confirmed' ? 'bg-green-900/40 text-green-400' : 'bg-yellow-900/40 text-yellow-400'} flex items-center justify-between`}>
                              <span className="font-medium">
                                {ride.status === 'confirmed' ? 'Confirmed' : 'Pending Confirmation'}
                              </span>
                              <span>Booking #{ride.id}</span>
                            </div>
                            <div className="p-6">
                              <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                  <div className="grid grid-cols-[20px_1fr] gap-2 items-start mb-4">
                                    <MapPin size={18} className="text-purple-500 mt-1" />
                                    <div>
                                      <div className="text-white font-medium">From: {ride.from}</div>
                                      <div className="text-white font-medium">To: {ride.to}</div>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4 mb-4">
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
                                    <div className="flex items-center">
                                      <Avatar className="h-6 w-6 mr-2">
                                        <AvatarImage src={ride.driverAvatar} alt={ride.driver} />
                                        <AvatarFallback className="bg-purple-600">{ride.driver.charAt(0)}</AvatarFallback>
                                      </Avatar>
                                      <span className="text-gray-300">Driver: {ride.driver}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="md:w-1/3 flex flex-col items-center md:items-end justify-between">
                                  <div className="text-right mb-4">
                                    <div className="text-2xl font-bold text-purple-400">${ride.price}</div>
                                    <div className="text-sm text-gray-400">Total price</div>
                                  </div>
                                  
                                  <div className="flex gap-2 w-full md:w-auto">
                                    <Link to={`/booking/${ride.id}`} className="flex-1 md:flex-auto">
                                      <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                                        Details
                                      </Button>
                                    </Link>
                                    <Button 
                                      variant="destructive" 
                                      className="flex-1 md:flex-auto"
                                    >
                                      Cancel
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="bg-gray-900 border-gray-800 text-center p-6">
                      <p className="text-gray-400 mb-4">You have no upcoming rides.</p>
                      <Link to="/rides">
                        <Button className="bg-purple-600 hover:bg-purple-700">Find a Ride</Button>
                      </Link>
                    </Card>
                  )}
                </TabsContent>
                
                <TabsContent value="history" className="mt-4">
                  {rideHistory.length > 0 ? (
                    <Card className="bg-gray-900 border-purple-500/20">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead className="bg-gray-800 text-gray-300 text-sm uppercase">
                            <tr>
                              <th className="px-6 py-3">Route</th>
                              <th className="px-6 py-3">Date</th>
                              <th className="px-6 py-3">Driver</th>
                              <th className="px-6 py-3">Price</th>
                              <th className="px-6 py-3 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-800">
                            {rideHistory.map((ride) => (
                              <tr key={ride.id} className="text-gray-300">
                                <td className="px-6 py-4">
                                  <div className="text-white">{ride.from}</div>
                                  <div className="text-gray-400">to {ride.to}</div>
                                </td>
                                <td className="px-6 py-4">{ride.date}</td>
                                <td className="px-6 py-4">{ride.driver}</td>
                                <td className="px-6 py-4">${ride.price}</td>
                                <td className="px-6 py-4 text-right">
                                  <Link to={`/booking/${ride.id}`}>
                                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                                      View
                                    </Button>
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  ) : (
                    <Card className="bg-gray-900 border-gray-800 text-center p-6">
                      <p className="text-gray-400">You haven't taken any rides yet.</p>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
