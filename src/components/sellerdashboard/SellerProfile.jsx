import React from 'react';

const seller = {
  storeName: 'GreenLeaf Store',
  owner: 'Amit Kumar',
  email: 'amit@greenleaf.com',
  phone: '+91-9876543210',
  address: '123 Market Road, Mumbai, India',
  joined: '2022-03-15',
  rating: 4.8,
};

const SellerProfile = () => {
  return (
    <div className="seller-profile-card">
      <div className="seller-profile-title">Seller Profile</div>
      <div className="seller-profile-info-row"><span className="seller-profile-label">Store Name:</span> {seller.storeName}</div>
      <div className="seller-profile-info-row"><span className="seller-profile-label">Owner:</span> {seller.owner}</div>
      <div className="seller-profile-info-row"><span className="seller-profile-label">Email:</span> {seller.email}</div>
      <div className="seller-profile-info-row"><span className="seller-profile-label">Phone:</span> {seller.phone}</div>
      <div className="seller-profile-info-row"><span className="seller-profile-label">Address:</span> {seller.address}</div>
      <div className="seller-profile-info-row"><span className="seller-profile-label">Joined:</span> {seller.joined}</div>
      <div className="seller-profile-info-row"><span className="seller-profile-label">Store Rating:</span> <span className="seller-profile-rating">⭐ {seller.rating}</span></div>
    </div>
  );
};

export default SellerProfile; 