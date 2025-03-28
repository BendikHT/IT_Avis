document.addEventListener("click", function (event) {
    let article = event.target.closest("article");
    if (article) {
        console.log(article.id);
        window.open(`artikkler/${article.id}.html`, "_self");
    }
});

function lesMer(){
    
}
