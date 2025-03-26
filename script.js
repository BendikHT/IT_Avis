document.addEventListener("click", function(event) {
    targetId = event.target.id;
    if(targetId === "") {
        return
    }
    console.log("You clicked on a div with id:", targetId);
});