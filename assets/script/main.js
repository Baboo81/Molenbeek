// swap intro image for bigger version when screen width above 1025px using JS media queries
// récupérer élément
const cityscape = document.getElementById("cityscape");
const logo = document.querySelector("#intro-title img");
console.log(logo);

function changePic(x) {

    if (x.matches) { // Si media query correspond, changez le src de img#cityscape.
      cityscape.src = "/assets/img/illustrations/Molenbeek-scene-lg.svg";
      logo.src = "/assets/img/logos/logo-uni-3.svg"
    } else {
        cityscape.src = "/assets/img/illustrations/Molenbeek-scene-mobile-outline.svg";
        logo.src = "/assets/img/logos/logo-uni.svg"
    }
  }
  
  let x = window.matchMedia("(min-width: 1025px)");
  changePic(x); // Call listener function at run time
