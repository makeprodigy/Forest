import React, { useState } from 'react';

// SVG Icons
const EditIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const MoneyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const ImageIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const AddProductForm = ({ onBackToProducts }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    tags: '',
    images: [],
    specifications: '',
    shippingInfo: '',
    returnPolicy: ''
  });

  const categories = [
    'Electronics',
    'Clothing & Fashion',
    'Home & Garden',
    'Sports & Outdoors',
    'Books & Media',
    'Toys & Games',
    'Health & Beauty',
    'Automotive',
    'Food & Beverages',
    'Jewelry & Accessories',
    'Tools & Hardware',
    'Pet Supplies',
    'Office Supplies',
    'Baby & Kids',
    'Art & Crafts'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', formData);
    // Add logic to send data to the backend
    setFormData({
      productName: '',
      description: '',
      price: '',
      category: '',
      stock: '',
      tags: '',
      images: [],
      specifications: '',
      shippingInfo: '',
      returnPolicy: ''
    });
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    { number: 1, title: 'Basic Information', icon: <EditIcon /> },
    { number: 2, title: 'Pricing & Inventory', icon: <MoneyIcon /> },
    { number: 3, title: 'Images & Details', icon: <ImageIcon /> },
    { number: 4, title: 'Shipping & Policies', icon: <TruckIcon /> }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 lg:space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-neutral-700 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                placeholder="Enter product name"
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe your product in detail"
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-neutral-700 mb-2">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Enter tags separated by commas"
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 lg:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-neutral-700 mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="stock" className="block text-sm font-medium text-neutral-700 mb-2">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="0"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="specifications" className="block text-sm font-medium text-neutral-700 mb-2">
                Product Specifications
              </label>
              <textarea
                id="specifications"
                name="specifications"
                value={formData.specifications}
                onChange={handleChange}
                rows="4"
                placeholder="Enter product specifications, dimensions, weight, etc."
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 lg:space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Product Images *
              </label>
              <div className="border-2 border-dashed border-neutral-300 rounded-xl p-4 lg:p-6 text-center hover:border-primary-400 transition-colors duration-200">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <div className="mb-4">
                    <ImageIcon className="w-8 h-8 lg:w-12 lg:h-12 mx-auto text-neutral-400" />
                  </div>
                  <p className="text-neutral-600 mb-2 text-sm lg:text-base">Click to upload images</p>
                  <p className="text-xs lg:text-sm text-neutral-500">PNG, JPG up to 10MB each</p>
                </label>
              </div>
            </div>

            {formData.images.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Uploaded Images ({formData.images.length})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Product ${index + 1}`}
                        className="w-full h-20 lg:h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 w-5 h-5 lg:w-6 lg:h-6 bg-error-500 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <XIcon />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 lg:space-y-6">
            <div>
              <label htmlFor="shippingInfo" className="block text-sm font-medium text-neutral-700 mb-2">
                Shipping Information
              </label>
              <textarea
                id="shippingInfo"
                name="shippingInfo"
                value={formData.shippingInfo}
                onChange={handleChange}
                rows="3"
                placeholder="Enter shipping details, delivery time, etc."
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label htmlFor="returnPolicy" className="block text-sm font-medium text-neutral-700 mb-2">
                Return Policy
              </label>
              <textarea
                id="returnPolicy"
                name="returnPolicy"
                value={formData.returnPolicy}
                onChange={handleChange}
                rows="3"
                placeholder="Enter return policy details"
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 lg:p-8">
      {/* Progress Steps */}
      <div className="mb-6 lg:mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Mobile Progress */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-700">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm text-neutral-600">
                {steps[currentStep - 1].title}
              </span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Desktop Progress */}
          <div className="hidden lg:flex lg:items-center lg:justify-between w-full">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                  currentStep >= step.number
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-primary-600' : 'text-neutral-600'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary-600' : 'bg-neutral-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl p-4 lg:p-8 shadow-soft border border-neutral-100">
        <div className="mb-4 lg:mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-neutral-800 mb-2 flex items-center space-x-2">
                {steps[currentStep - 1].icon}
                <span>{steps[currentStep - 1].title}</span>
              </h2>
              <p className="text-sm lg:text-base text-neutral-600">
                {currentStep === 1 && 'Enter basic product information to get started'}
                {currentStep === 2 && 'Set pricing and inventory details for your product'}
                {currentStep === 3 && 'Upload product images and add detailed specifications'}
                {currentStep === 4 && 'Configure shipping and return policy information'}
              </p>
            </div>
            {onBackToProducts && (
              <button
                type="button"
                onClick={onBackToProducts}
                className="flex items-center space-x-2 px-4 py-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-xl transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Back to Products</span>
                <span className="sm:hidden">Back</span>
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit}
              onKeyDown={e => {
                if (e.key === 'Enter' && currentStep < steps.length) {
                  e.preventDefault();
                }
              }}>
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-neutral-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-colors duration-200 ${
                currentStep === 1
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors duration-200"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 lg:px-6 py-2 lg:py-3 bg-success-600 text-white rounded-xl font-medium hover:bg-success-700 transition-colors duration-200"
              >
                Add Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;