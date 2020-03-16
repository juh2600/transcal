const doThemeSelection = () => {
    let themeButtons = document.getElementsByClassName('theme-selector');
    for (let i in themeButtons) if (~~i == i) {
        themeButtons[i].addEventListener('click', (evt) => {
            applyTheme(evt.target.dataset.theme);
        });
    }
}

document.addEventListener('DOMContentLoaded', doThemeSelection);