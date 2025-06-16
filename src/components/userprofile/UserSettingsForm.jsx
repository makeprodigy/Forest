import React, { useState } from 'react';

const UserSettingsForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Settings updated (not yet connected to backend).');
  };

  return (
    <form className="user-settings-form" onSubmit={handleSubmit}>
      <h3>Update Profile</h3>
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your email" />
      </label>
      <h3>Change Password</h3>
      <label>
        Current Password
        <input name="currentPassword" value={form.currentPassword} onChange={handleChange} type="password" placeholder="Current password" />
      </label>
      <label>
        New Password
        <input name="newPassword" value={form.newPassword} onChange={handleChange} type="password" placeholder="New password" />
      </label>
      <button type="submit">Save Changes</button>
      {message && <div className="settings-message">{message}</div>}
    </form>
  );
};

export default UserSettingsForm; 