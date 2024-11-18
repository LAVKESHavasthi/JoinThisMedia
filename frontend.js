// Handling search and dynamic content
document.addEventListener('DOMContentLoaded', () => {

    // Handle form submission for search
    const searchForm = document.getElementById('searchForm');
    searchForm && searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = document.getElementById('searchQuery').value;
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });

    // Check if we are on the article page
    if (window.location.pathname.includes('article.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');
        
        if (articleId) {
            // Dynamically load article content
            loadArticleContent(articleId);
        }
    }
});

// Mock article dataconst articles = [
const articles = [
    { title: "Lord Shiva", content: "Details about Lord Shiva", link: "lordshiva.html" },
    { title: "Lord Ganesha", content: "Details about Lord Ganesha", link: "Lordganesha.html" },
    { title: "Lord Vishnu", content: "Details about Lord Vishnu", link: "lordvishnu.html" },
    { title: "Lord Bramha", content: "Details about Lord Bramha", link: "lordbramha.html" },
    { title: "Lord Rama", content: "Details about Lord Rama", link: "lordrama.html" },
    { title: "Lord Krishna", content: "Details about Lord Krishna", link: "lordkrishna.html" },// New article added
];



// Function to load the content of the article dynamically
function loadArticleContent(articleId) {
    const article = articles[articleId];
    const articleContent = document.getElementById('articleContent');
    
    if (article) {
        articleContent.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
        `;
    } else {
        articleContent.innerHTML = '<p>Article not found.</p>';
    }
}
