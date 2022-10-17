// document.querySelector(()=>{
    const buttonMenu = document.querySelector(".button--menu");

    const menuDropdown = document.querySelector(".menu__dropdown");

    const menuTrigger = document.querySelector(".menu__trigger");

    const menuItemSub = document.querySelectorAll(".menu__item--sub");

    const menu = document.querySelector(".menu");
    console.log(buttonMenu, menu, menuDropdown, menuTrigger, menuItemSub);


    buttonMenu.addEventListener("click", function() {
        menu.classList.toggle("menuItemClicked");
        if (buttonMenu.innerHTML === `<i class="fa-solid fa-bars"></i>`) {
            buttonMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        } else {
            buttonMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        }
    });

    menuTrigger.addEventListener("click", function() {
        menuDropdown.classList.toggle("show-dropdown");
        menuTrigger.classList.toggle("active");
    });