let submenu = document.querySelector('.submenu');
let dropdown = document.querySelector("#first-child");
let dropdownArrow  = document.querySelector("#dropdown-arrow");
let subItems = document.querySelectorAll(".submenu li a");


dropdown.addEventListener("click", () => {
    submenu.classList.toggle("hidden");
    dropdownArrow.classList.toggle("rotate");
    dropdownArrow.style.transition = "all ease-in 400ms";
    dropdown.classList.toggle("active");
    dropdown.style.transition = "all 400ms";
});

console.log(submenu, dropdown, dropdownArrow, subItems);
