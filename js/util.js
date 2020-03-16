const setCookie = (key, value, path = '/') => {
    document.cookie = key + '=' + encodeURIComponent(value) + ';path=' + path;
};

const getCookie = () => {
    let output = {};
    document.cookie.split(/\s*;\s*/).forEach((pair) => {
        pair = pair.split(/\s*=\s*/);
        output[pair[0]] = pair[1];
    });
    return output;
}

const toggle_classes = (element, class1, class2) => {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}