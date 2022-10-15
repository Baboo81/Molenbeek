// Remplacez l'image "Molenbeek-scene-mobile-outline.svg" par "Molenbeek-scene-lg.svg" lorsque la largeur de l'écran dépasse 1025px en utilisant les requêtes multimédias JS. Même chose pour le logo.
// récupérer élément
const cityscape = document.getElementById("cityscape");
const logo = document.querySelector("#intro-title img");
console.log(logo);

function changePic(x) {

    if (x.matches) { // Si le media query correspond, changez le src de img#cityscape.
      cityscape.src = "/assets/img/illustrations/Molenbeek-scene-lg.svg";
      logo.src = "/assets/img/logos/logo-uni-3.svg"
    } else {
        cityscape.src = "/assets/img/illustrations/Molenbeek-scene-mobile-outline.svg";
        logo.src = "/assets/img/logos/logo-uni.svg"
    }
  }
  
  let x = window.matchMedia("(min-width: 1025px)");
  changePic(x); // appeler la fonction changePic() quand la taille d'écran dépasse 1025px

// recharger la page lorsque l'écran est redimensionné
  window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});
