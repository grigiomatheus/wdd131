let reviews = localStorage.getItem('reviews');
reviews = reviews ? parseInt(reviews) : 0;

const reviewDescription = document.querySelector('#review-description');
reviewDescription.textContent = `Thank you for submitting your review! You have submitted ${reviews} reviews.`;