export default function BookInfo() {
    return (
      <div className="card">
        <div className="card-header">
          <img id="book-image" src="/images/book_zukan_flower.png" alt="Book Cover" />
          <h2 id="book-title" className="rfid-title"></h2>
        </div>
        <div className="card-body">
          <div className="book-info">
            <h3>Book Description</h3>
            <p id="book-description"></p>
          </div>
        </div>
      </div>
    );
  }