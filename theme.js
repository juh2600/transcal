const themes = {
    "unimplemented": {
        "bg": "#eeeeeeff",
        "fg": "#202020ff",
        "muted": "#999999ff",
        "highlight": "#aaaaaaff",
        "standout": "#777777ff",
    }
};

const populateThemes = () => {
    document.getElementsByTagName('head')[0].innerHTML += '<style id="theme-rules"></style>';
    let rules = document.getElementById('theme-rules');
    for (let theme in themes) {
        console.log('Adding theme: ' + theme);
        let t = themes[theme];
        let b = `body.theme-${theme}`;
        let themeStyles = `
            ${b} {
                background-color: ${t['bg']};
                color: ${t['fg']};
            }
            ${b} nav#main-nav {
                background-color: ${t['muted']};
            }
            ${b} nav#main-nav > ul > li > a:hover {
                background-color: ${t['highlight']};
            }

        `;
        // let themeStyles = `
        // body.theme-${theme} {
        //     background-image: ${removeUndefined([t['background']['gradient'], t['background']['image']]).join(', ')};
        //     color: ${t['color']};
        // }
        // body.theme-${theme} input {
        //     color: ${t['color']};
        // }
        // body.theme-${theme} #search-status.error {
        //     color: ${t['search']['error-color']};
        // }
        // body.theme-${theme} #search-container {
        //     border-image: linear-gradient(to right, ${t['search']['border']}, transparent) 1;
        // }
        // body.theme-${theme} #search::placeholder {
        //     color: ${t['search']['color']};
        // }
        // body.theme-${theme} input[type="radio"]:checked + label {
        //     background-color: ${t['unit-selector']['selected']};
        // }
        // body.theme-${theme} input[type="radio"] + label:hover {
        //     background-color: ${t['unit-selector']['hover']};
        // }
        // @media all and (min-width: 55em) {
        //     body.theme-${theme} li.day-overview, body.theme-${theme} li.period-breakdown {
        //         background-color: ${t['desktop']['tile-color']};
        //     }
        // }
        // `;
        rules.innerHTML += themeStyles;
    }
};

const applyTheme = (theme) => {
    console.log('Theme: ' + theme);
    let body = document.getElementsByTagName('body')[0];
    for (let t in themes) {
        body.classList.remove(`theme-${t}`);
    }
    if (!themes[theme]) theme = 'unimplemented';
    body.classList.add(`theme-${theme}`);
};
const doThemes = () => {
    populateThemes();
    applyTheme('unimplemented');
};

document.addEventListener('DOMContentLoaded', (evt) => {
    doThemes();
});
