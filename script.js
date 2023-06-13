const makeAsRead = document.querySelector("#mark");

makeAsRead.addEventListener("click", () => {
    const unRead = document.querySelectorAll(".allUnread");
    const btn = document.getElementById("btn");
    btn.innerHTML = 0
    unRead.forEach(item => {
        item.className = "allread"
    });
    
})






