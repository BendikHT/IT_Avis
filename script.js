const input = document.getElementById("search-bar");
const resultat_tekst = document.getElementById("resultat-tekst");

document.addEventListener("click", function (event) {
    let article = event.target.closest("article");
    if (article) {
        console.log(article.id);
        window.open(`artikkler/${article.id}.html`, "_self");
    }
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        localStorage.setItem("search", input.value);
        window.open("search.html", "_self");
        resultat_tekst.innerHTML = localStorage.getItem("search");
    }
});
