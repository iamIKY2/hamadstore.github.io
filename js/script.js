function getParameterByName(e) {
    let t = new URLSearchParams(location.search.slice(1));
    return t.has(e) ? t.get(e) : ""
}
document.addEventListener("DOMContentLoaded", function() {
    M.AutoInit()
});

