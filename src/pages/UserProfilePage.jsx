import React, { useState } from 'react';
import { User, LogOut, LogIn, Settings, Package, CreditCard } from 'lucide-react';
import ProfileInfo from '../components/userprofile/ProfileInfo';
import UserOrderHistory from '../components/userprofile/UserOrderHistory';
import UserSettings from '../components/userprofile/UserSettings';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/auth');
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInfo />;
      case 'orders':
        return <UserOrderHistory />;
      case 'settings':
        return <UserSettings />;
      default:
        return <ProfileInfo />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl shadow-black/5 p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h1>
          <p className="text-gray-600 mb-8">Please log in to access your profile</p>
          <button 
            onClick={handleLogin} 
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none rounded-xl px-6 py-4 text-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 flex items-center justify-center gap-3"
          >
            <LogIn className="w-5 h-5" />
            Login to Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 text-lg">Manage your account and preferences</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-2 flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 mb-8">
          {renderContent()}
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button 
            onClick={handleLogout} 
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-none rounded-xl px-8 py-4 text-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 flex items-center gap-3 mx-auto"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;