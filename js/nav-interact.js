let nav;
let nav_toggle_btn;

const toggleNav = () => {
    toggle_classes(nav, 'open', 'closed');
}

const openNav = () => {
    nav.classList.remove('closed');
    nav.classList.add('open');
}

const closeNav = () => {
    nav.classList.remove('open');
    nav.classList.add('closed');
}

const doNavInteract = () => {
    nav = document.getElementById('main-nav');
    nav_toggle_btn = document.getElementById('nav-btn-ctr');
    nav_toggle_btn.addEventListener('click', toggleNav);
    // if nav is open and we tap somewhere outside of it, close it
    document.addEventListener('click', (evt) => {
        if (evt.target.closest('nav#main-nav') == null || evt.target.closest('#nav-click-catcher')) closeNav();
    });
    document.addEventListener('keyup', (evt) => {
        if(evt.key === 'Escape') closeNav();
    });
};

document.addEventListener('DOMContentLoaded', doNavInteract);