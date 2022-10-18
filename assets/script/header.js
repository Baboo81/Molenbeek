let menuItems = document.querySelector( '.menu-items' );
let submenu = document.querySelector( '.submenu' );
let dropdown = document.querySelector( "#first-child" );
let dropdownArrow = document.querySelector( "#dropdown-arrow" );
let subItems = document.querySelectorAll( ".submenu li a" );
let burger = document.querySelector( '.hamburger-lines' );
let line1 = document.querySelector( ".line1" );
let line2 = document.querySelector( ".line2" );
let line3 = document.querySelector( ".line3" );

function switchMenu ( z )
{
    if ( z.matches )
    {
        burger.style.display = "none";
        burger.classList.remove( "checked" );
        menuItems.classList.add( "desktop" );
        dropdownArrow.style.display = "none";

        dropdown.addEventListener( "click", () =>
        {
            submenu.classList.toggle( "hidden" );
            dropdown.classList.toggle( "active" );
            dropdown.style.transition = "all 400ms";
        } );

    } else
    {
        burger.style.display = "flex";

        dropdown.addEventListener( "click", () =>
        {
            submenu.classList.toggle( "hidden" );
            dropdownArrow.classList.toggle( "rotate" );
            dropdownArrow.style.transition = "all ease-in 400ms";
            dropdown.classList.toggle( "active" );
            dropdown.style.transition = "all 400ms";
        } );
    }
}


let z = window.matchMedia( "(min-width: 961px)" );
switchMenu( z );

burger.addEventListener( "click", () =>
{
    burger.classList.toggle( "checked" );
} );





console.log( submenu, dropdown, dropdownArrow, subItems, menuItems );
