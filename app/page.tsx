"use client";
import React from "react";
import {
  Search,
  Filter,
  Menu,
  MapPin,
  Heart,
  Calendar,
  MessageCircle,
  User,
  Trophy,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";

export default function SportsBookingApp() {
  const sportsCategories = [
    { name: "Football", icon: "⚽", color: "bg-green-100 text-green-600" },
    { name: "Basketball", icon: "🏀", color: "bg-orange-100 text-orange-600" },
    { name: "Tennis", icon: "🎾", color: "bg-yellow-100 text-yellow-600" },
    { name: "Swimming", icon: "🏊", color: "bg-blue-100 text-blue-600" },
    { name: "Cricket", icon: "🏏", color: "bg-red-100 text-red-600" },
    { name: "Badminton", icon: "🏸", color: "bg-purple-100 text-purple-600" },
    { name: "Volleyball", icon: "🏐", color: "bg-pink-100 text-pink-600" },
    { name: "Boxing", icon: "🥊", color: "bg-gray-100 text-gray-600" },
  ];

  const upcomingBookings = [
    {
      id: 1,
      sport: "Football",
      venue: "Central Sports Complex",
      date: "Today",
      time: "6:00 PM",
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      sport: "Tennis",
      venue: "Elite Tennis Club",
      date: "Tomorrow",
      time: "10:00 AM",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop",
    },
  ];

  const bookingHistory = [
    {
      id: 1,
      sport: "Basketball",
      venue: "Metro Sports Arena",
      date: "Dec 15, 2024",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      sport: "Swimming",
      venue: "Aquatic Center",
      date: "Dec 12, 2024",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    },
  ];

  const featuredVenues = [
    {
      id: 1,
      name: "Elite Sports Complex",
      location: "Downtown",
      rating: 4.9,
      price: "₹500/hr",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      sports: ["Football", "Basketball", "Tennis"],
    },
    {
      id: 2,
      name: "Premium Fitness Hub",
      location: "Sector 21",
      rating: 4.7,
      price: "₹300/hr",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      sports: ["Gym", "Boxing", "Yoga"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center justify-between shadow-sm">
        <button className="p-2 hover:bg-gray-100 rounded-lg lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Hello,</span>
          <span className="font-semibold">Alexius</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
          A
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-20">
        {/* Hero Section */}
        <section className="py-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Book your favorite sports venue
          </h1>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              placeholder="Search sports venues and activities"
              className="w-full pl-10 pr-12 h-12 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg">
              <Filter className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Sports Categories - Horizontal Scroll */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Popular Sports</h3>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {sportsCategories.map((sport, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      sport.color.split(" ")[0]
                    } transition-transform hover:scale-105`}
                  >
                    <span className="text-2xl">{sport.icon}</span>
                  </div>
                  <span className="text-sm text-gray-600 text-center">
                    {sport.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banner */}
        <div className="mb-6 overflow-hidden rounded-xl relative">
          <div className="relative h-32">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=200&fit=crop"
              alt="Sports venue"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-between p-6 text-white">
              <div className="flex-1">
                <div className="text-sm font-medium mb-1">SAVE UP TO</div>
                <div className="text-3xl font-bold mb-1">30%</div>
                <div className="text-sm mb-2">ON PREMIUM VENUES</div>
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Trophy className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Bookings */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
            <button className="flex items-center gap-1 text-blue-600 text-sm hover:text-blue-700">
              View All <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={booking.image}
                      alt={booking.sport}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {booking.sport}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {booking.venue}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {booking.date}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {booking.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Venues */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Featured Venues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredVenues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="bg-white/90 hover:bg-white p-2 rounded-lg">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {venue.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">
                        {venue.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    {venue.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {venue.sports.slice(0, 2).map((sport, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {sport}
                        </span>
                      ))}
                      {venue.sports.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{venue.sports.length - 2}
                        </span>
                      )}
                    </div>
                    <span className="font-semibold text-green-600">
                      {venue.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking History */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Bookings</h2>
            <button className="flex items-center gap-1 text-blue-600 text-sm hover:text-blue-700">
              View All <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {bookingHistory.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={booking.image}
                      alt={booking.sport}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {booking.sport}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">
                          {booking.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {booking.venue}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{booking.date}</p>
                  </div>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Book Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Your Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">15</div>
              <div className="text-sm text-gray-600">Total Bookings</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </section>

        {/* Popular Today */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Popular Today</h2>
          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                🏓
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Table Tennis</h3>
                <p className="text-sm text-gray-600">Most booked sport today</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">₹200/hr</div>
                <div className="text-sm text-gray-500">Starting from</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-green-600 p-2">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <Heart className="h-6 w-6" />
            <span className="text-xs">Favorites</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <Calendar className="h-6 w-6" />
            <span className="text-xs">Bookings</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <MessageCircle className="h-6 w-6" />
            <span className="text-xs">Messages</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 p-2">
            <User className="h-6 w-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
