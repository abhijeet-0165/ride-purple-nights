
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudentSignupForm from '@/components/StudentSignupForm';

const StudentSignup = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <StudentSignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StudentSignup;
