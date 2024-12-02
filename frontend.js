document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        { id: 1, title: "Lord Shiva" },
        { id: 2, title: "Lord Ganesha" },
        { id: 3, title: "Lord Vishnu" },
        { id: 4, title: "Lord Bramha" },
        { id: 5, title: "Lord Rama" },
        { id: 6, title: "Lord Krishna" },
        { id: 7, title: "Tom cruise" },
        { id: 8, title: "Ramayana" },
        { id: 9, title: "Mahabharata" },
        { id: 10, title: "Bhagavad Gita" },
        { id: 11, title: "Vedas" },
        { id: 12, title: "Rigveda" },
        { id: 13, title: "Yajurveda" },
        { id: 14, title: "Samaveda" },
        { id: 15, title: "Shiv Puran" },
        { id: 16, title: "Bharat" },
        { id: 17, title: "Indian Mathematicians" },
        { id: 18, title: "The universe according to india" },
        { id: 19, title: "Ratan Tata Sir" },
        { id: 20, title: "Narendra Damodar Das Modi" },
        { id: 21, title: "Dr. APJ Abdul kalam" },
        { id: 22, title: "Subhash Chandra Bose" },
        { id: 23, title: "Maharana Pratap" },
        { id: 24, title: "Bhagat Singh" },
        { id: 25, title: "Mahatma Gandhi" },
        { id: 26, title: "Akhanda Bharat" },
        { id: 27, title: "Tata Trusts" },
        { id: 28, title: "Lord Hanuman" },
        { id: 29, title: "Ayodhya Ram Mandir" },
        { id: 30, title: "Vasudhaev" },
        { id: 31, title: "Earth" },
        { id: 32, title: "Atharvaveda" },
        { id: 33, title: "Swami Vivekananda" },
        { id: 34, title: "Lord Buddha" },
        { id: 35, title: "Kedarnath Mandir" },
        { id: 36, title: "Lord Parshurama" },
        { id: 37, title: "Srinivasa Ramanujan" },
        { id: 38, title: "Tata Empire" },
        { id: 39, title: "The Way Of Programming W Book" },
  
        
    ];

    // Handle search suggestions
    const searchInput = document.getElementById('searchQuery');
    const suggestionBox = document.createElement('ul');
    suggestionBox.id = 'suggestionBox';
    suggestionBox.style.position = 'absolute';
    suggestionBox.style.backgroundColor = 'white';
    suggestionBox.style.border = '1px solid #ccc';
    suggestionBox.style.listStyleType = 'none';
    suggestionBox.style.padding = '10px';
    suggestionBox.style.width = '300px';
    suggestionBox.style.display = 'none';
    document.body.appendChild(suggestionBox);

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestionBox.innerHTML = ''; // Clear previous suggestions

        if (query) {
            const matchingArticles = articles.filter(article =>
                article.title.toLowerCase().includes(query)
            );

            if (matchingArticles.length > 0) {
                matchingArticles.forEach(article => {
                    const listItem = document.createElement('li');
                    listItem.textContent = article.title;
                    listItem.style.cursor = 'pointer';
                    listItem.style.padding = '5px 0';
                    listItem.addEventListener('click', () => {
                        window.location.href = `${article.title.toLowerCase().replace(/ /g, '')}.html?id=${article.id}`;
                    });
                    suggestionBox.appendChild(listItem);
                });
                suggestionBox.style.display = 'block';
                suggestionBox.style.left = `${searchInput.offsetLeft}px`;
                suggestionBox.style.top = `${searchInput.offsetTop + searchInput.offsetHeight}px`;
            } else {
                suggestionBox.style.display = 'none';
            }
        } else {
            suggestionBox.style.display = 'none';
        }
    });

    // Hide suggestion box when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !suggestionBox.contains(event.target)) {
            suggestionBox.style.display = 'none';
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
