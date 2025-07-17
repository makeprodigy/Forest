import React from 'react';
import { Settings } from 'lucide-react';
import UserSettingsForm from './UserSettingsForm';

const UserSettings = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
          <Settings className="w-8 h-8 text-emerald-600" />
          Account Settings
        </h2>
        <p className="text-gray-600 text-lg">Manage your account preferences and security</p>
      </div>

      {/* Settings Form */}
      <UserSettingsForm />
    </div>
  );
};

export default UserSettings;