// document.querySelector(()=>{
    const buttonMenu = document.querySelector(".button--menu");

    const menu = document.querySelector(".menu");
    console.log(buttonMenu, menu);

    buttonMenu.addEventListener("click", function() {
        menu.classList.toggle("menuItemClicked");
        if (buttonMenu.innerHTML === `<i class="fa-solid fa-bars"></i>`) {
            buttonMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        } else {
            buttonMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        }
    });