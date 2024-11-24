document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        { id: 1, title: "Lord Shiva" },
        { id: 2, title: "Lord Ganesha" },
        { id: 3, title: "Lord Vishnu" },
        { id: 4, title: "Lord Bramha" },
        { id: 5, title: "Lord Rama" },
        { id: 6, title: "Lord Krishna" }
    ];

    // Handle search suggestions
    const searchInput = document.getElementById('searchQuery');
    const suggestionsBox = document.getElementById('suggestions');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = ''; // Clear previous suggestions
        if (query) {
            const matches = articles.filter(article => article.title.toLowerCase().includes(query));
            matches.forEach(match => {
                const suggestionItem = document.createElement('li');
                suggestionItem.textContent = match.title;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = match.title;
                    suggestionsBox.innerHTML = ''; // Clear suggestions
                });
                suggestionsBox.appendChild(suggestionItem);
            });
        }
    });

    // Handle form submission
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value;
        if (query) {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });
});
