const doTestingUtils = () => {
    let themeButtons = document.getElementsByClassName('theme-selector');
    for (let i in themeButtons) if (~~i == i) {
        themeButtons[i].addEventListener('click', (evt) => {
            applyTheme(evt.target.dataset.theme);
        });
    }

    document.getElementById('cache-clearer').addEventListener('click', (evt) => {
        window.location.reload(true);
    });
}

document.addEventListener('DOMContentLoaded', doTestingUtils);