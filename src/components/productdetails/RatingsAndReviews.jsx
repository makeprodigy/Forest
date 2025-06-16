import React, { useState } from 'react';

const FILTERS = [5, 4, 3, 2, 1];
const REVIEWS_PER_PAGE = 25;
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
      <section className="ratings-reviews-section">
        <h3>Ratings & Reviews</h3>
        <p>No reviews yet.</p>
      </section>
    );
  }
  const avg = actualAvg !== undefined ? Number(actualAvg).toFixed(1) : (filteredReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);
  return (
    <section className="ratings-reviews-section">
      <h3>Ratings & Reviews</h3>
      <div className="ratings-reviews-avg">Average: <span className="star">⭐</span> {avg} ({totalReviews} reviews)</div>
      <div className="ratings-reviews-filters">
        <span>Filter by: </span>
        {FILTERS.map(star => (
          <button
            key={star}
            className={`review-filter-btn${filter === star ? ' active' : ''}`}
            onClick={() => {
              setFilter(filter === star ? null : star);
              setPage(1);
              setShowAll(false);
            }}
          >
            {star} star{star > 1 ? 's' : ''}
          </button>
        ))}
        {filter && <button className="review-filter-btn clear" onClick={() => { setFilter(null); setPage(1); setShowAll(false); }}>Clear</button>}
      </div>
      <ul className="ratings-reviews-list">
        {paginatedReviews.map((r, i) => (
          <li key={i + (page - 1) * REVIEWS_PER_PAGE} className="ratings-reviews-item">
            <span className="review-user">{r.user}</span>
            <span className="review-stars">{'⭐'.repeat(r.rating)}</span>
            <span className="review-comment">{r.comment}</span>
          </li>
        ))}
      </ul>
      {!showAll && totalReviews > INITIAL_SHOWN && (
        <button className="show-more-reviews-btn" onClick={() => setShowAll(true)}>
          Show more reviews
        </button>
      )}
      {showAll && totalReviews > REVIEWS_PER_PAGE && (
        <div className="reviews-pagination">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`pagination-btn${page === idx + 1 ? ' active' : ''}`}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default RatingsAndReviews;