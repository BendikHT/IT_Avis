
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
    { title: "ChatGPT får bedre stemme - skal avbryte deg mindre.", url: "artikkler/chat-bedring.html" },
    { title: "Nordmann klager inn OpenAI: ChatGPT påsto han hadde drept sine egne barn", url: "artikkler/chat-klager.html" },
    { title: "Analytiker: - EU må slå tilbake mot tekgigantene.", url: "artikkler/eu_slaa_tilbake.html" },
    { title: "Googles Gemini kan nå se alt du gjør på skjermen din.", url: "artikkler/google-gemini.html" },
    { title: "InnoEX/EFSE 2025: Fremtidens teknologi i Honkong", url: "artikkler/hongkong1.html" },
    { title: "«R.E.P.O» er den nyeste virale spillhitten", url: "artikkler/repo.html" },
    { title: "Russisk Unit 29155 angriper NATO og allierte nasjoner.", url: "artikkler/russik-hackere.html" }
];
const dropdown_content = document.getElementById("dropdown-content")
let search_result_number = 0;

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        localStorage.setItem("search", input.value);
        window.open("search.html", "_self");
    }
});
function sok() {
    const user_search = localStorage.getItem("search");

    articles.forEach(article => {
        if (article.title.toLocaleLowerCase().includes(user_search.toLowerCase())) {
            const articleElm = document.createElement("article");
            articleElm.id = article.url.replace("artikkler/", "").replace(".html", "");
            articleElm.innerHTML = `<h2">${article.title}</h2>`;
            document.getElementById("search_main").appendChild(articleElm);
            search_result_number++;
        }
    })
    if (search_result_number === 0) {
        resultat_tekst.innerHTML = `Ditt søk på ${user_search} ga ingen treff`;
    } else
        resultat_tekst.innerHTML = `Ditt søk på ${user_search} ga: ${search_result_number} treff`;
}

sok();

function dropdown() {
    dropdown_content.classList.toggle("dropdown-content-show");
}


function theme(){
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const article = document.querySelectorAll("article");
    const search = document.querySelector("#search");
    const input = document.querySelector("input");
    const theme_icon = document.getElementById("theme_icon");

    body.classList.toggle("dark-mode");
    main.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode-header");
    article.forEach((element) => {
        element.classList.toggle("dark-mode-article");
    });
    search.classList.toggle("dark-mode-searchbar");
    input.classList.toggle("dark-mode-searchbar");
    dropdown_content.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        theme_icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        theme_icon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    }
}
