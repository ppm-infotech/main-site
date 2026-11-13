document.addEventListener("DOMContentLoaded", async () => {
    const track = document.getElementById("reviews-track");
    if (!track) return;

    let autoplay;
    let currentIndex = 0;
    let visibleCount = 3;
    let originalReviews = [];

    try {
        const response = await fetch(
            "/static/training/data/google-reviews.json"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        originalReviews = data.reviews || [];

        document.getElementById("average-rating").textContent =
            `${data.averageRating} ★`;

        document.getElementById("total-reviews").textContent =
            `${data.totalReviews.toLocaleString()} Reviews`;

        document.getElementById("google-review-link").href =
            data.googleMapsUrl;

        if (!originalReviews.length) {
            track.textContent = "No reviews available.";
            return;
        }

        function getVisibleCount() {
            if (window.innerWidth <= 600) return 1;
            if (window.innerWidth <= 900) return 2;
            return 3;
        }

        function createCard(review) {

            const card = document.createElement("article");
            card.className = "review-card";

            const author = document.createElement("div");
            author.className = "review-author";

            const avatar = document.createElement("div");
            avatar.className = "review-avatar";
            avatar.textContent =
                (review.name || "G").charAt(0).toUpperCase();

            const details = document.createElement("div");

            const name = document.createElement("h4");
            name.textContent = review.name || "Google User";

            const date = document.createElement("small");
            date.textContent = review.relativeTime || "";

            details.append(name, date);

            const logo = document.createElement("img");
            logo.className = "review-google";
            logo.src = "/static/training/assets/Google__G__logo.svg"; // Your Google icon path
            logo.alt = "Google";

            author.append(avatar, details, logo);

            const rating = Math.min(
                5,
                Math.max(0, Math.round(Number(review.rating) || 0))
            );

            const stars = document.createElement("div");
            stars.className = "review-stars";
            stars.textContent =
                "★".repeat(rating) + "☆".repeat(5 - rating);

            const text = document.createElement("p");
            text.className = "review-text";
            text.textContent = review.text || "";

            const link = document.createElement("a");
            link.className = "review-read";
            link.href = data.googleMapsUrl;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "Read on Google →";

            card.append(author, stars, text, link);

            return card;
        }

        function setupCarousel() {

            clearInterval(autoplay);

            visibleCount = getVisibleCount();

            currentIndex = 0;

            track.style.transition = "none";
            track.style.transform = "translateX(0)";

            track.innerHTML = "";

            // Duplicate reviews for infinite looping
            const allReviews = [
                ...originalReviews,
                ...originalReviews
            ];

            allReviews.forEach(review => {
                track.appendChild(createCard(review));
            });

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    startAutoplay();
                });
            });
        }

        function slideNext() {

            currentIndex++;

            track.style.transition = "transform 0.8s ease-in-out";

            track.style.transform =
                `translateX(calc(${currentIndex} * -1 * (100% + 18px) / ${visibleCount}))`;

            // Reset after first complete set
            if (currentIndex >= originalReviews.length) {

                setTimeout(() => {

                    track.style.transition = "none";
                    currentIndex = 0;
                    track.style.transform = "translateX(0)";
                }, 850);
            }
        }

        function startAutoplay() {

            clearInterval(autoplay);
            if (originalReviews.length <= visibleCount) return;
            autoplay = setInterval(slideNext, 4000);
        }

        // Pause on hover
        track.addEventListener("mouseenter", () => {
            clearInterval(autoplay);
        });

        track.addEventListener("mouseleave", startAutoplay);

        // Responsive setup
        let resizeTimer;

        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(setupCarousel, 250);

        });

        setupCarousel();

    } catch (error) {
        console.error("Google Reviews Error:", error);
        track.textContent = "Unable to load reviews.";
    }

});
