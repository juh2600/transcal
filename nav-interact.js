let nav;
let nav_toggle;

const toggle_classes = (element, class1, class2) => {
    if(element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}

document.addEventListener('DOMContentLoaded', (evt) => {
    nav = document.getElementById('main-nav');
    nav_toggle = document.getElementById('nav-btn-ctr');
    nav_toggle.addEventListener('click', (evt) => {toggle_classes(nav, 'open', 'closed');});
});