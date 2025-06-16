import React from 'react'

const ProductDescription = ({ description }) => {
  // TODO: Render product description details
  return (
    <section className="product-description-section">
      <h3>Description</h3>
      <p>{description || 'Product description coming soon.'}</p>
    </section>
  )
}

export default ProductDescription