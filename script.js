const input = document.getElementById("search-bar");
const resultat_tekst = document.getElementById("resultat-tekst");
let resultat
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
        resultat_tekst.innerHTML = `Søker etter: ${input.value}`;
    }
});
