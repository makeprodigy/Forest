import React from 'react';
import { User, Mail, Calendar, MapPin, Phone, Package } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Header */}
      <motion.div 
        className="text-center mb-8"
        variants={itemVariants}
      >
        <motion.div 
          className="relative inline-block mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-black/10">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center border-2 border-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <User className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {user.name}
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Member since {formatDate(user.joined)}
        </motion.p>
      </motion.div>

      {/* Profile Details Grid */}
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={itemVariants}
      >
        <motion.div 
          className="space-y-6"
          variants={cardVariants}
        >
          {/* Personal Information */}
          <motion.div 
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <User className="w-5 h-5 text-emerald-600" />
              Personal Information
            </motion.h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: user.email },
                { icon: Phone, label: 'Phone', value: user.phone },
                { icon: MapPin, label: 'Location', value: user.location }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <item.icon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-gray-800 font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={cardVariants}
        >
          {/* Account Information */}
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Calendar className="w-5 h-5 text-blue-600" />
              Account Information
            </motion.h3>
            <div className="space-y-4">
              {[
                { icon: Calendar, label: 'Member Since', value: formatDate(user.joined), color: 'blue' },
                { 
                  icon: null, 
                  label: 'Status', 
                  value: 'Active', 
                  color: 'green',
                  customIcon: () => (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )
                },
                { 
                  icon: null, 
                  label: 'Account Type', 
                  value: 'Premium', 
                  color: 'amber',
                  customIcon: () => (
                    <div className="w-5 h-5 bg-amber-500 rounded-full flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  {item.customIcon ? item.customIcon() : <item.icon className={`w-5 h-5 text-${item.color}-600 flex-shrink-0`} />}
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className={`text-${item.color}-600 font-semibold`}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={itemVariants}
      >
        {[
          { 
            title: 'Total Orders', 
            value: '24', 
            icon: Package, 
            gradient: 'from-emerald-500 to-teal-600',
            iconColor: 'text-emerald-200'
          },
          { 
            title: 'Total Spent', 
            value: '$1,247', 
            icon: null,
            gradient: 'from-blue-500 to-indigo-600',
            customIcon: () => (
              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">$</span>
              </div>
            )
          },
          { 
            title: 'Reviews', 
            value: '12', 
            icon: null,
            gradient: 'from-purple-500 to-pink-600',
            customIcon: () => (
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">★</span>
              </div>
            )
          }
        ].map((stat, index) => (
          <motion.div 
            key={stat.title}
            className={`bg-gradient-to-r ${stat.gradient} rounded-2xl p-6 text-white`}
            variants={statVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              {stat.customIcon ? stat.customIcon() : <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProfileInfo;