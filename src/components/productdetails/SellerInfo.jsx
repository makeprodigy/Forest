import React from 'react'

const SellerInfo = ({ seller }) => {
  if (!seller) return null;
  return (
    <section className="seller-info-section">
      <div className="seller-info-avatar">{seller.name[0]}</div>
      <div className="seller-info-details">
        <div className="seller-info-name">{seller.name}</div>
        <div className="seller-info-rating">⭐ {seller.rating}</div>
      </div>
    </section>
  )
}

export default SellerInfo