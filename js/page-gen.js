const head_content = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta id="mobile-address-bar-color" name="theme-color" content="" />
    <link href="css/site.css" rel="stylesheet" type="text/css" />
    <link href="css/elements.css" rel="stylesheet" type="text/css" />
    <link href="css/nav.css" rel="stylesheet" type="text/css" />
`;

const main_nav_content = `
    <div id="nav-open-close">
        <div id="nav-btn-ctr">
            <div class="nav-btn-bar top"></div>
            <div class="nav-btn-bar mid"></div>
            <div class="nav-btn-bar bot"></div>
        </div>
    </div>
    <ul class="plain">
        <li class="plain"><a class="plain" href="/dashboard.html">Dashboard</a></li>
        <li class="plain"><a class="plain" href="#">Timeline</a></li>
        <li class="plain"><a class="plain" href="#">Account</a></li>
        <li class="plain"><a class="plain" href="/new-page-template.html">Template</a></li>
        <li class="plain"><a class="plain" href="/theme-selection.html">Theme selection</a></li>
    </ul>
    <div id="nav-click-catcher"></div>
`;

document.addEventListener('DOMContentLoaded', (evt) => {
    document.getElementsByTagName('head')[0].innerHTML += head_content;
    document.getElementById('main-nav').innerHTML = main_nav_content;
});