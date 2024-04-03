export default function ReviewCard() {
    return (
      <div className="card review-card">
        <div className="card-body">
          <h3>Your Review</h3>
          <textarea id="book-review-text" rows="4"></textarea>
        </div>
      </div>
    );
  }