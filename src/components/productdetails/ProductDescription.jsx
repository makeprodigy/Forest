import React from 'react'

const ProductDescription = ({ description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Product Description</h3>
      </div>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-700 leading-relaxed text-base">
          {description || 'Product description coming soon.'}
        </p>
      </div>
      
      {/* Key Features */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features</h4>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center space-x-3 text-sm text-slate-600">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span>High-quality materials</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-slate-600">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span>Durable construction</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-slate-600">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span>1-year warranty</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription