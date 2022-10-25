// DONE : Générer le conteneur popup ; 
// DONE : cacher le popup ;
// DONE : événement clic sur le marqueur : ajout d'une classe au conteneur popup
// DONE : changer les contenus de chaque popup à l'aide des données du tableau DATS_ITIN_1
// DONE fermer le pop up lorsque X est cliqué
// TODO lier les éléments de la liste de légende avec les marqueurs sur la carte.
// TODO Choisir le bon marqueur pour chaque marqueur (mettre les fichiers de marqueurs dans un tableau et associer le numéro 1 au premier marqueur, etc.)

let DATA_ITIN_1 = {
    routeInfo: [{
        distance: 8, // distance du trajet
        time: 2, // temps du trajet
        target: `` // personnes ciblées
    }],
    items: [{ 
        lat : 50.859619,
        lng: 4.316703,
        lieu: `Parc du Karreveld`,
        alt: `Parc du Karreveld`,
        image: `assets/img/itin3/karreveld.jpg`,
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://www.scheutbos.be/pages/les-sites-voisins/parc-du-karreveld.html`,
        website: `Parc du Karreveld`,
        description: `Ce parc de 3 hectares entoure la ferme du château de Karreveld et abrite de nombreux arbres remarquables, autochtones et exotiques.`
    },
    { 
        lat: 50.859936,
        lng: 4.310880,
        lieu: `Cimetière de Molenbeek`,
        alt: `Cimetière de Molenbeek`,
        image: `assets/img/itin1/cimetiere_card.JPG`,
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://www.lafonderie.be/2020/05/13/le-cimetiere-de-molenbeek/`,
        website: `Le cimetière de Molenbeek-Saint-Jean : visite guidée`,
        description: `Le cimetière de Molenbeek-Saint-Jean est un des plus anciens de Bruxelles. Il s'agit du premier cimetière laïque ouvert après la "guerre des cimetières" qui a fait rage au milieu du XIXe siècle entre catholiques et libéraux.`
    },
    {
        lat: 50.857926,
        lng: 4.308880,
        lieu: `Quartier Diongre`,
        image: `assets/img/itin1/diongre_card.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.visit.brussels/fr/visiteurs/venue-details.Cite-jardin-Diongre.277790`,
        website: `Cité-jardin Diongre`,
        description: `Le cité-jardin Diongre, construit entre 1922 et 1925, porte le nom de son architecte, Joseph Diongre, qui a aussi dessiné l'édifice Flagey et l'imposante église Saint-Jean-Baptiste à Molenbeek-Saint-Jean.`
    },
    {
        lat: 50.855942,
        lng: 4.311382,
        lieu: `Stade Edmond Machtens`,
        image: `assets/img/itin1/stade_card.jpg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.visit.https://www.rwdm.be/fr/stade-mobilite/`,
        website: `Stade Edmond Machtens : stade et mobilité`,
        description: `Le stade Edmond Machtens est actuellement le terrain de l'équipe de football RWD Molenbeek. Le club évolue en D1B depuis la saison 2021-2022.`

    },
    {
        lat: 50.854320,
        lng: 4.316353,
        lieu: `Parc des Muses`,
        image: `assets/img/itin1/parc-des-muses_card.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.scheutbos.be/pages/les-sites-voisins/parc-des-muses.html`,
        website: `Parc des Muses`,
        description: `Cette zone de verdure est dédiée aux Muses, les 9 filles de Zeus.`        
    },
    {
        lat: 50.851194,
        lng: 4.313364,
        lieu: `Parc Albert & Marie-José`,
        image: `assets/img/itin1/parc-albert_card.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.scheutbos.be/pages/les-sites-voisins/parc-marie-jose.html`,
        website: `Parc Albert & Marie-José`,
        description: `Ce parc de 4 hectares, situé à côté de la gare de l'ouest, comprend 3 étangs, de vastes pelouses, une hêtraie acidophile et beaucoup d'arbres remarquables. La municipalité de Molenbeek acquiert le terrain en 1920. L'architecte paysagiste Louis Van der Swaelmen en fit un parc public`
    },
    {
        lat: 50.851597,
        lng: 4.300140,
        lieu: `Parc Scheutbos`,
        image: `assets/img/itin1/scheutbos_card.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.scheutbos.be/`,
        website: `Parc Scheutbos`,
        description: `Le parc contient un certain nombre de potagers gérés par Bruxelles Environnement, ainsi qu'une grande aire de jeux d'aventure pour les enfants de 3 à 12 ans.`  
    }]
};

// Création de la map numéro 1:

const centroid = [50.855942, 4.311382];
const map = L.map('mapid1').setView(centroid, 14.5);//centroid 16.5

//Définition des couleurs des marqeurs
let current_red = 0;

// Fonction:
    
    function update_markers(new_red) {
        if (new_red !== current_red){
            markers[new_red][0].removeFrom(map);
            markers[new_red][1].addTo(map).openPopup();
    
            markers[current_red][1].removeFrom(map);
            markers[current_red][0].addTo(map);
    
            current_red = new_red;
        }
    }

let markers_itin = {
    dimensions: [{
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    }],
    imgs: [{
    }]
};
    
markers_itin.imgs.push(
'assets/img/icons/markers/1.svg',
'assets/img/icons/markers/2.svg', 
'assets/img/icons/markers/3.svg', 
'assets/img/icons/markers/4.svg',
'assets/img/icons/markers/5.svg',
'assets/img/icons/markers/6.svg',
'assets/img/icons/markers/7.svg',
'assets/img/icons/markers/8.svg',
'assets/img/icons/markers/9.svg',
'assets/img/icons/markers/10.svg',
'assets/img/icons/markers/11.svg',
'assets/img/icons/markers/12.svg',
'assets/img/icons/markers/13.svg',
'assets/img/icons/markers/14.svg',
'assets/img/icons/markers/15.svg',
'assets/img/icons/markers/16.svg',
'assets/img/icons/markers/17.svg',
'assets/img/icons/markers/18.svg',
'assets/img/icons/markers/19.svg',
'assets/img/icons/markers/20.svg',
'assets/img/icons/markers/21.svg',
'assets/img/icons/markers/22.svg',
'assets/img/icons/markers/23.svg',
'assets/img/icons/markers/24.svg',
'assets/img/icons/markers/25.svg'
);

// Créer un tableau de marqueurs
let mks = [];
let len = markers_itin.imgs.length;
console.log(len);

for (let i = 0; i < len; i++) {
    mks.push({
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        iconUrl: `${markers_itin.imgs[i]}`,
        markerID: `mk${[i]}`
    });
}

console.log(mks);

// Mettre les marqueurs dans les variables

const mk1 = new L.Icon({
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        iconUrl: `${markers_itin.imgs[1]}`,
        markerID: `mk${[1]}`
});

const mk2 = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconUrl: `${markers_itin.imgs[2]}`,
    markerID: `mk${[2]}`
});

const mk3 = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconUrl: `${markers_itin.imgs[3]}`,
    markerID: `mk${[3]}`
});

const mk4 = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconUrl: `${markers_itin.imgs[4]}`,
    markerID: `mk${[4]}`
});

const mk5 = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconUrl: `${markers_itin.imgs[5]}`,
    markerID: `mk${[5]}`
});

const mk6 = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconUrl: `${markers_itin.imgs[6]}`,
    markerID: `mk${[6]}`
});

const mk7 = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconUrl: `${markers_itin.imgs[7]}`,
    markerID: `mk${[7]}`
});

const mk8 = new L.Icon({
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    iconUrl: `${markers_itin.imgs[8]}`,
    markerID: `mk${[8]}`
});

markerArray = [mk1, mk2, mk3, mk4, mk5, mk6, mk7, mk8];

// Icônes alternatives

const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Récupération des id pour créer une fonction qui permet de cliquer sur les liens:








//     $(document).ready(function(){

//     for(let index in DATA_ITIN1) {
//         const link = $(linkTemplate.replace('__lieu__', DATA_ITIN1[index].lieu)).click(function (){
//             update_markers(index);
//         });
//         $('.links').append(link);
//     }
//     });

   

    

//Trace itinéraire:
var latLng = [
    [50.859619, 4.316703],
    [50.859936, 4.310880],
    [50.857926, 4.308880],
    [50.855942, 4.311382],
    [50.854320, 4.316353],
    [50.851194, 4.313364],
    [50.851597, 4.300140]
   
];

var polyline = L.polyline(latLng, {color: '#006600'}).addTo(map);

// légende

const legende = document.querySelector(".legend-page-wrapper");
const minimiseText = document.querySelector(".minimise-text");
const divClassChange = document.querySelector(".leaflet-popup");

minimiseText.addEventListener("click", function() {
    legende.classList.toggle("minimise");
    legende.style.transition = "all 0.5s";
    if (minimiseText.innerHTML === "Minimiser légende") {
        minimiseText.innerHTML = "Afficher légende";
    }

else {
    minimiseText.innerHTML = "Minimiser légende";
}
});


// obtenir des informations sur un élément particulier
const item_lat = DATA_ITIN_1.items[1].lat;
console.log(item_lat);

// Générer les éléments HTML du popup

const popupContainer = document.querySelector(".popup-container");
const popupContainerThumb = document.createElement("div");
popupContainerThumb.className = "popup-container__thumb";
popupContainer.appendChild(popupContainerThumb);
const popupContainerXWrap = document.createElement("div");
popupContainerXWrap.className = "x-wrap";
popupContainerThumb.appendChild(popupContainerXWrap);
const popupContainerX = document.createElement("i");
popupContainerX.className = "popup-container__x fa-solid fa-xmark";
popupContainerXWrap.appendChild(popupContainerX);
const popupContainerImg = document.createElement("img");
popupContainerImg.className = "popup-container__img";
popupContainerImg.setAttribute("src", `https://picsum.photos/200/300`);
popupContainerImg.setAttribute("alt", ``);
popupContainerThumb.appendChild(popupContainerImg);
const popupContainerInfo = document.createElement("div");
popupContainerInfo.className = "popup-container__info";
popupContainer.appendChild(popupContainerInfo);
const popupContainerTitle = document.createElement("h3");
popupContainerTitle.className = "popup-container__title";
popupContainerTitle.innerHTML = `le titre va ici`;
popupContainerInfo.appendChild(popupContainerTitle);
const popupContainerDescription = document.createElement("div");
popupContainerDescription.className = "popup-container__description";
popupContainerInfo.appendChild(popupContainerDescription);
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
p2.innerText = ``;
popupContainerDescription.appendChild(p1, p2);
const popupContainerWebsite = document.createElement("div");
popupContainerWebsite.className = "popup-container__website";
popupContainerInfo.appendChild(popupContainerWebsite);
const popupContainerGlobe = document.createElement("i");
popupContainerGlobe.className = "popup-container__globe fa-solid fa-globe";
const url = document.createElement("a");
url.setAttribute("href", "#");
url.setAttribute("target", "_blank");
url.innerText = `l'URL va ici`;
popupContainerWebsite.appendChild(popupContainerGlobe);
popupContainerWebsite.appendChild(url);

// cacher le popup lors du chargement de la page
console.log(popupContainer);
popupContainer.style.display  = 'none';
popupContainer.style.opacity = '0';

// Création des marqueurs
//! Je n'ai pas réussi à trouver comment boucler le tableau des marqueurs pour que le premier marqueur corresponde au premier point de l'itinéraire, le deuxième marqueur au deuxième point, etc.

let markers = [];


    let pointsList = document.querySelector(".points-list");
    console.log(pointsList);
    
    linksList = document.createElement("ol");
    linksList.className = "links";
    pointsList.appendChild(linksList);
    // let span = [`span1`, `span2`, `span3`, `span4`];
    for (let index = 0; index < DATA_ITIN_1.items.length; index++) {
        let span = document.createElement("span");
        span.className = "clickable";
        linksList.appendChild(span);
        let linkTemplate = document.createElement("li");
        span.appendChild(linkTemplate);
        linkTemplate.innerHTML = `${DATA_ITIN_1.items[index].lieu}`;
    

    
    }
    console.log(linksList);
    // const link = $(linkTemplate.replace('__lieu__', DATA_ITIN1[index].lieu)).click(function (){
    //     update_markers(index);
    // });
    // $('.links').append(link);
for (let index = 0; index < DATA_ITIN_1.items.length; index++) {
    markers[index] = new L.marker([DATA_ITIN_1.items[index].lat,DATA_ITIN_1.items[index].lng], { icon: blueIcon}).addTo(map)

    .on('click', function () {

        // insérer les données de DATA_ITIN_1 dans le popup pour chaque point
            popupContainerImg.setAttribute("src", `${DATA_ITIN_1.items[index].image}`);
            popupContainerImg.setAttribute("alt", `${DATA_ITIN_1.items[index].alt}`);
            popupContainerTitle.innerText = `${DATA_ITIN_1.items[index].lieu}`;
            popupContainerDescription.innerHTML = `<p>${DATA_ITIN_1.items[index].description}</p>`;
            url.href = `${DATA_ITIN_1.items[index].url}`;
            url.innerText = `${DATA_ITIN_1.items[index].website}`;
           // ajout/suppression de la classe 'show-popup' au popupContainer lorsque le marqueur est cliqué.
            popupContainer.classList.toggle('show-popup')
            // si popupContainer contient la classe "show-popup", display: flex; opacité : 1 ;
            if (popupContainer.classList.contains("show-popup")) {
            popupContainer.style.display = 'flex'   
                setTimeout(function () {
                popupContainer.style.opacity = 1;
              }, 100);
              popupContainer.style.transitionDuration = "1s";}
    
              // sinon, display: none; opacité : 0 ;
              else {
                popupContainer.style.opacity = 0;
                popupContainer.style.display = 'none';
                popupContainer.style.transitionDuration = "1s";
          }
        }
    )
    
    console.log(markers);
}

// DATA_ITIN_1.items.forEach((item, i) => 
// markers[i] = L.marker([item.lat,item.lng], { icon: mk1}).addTo(map)






// retirer la classe 'show-popup', display: none, opacity: 0
popupContainerXWrap.addEventListener('click', function () {
    popupContainer.classList.remove('show-popup');
        popupContainer.style.opacity = 0;
        popupContainer.style.display = 'none';
        popupContainer.style.transitionDuration = "1s";
    }
   //! why won't it fade out?
)
