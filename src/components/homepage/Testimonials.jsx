import React, { useState } from 'react';

const testimonials = [
  {
    name: "Aditi Sharma",
    feedback: "This marketplace has completely changed the way I shop. Reliable sellers and a seamless interface!",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Rahul Mehta",
    feedback: "Excellent product quality and fast delivery. Highly recommended!",
    role: "Seller",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Priya Nair",
    feedback: "User-friendly, quick support, and a wide variety of products. I love it!",
    role: "Frequent Shopper",
    image: "https://randomuser.me/api/portraits/women/52.jpg"
  },
  {
    name: "Aman Verma",
    feedback: "The seller dashboard and tools are intuitive. Helped me grow my small business online.",
    role: "Marketplace Vendor",
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 800;
  const visible = isMobile ? [testimonials[active]] : testimonials;

  return (
    <div className="testimonials_section">
      <h2>What Our Users Say</h2>
      <div className="testimonials_container">
        {visible.map((t, index) => (
          <div className="testimonial_card enhanced" key={index}>
            <img src={t.image} alt={t.name} />
            <h3>{t.name}</h3>
            <p className="role">{t.role}</p>
            <p className="feedback"><span className="quote-mark">"</span>{t.feedback}<span className="quote-mark">"</span></p>
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`testimonial-dot${active === idx ? ' active' : ''}`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;

