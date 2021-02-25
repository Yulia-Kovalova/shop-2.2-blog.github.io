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
// let modal = document.querySelector(".modal");
// let closeBtn = document.querySelector(".modal-close-btn");
// let bodyHeight = document.querySelector(".main").scrollHeight;
// let clientYOffset = window.pageYOffset;


// if (clientYOffset < bodyHeight / 2) {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// } else {
//     modal.classList.add("show");
//     modal.classList.remove("hide");
// }

// closeBtn.addEventListener("click", function() {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
// })

// modal.addEventListener("click", function(e) {
//     if(e.target===modal) {
//         modal.classList.add("hide");
//         modal.classList.remove("show")
//     }
// })
//не працює


//********************************* */
//Вирішення по відео уроцу 22
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal-close-btn");

function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll);


closeBtn.addEventListener("click", closeModal)

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click", function(e) {
    console.log(e.target)
    if(e.target===modal) {
        closeModal()
    }
})