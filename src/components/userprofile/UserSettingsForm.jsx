import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Save, Bell, Shield, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { logout } from '../auth/AuthAPI';
import { useNavigate } from 'react-router-dom';

const UserSettingsForm = () => {
  const [form, setForm] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
    language: 'en',
    timezone: 'UTC-5'
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ 
      ...form, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Settings updated successfully!');
      setIsLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <motion.div 
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <User className="w-6 h-6 text-emerald-600" />
            Personal Information
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: User, name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { icon: Mail, name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com' }
            ].map((field, index) => (
              <motion.div 
                key={field.name}
                variants={formFieldVariants}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                <div className="relative">
                  <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-all duration-200"
                    name={field.name} 
                    value={form[field.name]} 
                    onChange={handleChange} 
                    type={field.type} 
                    placeholder={field.placeholder} 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Section */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Shield className="w-6 h-6 text-blue-600" />
            Security Settings
          </motion.h3>
          <div className="space-y-6">
            <motion.div
              variants={formFieldVariants}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all duration-200"
                  name="currentPassword" 
                  value={form.currentPassword} 
                  onChange={handleChange} 
                  type={showPasswords.current ? "text" : "password"} 
                  placeholder="Enter current password" 
                />
                <motion.button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </motion.button>
              </div>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { field: 'new', label: 'New Password', placeholder: 'Enter new password' },
                { field: 'confirm', label: 'Confirm New Password', placeholder: 'Confirm new password' }
              ].map((passwordField, index) => (
                <motion.div
                  key={passwordField.field}
                  variants={formFieldVariants}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {passwordField.label}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all duration-200"
                      name={`${passwordField.field}Password`} 
                      value={form[`${passwordField.field}Password`]} 
                      onChange={handleChange} 
                      type={showPasswords[passwordField.field] ? "text" : "password"} 
                      placeholder={passwordField.placeholder} 
                    />
                    <motion.button
                      type="button"
                      onClick={() => togglePasswordVisibility(passwordField.field)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {showPasswords[passwordField.field] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Preferences Section */}
        <motion.div 
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Globe className="w-6 h-6 text-purple-600" />
            Preferences
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'language', label: 'Language', options: [
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
                { value: 'de', label: 'German' }
              ]},
              { name: 'timezone', label: 'Timezone', options: [
                { value: 'UTC-5', label: 'Eastern Time (UTC-5)' },
                { value: 'UTC-6', label: 'Central Time (UTC-6)' },
                { value: 'UTC-7', label: 'Mountain Time (UTC-7)' },
                { value: 'UTC-8', label: 'Pacific Time (UTC-8)' }
              ]}
            ].map((selectField, index) => (
              <motion.div
                key={selectField.name}
                variants={formFieldVariants}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {selectField.label}
                </label>
                <select
                  name={selectField.name}
                  value={form[selectField.name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white transition-all duration-200"
                >
                  {selectField.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-6"
            variants={formFieldVariants}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="notifications"
                checked={form.notifications}
                onChange={handleChange}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <Bell className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">
                Receive email notifications about orders and updates
              </span>
            </label>
          </motion.div>
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          className="text-center"
          variants={buttonVariants}
        >
          <motion.button 
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none rounded-xl px-8 py-4 text-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Save Changes
              </>
            )}
          </motion.button>
          {/* Logout Button */}
          <motion.button
            type="button"
            onClick={handleLogout}
            className="mt-6 bg-gradient-to-r from-red-500 to-pink-600 text-white border-none rounded-xl px-8 py-4 text-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Logout
          </motion.button>
          <AnimatePresence>
            {message && (
              <motion.div 
                className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default UserSettingsForm; 