import React from 'react';
import { User, Mail, Calendar, MapPin, Phone, Package } from 'lucide-react';

const ProfileInfo = () => {
  // Mock user info
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joined: '2023-01-01',
    location: 'New York, NY',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-black/10">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center border-2 border-white">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600 text-lg">Member since {formatDate(user.joined)}</p>
      </div>

      {/* Profile Details Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
              <User className="w-5 h-5 text-emerald-600" />
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-gray-800 font-semibold">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="text-gray-800 font-semibold">{user.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-gray-800 font-semibold">{user.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Account Information */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-600" />
              Account Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Member Since</p>
                  <p className="text-gray-800 font-semibold">{formatDate(user.joined)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Status</p>
                  <p className="text-green-600 font-semibold">Active</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-5 h-5 bg-amber-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Account Type</p>
                  <p className="text-amber-600 font-semibold">Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">Total Orders</p>
              <p className="text-3xl font-bold">24</p>
            </div>
            <Package className="w-8 h-8 text-emerald-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Spent</p>
              <p className="text-3xl font-bold">$1,247</p>
            </div>
            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">$</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Reviews</p>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;