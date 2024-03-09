const hamburgerMenu = () => {

    const btn = document.getElementById('menu-btn');
    const overlay = document.getElementById('overlay');
    const menu = document.getElementById('mobile-menu');

    btn?.addEventListener('click', navtoggle);

    function navtoggle() {
        btn.classList.toggle('opened');
        overlay.classList.toggle('overlay-show');
        document.body.classList.toggle('stop-scrolling');
        menu.classList.toggle('show-menu');
    }
};

export default hamburgerMenu;