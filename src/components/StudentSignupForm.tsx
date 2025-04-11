
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from '@/components/ui/checkbox';
import { EyeIcon, EyeOffIcon, Calendar } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const StudentSignupForm = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [name, setName] = useState('');
  const [fees, setFees] = useState('');
  const [dob, setDob] = useState<Date>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Validation for roll number (example: CHITKARA-CS-2023-001)
  const isValidRollNumber = (roll: string) => {
    const pattern = /^CHITKARA-[A-Z]+-\d{4}-\d{3}$/;
    return pattern.test(roll);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidRollNumber(rollNumber)) {
      toast({
        title: "Invalid Roll Number",
        description: "Please enter a valid Chitkara University roll number (e.g., CHITKARA-CS-2023-001)",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please check your passwords and try again.",
        variant: "destructive",
      });
      return;
    }
    
    if (!acceptTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (!dob) {
      toast({
        title: "Date of Birth Required",
        description: "Please select your date of birth.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (rollNumber && name && password && dob) {
        toast({
          title: "Account created",
          description: "Welcome to Chitkara Student Portal! Your account has been created successfully.",
        });
        navigate('/student-dashboard');
      } else {
        toast({
          title: "Error creating account",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900 border-purple-500/20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-white">Student Registration</CardTitle>
        <CardDescription className="text-gray-400">
          Enter your details to create a student account
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSignup}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="rollNumber" className="text-white">Roll Number</Label>
              <Input
                id="rollNumber"
                type="text"
                placeholder="CHITKARA-CS-2023-001"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value.toUpperCase())}
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="fees" className="text-white">Fees (INR)</Label>
              <Input
                id="fees"
                type="number"
                placeholder="100000"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="dob" className="text-white">Date of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="dob"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white hover:bg-gray-700",
                      !dob && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dob ? format(dob, "PPP") : <span>Select your date of birth</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                  <CalendarComponent
                    mode="single"
                    selected={dob}
                    onSelect={setDob}
                    initialFocus
                    disabled={(date) => date > new Date() || date < new Date('1950-01-01')}
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the{" "}
                <Link to="/terms" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="bg-purple-600 hover:bg-purple-700" 
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Register"}
            </Button>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex flex-col">
        <div className="text-sm text-gray-400 mt-2">
          Already have an account?{" "}
          <Link to="/student-login" className="text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StudentSignupForm;
