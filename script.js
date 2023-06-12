const makeAsRead = document.querySelector("#mark");

makeAsRead.addEventListener("click", () => {
    const unRead = document.querySelectorAll(".allUnread");
    const btn = document.getElementById("btn");
    btn.style.display = "none"
    unRead.forEach(item => {
        item.className = "allread"
    });
    
})






