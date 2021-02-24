// burger menu mobile version
let mobileMenu = document.querySelector(".menu-mobile-burger");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu")
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})



// modal window 'describe' after vertical scroll 50% webpage
let modal = document.querySelector(".modal");
let CloseBtn = document.querySelector(".modal-close-btn");
let bodyHeight = document.querySelector(".main").scrollHeight;
let clientYOffset = window.pageYOffset;


if (clientYOffset < bodyHeight / 2) {
    modal.classList.add("hide");
    modal.classList.remove("show");
} else {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

CloseBtn.addEventListener("click", function() {
    modal.classList.add("hide");
    modal.classList.remove("show");
})

modal.addEventListener("click", function(e) {
    if(e.target===modal) {
        modal.classList.add("hide");
        modal.classList.remove("show")
    }
})
//не працює