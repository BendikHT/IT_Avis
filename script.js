
document.addEventListener("click", function (event) {
    let article = event.target.closest("article");
    if (article) {
        console.log(article.id);
        window.open(`artikkler/${article.id}.html`, "_self");
    }
});

const input = document.getElementById("search-bar");
const resultat_tekst = document.getElementById("resultat-tekst");
const articles = [
    { title: "Chat Bedring", url: "artikkler/chat-bedring.html" },
    { title: "Chat Klager", url: "artikkler/chat-klager.html" },
    { title: "EU Slå Tilbake", url: "artikkler/eu_slaa_tilbake.html" },
    { title: "Google Gemini", url: "artikkler/google-gemini.html" },
    { title: "Hong Kong 1", url: "artikkler/hongkong1.html" },
    { title: "Repo", url: "artikkler/repo.html" },
    { title: "Russisk Hackere", url: "artikkler/russik-hackere.html" }
];
let search_result_number = 0;

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        localStorage.setItem("search", input.value);
        window.open("search.html", "_self");
    }
});
function sok() {
    const user_search = localStorage.getItem("search").toLowerCase();

    articles.forEach(article => {
        if (article.title.toLocaleLowerCase().includes(user_search)) {
            const articleElm = document.createElement("div");
            articleElm.innerHTML = `<a href="${article.url}">${article.title}</a>`;
            document.body.appendChild(articleElm);
            search_result_number++;
        }
    })
    if (search_result_number === 0) {
        resultat_tekst.innerHTML = `Ditt søk på ${user_search} ga ingen treff`;
    } else
        resultat_tekst.innerHTML = `Ditt søk på ${user_search} ga: ${search_result_number} treff`;
}

sok();