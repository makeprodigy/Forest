import React from 'react';
import ProfileInfo from '../components/userprofile/ProfileInfo';
import UserOrderHistory from '../components/userprofile/UserOrderHistory';
import UserSettings from '../components/userprofile/UserSettings';
import { useNavigate } from 'react-router-dom';
import '../pagescss/UserProfilePage.css';

const UserProfilePage = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/auth');
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  return (
    <div className="profile-root">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-content">
        {isLoggedIn ? (
          <>
            <ProfileInfo />
            <UserOrderHistory />
            <UserSettings />
            <button onClick={handleLogout} className="profile-btn">Logout</button>
          </>
        ) : (
          <button onClick={handleLogin} className="profile-btn login">Login</button>
        )}
      </div>
    </div>
  );
}

export default UserProfilePage;