import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="w-full space-y-3 sm:space-y-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode="list" />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewMode="grid" />
      ))}
    </div>
  );
};

export default ProductGrid;