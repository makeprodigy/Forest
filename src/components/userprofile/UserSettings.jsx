import React from 'react';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import UserSettingsForm from './UserSettingsForm';

const UserSettings = () => {
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

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Settings className="w-8 h-8 text-emerald-600" />
          Account Settings
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Manage your account preferences and security
        </motion.p>
      </motion.div>

      {/* Settings Form */}
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <UserSettingsForm />
      </motion.div>
    </motion.div>
  );
};

export default UserSettings;