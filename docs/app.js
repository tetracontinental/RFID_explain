// 他のファイルからデータを取得する関数
async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}

// 感想のカードビューを生成する関数
function createReviewCard(review) {
    const card = document.createElement('div');
    card.classList.add('card', 'review-card');
    card.innerHTML = `
        <div class="card-body">
            <div class="user-review">
                <img src="${review.userIcon}" alt="${review.userName}" class="user-icon">
                <div class="user-info">
                    <h4>${review.userName}</h4>
                    <p>${review.reviewText}</p>
                </div>
            </div>
        </div>
    `;
    return card;
}

// データを取得し、感想のカードビューを生成する
async function displayReviews() {
    const reviews = await fetchData('reviews.json');
    const userReviewsContainer = document.getElementById('user-reviews');
    reviews.forEach(review => {
        const card = createReviewCard(review);
        userReviewsContainer.appendChild(card);
    });
}

// ページの読み込み時に感想のカードビューを表示
window.onload = displayReviews;