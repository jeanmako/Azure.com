const searchBox = () => {
    const search = document.querySelector('.search');
    const searchBtn = document.querySelector('.header-search');
    const searchMob = document.querySelector('.mobile-search');
    const searchClose = document.querySelector('.search-close');

// Show search

searchBtn?.addEventListener('click', () => {
    search.classList.add('show-search');
});

searchMob?.addEventListener('click', () => {
    search.classList.add('show-search');
});

searchClose?.addEventListener('click', () => {
    search.classList.remove('show-search');
});
};

export default searchBox;


