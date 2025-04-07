
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
    { title: "Russisk Unit 29155 angriper NATO og allierte nasjoner.", url: "artikkler/russik-hackere.html" },
    { title: "Apple avduker ny AI-drevet MacBook: En milepæl innen bærbare datamaskiner", url: "artikkler/ai_pc.html" },
    { title: "Selskapet har samlet inn norsk DNA. Nå går de konkurs. Hva skjer med dataene våre da?", url:"konkurs.html"},
    { title: "Nå er iOS 18.4 her", url:"ios18.html"},
    { title: "Toppforsker slutter i Google og advarer mot kunstig intelligens", url:"toppforsker.html"},
    { title: "Nintendo har tre Switch 2-dager denne uken", url:"nintendo2.html"}
];
const dropdown_content = document.getElementById("dropdown-content")
let search_result_number = 0;

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        localStorage.setItem("search", input.value);
        window.open("../search.html", "_self");
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
    const theme_icon = document.getElementById("theme_icon");    
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        theme_icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        localStorage.setItem("theme", "dark-mode");
    } else {
        theme_icon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
        localStorage.setItem("theme", "light-mode");
    }
    

}

function toggleTheme() {
    const theme = localStorage.getItem("theme");

    if (theme === "dark-mode") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

toggleTheme();




