import React, { useState } from 'react';

// SVG Icons
const EditIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const OrderIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const SellerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [seller, setSeller] = useState({
    storeName: 'My Store',
    owner: 'John Smith',
    email: 'john@mystore.com',
    phone: '+91-9876543210',
    address: '123 Market Road, Mumbai, India',
    joined: '2022-03-15',
    rating: 4.8,
    description: 'We offer a wide variety of quality products to meet all your needs. Our mission is to provide excellent customer service and reliable products at competitive prices.',
    website: 'www.mystore.com',
    socialMedia: {
      instagram: '@mystore',
      facebook: 'My Store',
      twitter: '@mystore'
    },
    businessHours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  });

  const [formData, setFormData] = useState(seller);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSocialMediaChange = (platform, value) => {
    setFormData({
      ...formData,
      socialMedia: { ...formData.socialMedia, [platform]: value }
    });
  };

  const handleSave = () => {
    setSeller(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(seller);
    setIsEditing(false);
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold text-neutral-800 mb-2">Store Profile</h2>
          <p className="text-sm lg:text-base text-neutral-600">Manage your store information and settings</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 lg:px-6 py-2 lg:py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <EditIcon />
          <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Store Overview */}
          <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-lg lg:text-2xl font-bold shadow-glow-green">
                MS
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-neutral-800">{seller.storeName}</h3>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <StarIcon className="text-warning-500" />
                  <span>{seller.rating}</span>
                  <span>•</span>
                  <span>Member since {seller.joined}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Store Description</label>
                {isEditing ? (
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-sm lg:text-base text-neutral-600">{seller.description}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Store Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.storeName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Owner Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="owner"
                      value={formData.owner}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.owner}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Address</label>
                  {isEditing ? (
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="2"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  ) : (
                    <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.address}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Website */}
          <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100">
            <h3 className="text-base lg:text-lg font-semibold text-neutral-800 mb-4">Social Media & Website</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Website</label>
                {isEditing ? (
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-sm lg:text-base text-primary-600 font-medium">{seller.website}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Instagram</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.socialMedia.instagram}
                    onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.socialMedia.instagram}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Facebook</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.socialMedia.facebook}
                    onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.socialMedia.facebook}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Twitter</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.socialMedia.twitter}
                    onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                ) : (
                  <p className="text-sm lg:text-base text-neutral-800 font-medium">{seller.socialMedia.twitter}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100">
            <h3 className="text-base lg:text-lg font-semibold text-neutral-800 mb-4">Business Hours</h3>
            <div className="space-y-3">
              {Object.entries(seller.businessHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-700 capitalize">{day}</span>
                  <span className="text-sm text-neutral-600">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-soft border border-neutral-100">
            <h3 className="text-base lg:text-lg font-semibold text-neutral-800 mb-4">Store Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Total Products</span>
                <span className="font-semibold text-primary-600">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Orders Completed</span>
                <span className="font-semibold text-success-600">300</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Customer Rating</span>
                <span className="font-semibold text-warning-600 flex items-center space-x-1">
                  <StarIcon />
                  <span>4.8</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Member Since</span>
                <span className="font-semibold text-neutral-800">2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save/Cancel Buttons */}
      {isEditing && (
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-neutral-200">
          <button
            onClick={handleCancel}
            className="px-4 lg:px-6 py-2 lg:py-3 bg-neutral-200 text-neutral-700 rounded-xl font-medium hover:bg-neutral-300 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 lg:px-6 py-2 lg:py-3 bg-success-600 text-white rounded-xl font-medium hover:bg-success-700 transition-colors duration-200"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default SellerProfile; 