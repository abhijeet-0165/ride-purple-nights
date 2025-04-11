
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { EyeIcon, EyeOffIcon, BookOpen } from 'lucide-react';

const StudentLoginForm = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Validation for roll number (example: CHITKARA-CS-2023-001)
  const isValidRollNumber = (roll: string) => {
    const pattern = /^CHITKARA-[A-Z]+-\d{4}-\d{3}$/;
    return pattern.test(roll);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidRollNumber(rollNumber)) {
      toast({
        title: "Invalid Roll Number",
        description: "Please enter a valid Chitkara University roll number (e.g., CHITKARA-CS-2023-001)",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (rollNumber && password) {
        toast({
          title: "Login successful",
          description: "Welcome back to Chitkara Student Portal!",
        });
        navigate('/student-dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Please check your roll number and password.",
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
        <CardTitle className="text-2xl font-bold text-white">Student Login</CardTitle>
        <CardDescription className="text-gray-400">
          Enter your roll number and password to access the student portal
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleLogin}>
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
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-purple-400 hover:text-purple-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="bg-purple-600 hover:bg-purple-700" 
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex flex-col">
        <div className="text-sm text-gray-400 mt-2">
          New student?{" "}
          <Link to="/student-signup" className="text-purple-400 hover:text-purple-300">
            Register here
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StudentLoginForm;
