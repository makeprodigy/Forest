import React from 'react'

const ProfileInfo = () => {
  // Mock user info
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joined: '2023-01-01',
  };
  return (
    <div className="profile-card">
      <div className="profile-card-title">User Info</div>
      <div className="profile-info-row"><span className="profile-info-label">Name:</span> {user.name}</div>
      <div className="profile-info-row"><span className="profile-info-label">Email:</span> {user.email}</div>
      <div className="profile-info-row"><span className="profile-info-label">Joined:</span> {user.joined}</div>
    </div>
  )
}

export default ProfileInfo