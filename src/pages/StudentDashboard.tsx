import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Car, Clock, CreditCard, MapPin, BarChart, BookOpen, User, LogOut, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChitkaraMap from '@/components/ChitkaraMap';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const StudentDashboard = () => {
  // Mock student data
  const student = {
    name: "Rahul Sharma",
    rollNumber: "CHITKARA-CS-2023-101",
    fees: {
      total: 120000,
      paid: 75000,
      pending: 45000
    },
    dob: "15 May 2002",
    program: "B.Tech Computer Science",
    semester: "4th Semester",
    avatar: "https://i.pravatar.cc/150?img=11",
    attendance: 87
  };

  // Mock upcoming classes
  const upcomingClasses = [
    {
      id: "1001",
      subject: "Data Structures",
      room: "Block-E, Room 201",
      time: "10:00 AM - 11:30 AM",
      professor: "Dr. Priya Mehta",
    },
    {
      id: "1002",
      subject: "Database Management",
      room: "Block-D, Room 105",
      time: "12:30 PM - 2:00 PM",
      professor: "Prof. Amit Singh",
    }
  ];

  // Mock offered rides
  const offeredRides = [
    {
      id: "901",
      from: "Chitkara University",
      to: "Chandigarh Sector 17",
      date: "Apr 15, 2025",
      time: "5:30 PM",
      seats: 3,
      vehicle: "Honda City",
      price: 150
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar - Student profile */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-gray-900 border-purple-500/20">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mt-2 mb-4">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback className="bg-purple-600 text-2xl">{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <h2 className="text-xl font-bold text-white mb-1">{student.name}</h2>
                    <p className="text-gray-400 mb-1">{student.rollNumber}</p>
                    <p className="text-purple-400 mb-3">{student.program}</p>
                    <p className="text-gray-300 mb-3">{student.semester}</p>
                    
                    <div className="flex justify-center items-center mb-4">
                      <div className="flex items-center text-green-400 mr-2">
                        <BarChart className="h-4 w-4 mr-1" />
                        <span>{student.attendance}%</span>
                      </div>
                      <span className="text-gray-400 text-sm">• Attendance</span>
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
                    <Link to="/offer-ride" className="w-full">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2">
                        <Car className="h-4 w-4" />
                        Offer a Ride
                      </Button>
                    </Link>
                    
                    <Link to="/view-attendance" className="w-full">
                      <Button variant="outline" className="w-full border-gray-700 text-gray-200 hover:bg-gray-800 flex items-center justify-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        View Attendance
                      </Button>
                    </Link>
                    
                    <Link to="/fee-payment" className="w-full">
                      <Button variant="outline" className="w-full border-gray-700 text-gray-200 hover:bg-gray-800 flex items-center justify-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Pay Fees
                      </Button>
                    </Link>

                    <Button variant="outline" className="w-full border-gray-700 text-gray-200 hover:bg-gray-800 flex items-center justify-center gap-2">
                      <LogOut className="h-4 w-4" />
                      Log Out
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Main content */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              <h1 className="text-3xl font-bold text-white mb-6">Student Dashboard</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="bg-gray-900 border-purple-500/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md text-white">Fees Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Total Fees</span>
                      <span className="text-white">₹{student.fees.total.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Paid</span>
                      <span className="text-green-400">₹{student.fees.paid.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-400">Pending</span>
                      <span className="text-red-400">₹{student.fees.pending.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${(student.fees.paid / student.fees.total) * 100}%` }}
                      ></div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Pay Now</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-900 border-purple-500/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md text-white">Student Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-gray-400 mr-2">Name:</span>
                        <span className="text-white">{student.name}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-gray-400 mr-2">Roll Number:</span>
                        <span className="text-white">{student.rollNumber}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-gray-400 mr-2">Program:</span>
                        <span className="text-white">{student.program}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-purple-500 mr-2" />
                        <span className="text-gray-400 mr-2">Date of Birth:</span>
                        <span className="text-white">{student.dob}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="schedule" className="mb-8">
                <TabsList className="bg-gray-900 border border-gray-800">
                  <TabsTrigger value="schedule" className="data-[state=active]:bg-purple-600">Today's Schedule</TabsTrigger>
                  <TabsTrigger value="rides" className="data-[state=active]:bg-purple-600">Carpool Rides</TabsTrigger>
                  <TabsTrigger value="map" className="data-[state=active]:bg-purple-600">Campus Map</TabsTrigger>
                </TabsList>
                
                <TabsContent value="schedule" className="mt-4">
                  {upcomingClasses.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingClasses.map((classItem) => (
                        <Card key={classItem.id} className="bg-gray-900 border-purple-500/20">
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row gap-4 justify-between">
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{classItem.subject}</h3>
                                <div className="flex items-center text-gray-400 mb-1">
                                  <User className="h-4 w-4 mr-1" />
                                  <span>{classItem.professor}</span>
                                </div>
                                <div className="flex items-center text-gray-400">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{classItem.room}</span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 text-purple-500 mr-2" />
                                <span className="text-gray-300">{classItem.time}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="bg-gray-900 border-gray-800 text-center p-6">
                      <p className="text-gray-400 mb-4">You have no classes scheduled for today.</p>
                    </Card>
                  )}
                </TabsContent>
                
                <TabsContent value="rides" className="mt-4 space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">My Offered Rides</h3>
                    <Link to="/offer-ride">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Car className="h-4 w-4 mr-1" /> Offer New Ride
                      </Button>
                    </Link>
                  </div>
                  
                  {offeredRides.length > 0 ? (
                    <div className="space-y-4">
                      {offeredRides.map((ride) => (
                        <Card key={ride.id} className="bg-gray-900 border-purple-500/20">
                          <CardContent className="p-5">
                            <div className="flex flex-col md:flex-row gap-4 justify-between">
                              <div>
                                <div className="grid grid-cols-[20px_1fr] gap-2 items-start mb-2">
                                  <MapPin size={18} className="text-purple-500 mt-1" />
                                  <div>
                                    <div className="text-white font-medium">From: {ride.from}</div>
                                    <div className="text-white font-medium">To: {ride.to}</div>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4 mb-2">
                                  <div className="flex items-center">
                                    <Calendar size={18} className="text-purple-500 mr-2" />
                                    <span className="text-gray-300">{ride.date}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock size={18} className="text-purple-500 mr-2" />
                                    <span className="text-gray-300">{ride.time}</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center">
                                    <Car size={18} className="text-purple-500 mr-2" />
                                    <span className="text-gray-300">{ride.vehicle}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <User size={18} className="text-purple-500 mr-2" />
                                    <span className="text-gray-300">{ride.seats} seats</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-col items-end justify-between">
                                <div className="text-right mb-4">
                                  <div className="text-2xl font-bold text-purple-400">₹{ride.price}</div>
                                  <div className="text-sm text-gray-400">per seat</div>
                                </div>
                                
                                <div className="flex gap-2">
                                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                                    Edit
                                  </Button>
                                  <Button 
                                    variant="destructive" 
                                  >
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="bg-gray-900 border-gray-800 text-center p-6">
                      <p className="text-gray-400 mb-4">You haven't offered any rides yet.</p>
                      <Link to="/offer-ride">
                        <Button className="bg-purple-600 hover:bg-purple-700">Offer a Ride</Button>
                      </Link>
                    </Card>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mt-6 mb-4">Find Available Rides</h3>
                  <Card className="bg-gray-900 border-purple-500/20">
                    <CardContent className="p-5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="from" className="text-white mb-2 block">From</Label>
                          <Input 
                            id="from"
                            placeholder="Chitkara University"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="to" className="text-white mb-2 block">To</Label>
                          <Input 
                            id="to"
                            placeholder="Destination"
                            className="bg-gray-800 border-gray-700 text-white"
                          />
                        </div>
                        <div className="flex items-end">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            Search Rides
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="map" className="mt-4">
                  <Card className="bg-gray-900 border-purple-500/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-[400px]">
                        <ChitkaraMap />
                      </div>
                    </CardContent>
                  </Card>
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

export default StudentDashboard;
