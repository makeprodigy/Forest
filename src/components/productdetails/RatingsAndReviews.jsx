import React, { useState } from 'react';

const FILTERS = [5, 4, 3, 2, 1];
const REVIEWS_PER_PAGE = 10;
const INITIAL_SHOWN = 5;

const RatingsAndReviews = ({ reviews, actualAvg }) => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(1);

  // Filter reviews by star rating if filter is set
  const filteredReviews = filter ? reviews.filter(r => r.rating === filter) : reviews;
  const totalReviews = filteredReviews.length;

  // Pagination logic
  const paginatedReviews = showAll
    ? filteredReviews.slice((page - 1) * REVIEWS_PER_PAGE, page * REVIEWS_PER_PAGE)
    : filteredReviews.slice(0, INITIAL_SHOWN);
  const totalPages = Math.ceil(totalReviews / REVIEWS_PER_PAGE);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No Reviews Yet</h3>
          <p className="text-slate-600">Be the first to review this product!</p>
        </div>
      </div>
    );
  }

  const avg = actualAvg !== undefined ? Number(actualAvg).toFixed(1) : (filteredReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 px-8 py-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Customer Reviews</h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(avg) ? 'text-yellow-400' : 'text-slate-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold text-slate-900">{avg}</span>
                <span className="text-slate-600">({totalReviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-8 py-6 bg-white border-b border-slate-100">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-slate-700">Filter by:</span>
          <div className="flex items-center space-x-2">
            {FILTERS.map(star => (
              <button
                key={star}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === star
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                onClick={() => {
                  setFilter(filter === star ? null : star);
                  setPage(1);
                  setShowAll(false);
                }}
              >
                {star} {star === 1 ? 'star' : 'stars'}
              </button>
            ))}
            {filter && (
              <button
                className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-all duration-200"
                onClick={() => {
                  setFilter(null);
                  setPage(1);
                  setShowAll(false);
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="p-8">
        <div className="space-y-6">
          {paginatedReviews.map((review, i) => (
            <div key={i + (page - 1) * REVIEWS_PER_PAGE} className="border-b border-slate-100 pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {review.user[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-semibold text-slate-900">{review.user}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && totalReviews > INITIAL_SHOWN && (
          <div className="mt-8 text-center">
            <button
              className="px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => setShowAll(true)}
            >
              Show All Reviews ({totalReviews})
            </button>
          </div>
        )}

        {/* Pagination */}
        {showAll && totalReviews > REVIEWS_PER_PAGE && (
          <div className="mt-8 flex items-center justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                  page === idx + 1
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingsAndReviews;