import { useEffect, useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/reviews.json');
      const data = await response.json();
      setReviews(data);
    }
    fetchData();
  }, []);

  return (
    <div id="user-reviews">
      {reviews.map((review, index) => (
        <div key={index} className="card review-card">
          <div className="card-body">
            <div className="user-review">
              <img src={review.userIcon} alt={review.userName} className="user-icon" />
              <div className="user-info">
                <h4>{review.userName}</h4>
                <p>{review.reviewText}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}