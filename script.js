// Raven News - Sample News Data
const newsData = [
    {
        title: "Water Infrastructure Update",
        category: "Water",
        date: "6 September 2026",
        summary: "An update on local water infrastructure and ongoing developments.",
        source: "Raven Research"
    },
    {
        title: "Infrastructure Development Project",
        category: "Infrastructure",
        date: "5 September 2026",
        summary: "A local infrastructure project enters its next stage of development.",
        source: "Raven Research"
    },
    {
        title: "Municipal Government Update",
        category: "Government",
        date: "4 September 2026",
        summary: "A new municipal update provides information about ongoing public services.",
        source: "Raven Research"
    },
    {
        title: "Local Business Development",
        category: "Business",
        date: "3 September 2026",
        summary: "New developments could have an impact on businesses and the local economy.",
        source: "Raven Research"
    },
    {
        title: "New Development Announcement",
        category: "Development",
        date: "2 September 2026",
        summary: "A newly announced development project could shape the future of the area.",
        source: "Raven Research"
    }
];


// Display News
function displayNews(news) {
    const container = document.getElementById("newsContainer");

    if (!container) return;

    container.innerHTML = "";

    if (news.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No stories found</h3>
                <p>Try another search or category.</p>
            </div>
        `;
        return;
    }

    news.forEach(item => {
        const card = document.createElement("article");

        card.className = "news-card";

        card.innerHTML = `
            <div class="news-category">${item.category}</div>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <div class="news-meta">
                <span>${item.date}</span>
                <span>${item.source}</span>
            </div>
        `;

        container.appendChild(card);
    });
}


// Search News
function performSearch() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredNews = newsData.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.summary.toLowerCase().includes(searchTerm)
    );

    displayNews(filteredNews);
}


// Filter by Category
function filterByCategory(category) {
    if (category === "All") {
        displayNews(newsData);
        return;
    }

    const filteredNews = newsData.filter(
        item => item.category === category
    );

    displayNews(filteredNews);
}


// Filter News
function filterNews(category) {
    filterByCategory(category);
}


// Load News When Page Opens
document.addEventListener("DOMContentLoaded", () => {
    displayNews(newsData);
});
