const head_content = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="site.css" rel="stylesheet" type="text/css" />
    <link href="nav.css" rel="stylesheet" type="text/css" />
`;

const main_nav_content = `
    <div id="nav-open-close"><div id="nav-btn-ctr">X</div></div>
    <ul class="plain">
        <li class="plain"><a class="plain" href="#">Dashboard</a></li>
        <li class="plain"><a class="plain" href="#">Timeline</a></li>
        <li class="plain"><a class="plain" href="#">Account</a></li>
    </ul>
`;

document.addEventListener('DOMContentLoaded', (evt) => {
    document.getElementsByTagName('head')[0].innerHTML += head_content;
    document.getElementById('main-nav').innerHTML = main_nav_content;
});