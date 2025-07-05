"use client";
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Play Academy</h1>
          <div className="space-x-4">
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/login" className="hover:text-gray-200">Login</Link>
            <Link href="/signup" className="hover:text-gray-200">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Play Academy Classes with Ease
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Manage your bookings, view schedules, and join classes seamlessly with our intuitive platform.
          </p>
          <Link
            href="/signup"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Play Academy?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80">
              <h4 className="text-xl font-semibold mb-2">Easy Booking</h4>
              <p className="text-gray-600">
                Reserve your spot in classes with just a few clicks. Choose your time and activity effortlessly.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80">
              <h4 className="text-xl font-semibold mb-2">Schedule Management</h4>
              <p className="text-gray-600">
                View and manage your class schedules in real-time, with notifications for upcoming sessions.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80">
              <h4 className="text-xl font-semibold mb-2">User Dashboard</h4>
              <p className="text-gray-600">
                Track your bookings, view history, and manage your profile from a personalized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Fun?</h3>
          <p className="text-lg mb-8">
            Sign up today and start booking your Play Academy classes in seconds!
          </p>
          <Link
            href="/signup"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Play Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;