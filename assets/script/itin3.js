//Création map:
const centroid = [50.85538037305153, 4.339400499483728];
const map = L.map('mapid3').setView(centroid, 16.5);

//Trace itinéraire:
var latLng = [
    [50.86048,  4.31557],
    [50.85968, 4.34562],
    [50.857623, 4.325175],
    [50.85802, 4.33831],
    [50.854320, 4.316353],
    [50.851194, 4.313364],
    [50.851597, 4.300140],
];

var polyline = L.polyline(latLng, {color: '#003366'}).addTo(map);


let DATA_ITIN_2 = {
    routeInfo: [{
        distance: 5, // distance du trajet
        time: 2, // temps du trajet
        target: `` // personnes ciblées
    }],
    items: [{ 
        lat : 50.86048, 
        lng: 4.31557,
        lieu: `Chateau du Karreveld`,
        alt: `Chateau du Karreveld`,
        image: 'assets/img/itinéraire3/photo2.JPG',
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://m.stib.be/`,
        website: `La STIB`,
        description: `Parc du Karreveld.
        `
    },
    { 
        lat: 50.85968,
        lng: 4.34562,
        lieu: 'Sculpture de l\'agent',
        alt: 'Sculpture de l\'agent',
        image: 'assets/img/itinéraire3/flic.JPG',
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://www.molenbeek.irisnet.be/fr/je-vis/administration-communale-1`,
        website: `Administration communale de Molenbeek`,
        description: ` pas d'info
        .`
    },
    {
        lat: 50.857623,
        lng: 4.325175,
        lieu: 'Gare aux fantômes',
        alt: `Gare aux fantômes,`,
        image: `assets/img/itinéraire3/photo12.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.visit.brussels/fr/visiteurs/venue-details.Cite-jardin-Diongre.277790`,
        website: `Flamme de l'espoir`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        `
    },
    {
        lat: 50.85802,
        lng: 4.33831,
        lieu: `Maison culturelle de Molenbeek`,
        alt: `Maison culturelle de Molenbeek`,
        image: `assets/img/itinéraire3/asbl.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `pas d'info`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        `

    },
    {
        lat: 50.854320,
        lng: 4.316353,
        lieu: `L\' église St Jean-Baptiste`,
        alt: `L\' église St Jean-Baptiste`,
        image: `assets/img/itinéraire3/saint-baptiste.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `pas d'info`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        `        
    },
    {
        lat: 50.851194,
        lng: 4.313364,
        lieu: `Maison communale`,
        alt: `Maison communale`,
        image: `assets/img/itinéraire3/placeCommunale.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `pas d'info`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        lat: 50.851597,
        lng: 4.300140,
        lieu: `La Fonderie`,
        alt: `La Fonderie`,
        image: `assets/img/itinéraire3/fonderie.JPG`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `pas d'info`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`  
    }

    
]
};

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




var polyline = L.polyline(latLng, {color: '#003366'}).addTo(map);

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
const item_lat = DATA_ITIN_2.items[1].lat;
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
    for (let index = 0; index < DATA_ITIN_2.items.length; index++) {
        let span = document.createElement("span");
        span.className = "clickable";
        linksList.appendChild(span);
        let linkTemplate = document.createElement("li");
        span.appendChild(linkTemplate);
        linkTemplate.innerHTML = `${DATA_ITIN_2.items[index].lieu}`;
    

    
    }
    console.log(linksList);
    // const link = $(linkTemplate.replace('__lieu__', DATA_ITIN1[index].lieu)).click(function (){
    //     update_markers(index);
    // });
    // $('.links').append(link);
for (let index = 0; index < DATA_ITIN_2.items.length; index++) {
    markers[index] = new L.marker([DATA_ITIN_2.items[index].lat,DATA_ITIN_2.items[index].lng], { icon: blueIcon}).addTo(map)

    .on('click', function () {

        // insérer les données de DATA_ITIN_2 dans le popup pour chaque point
            popupContainerImg.setAttribute("src", `${DATA_ITIN_2.items[index].image}`);
            popupContainerImg.setAttribute("alt", `${DATA_ITIN_2.items[index].alt}`);
            popupContainerTitle.innerText = `${DATA_ITIN_2.items[index].lieu}`;
            popupContainerDescription.innerHTML = `<p>${DATA_ITIN_2.items[index].description}</p>`;
            url.href = `${DATA_ITIN_2.items[index].url}`;
            url.innerText = `${DATA_ITIN_2.items[index].website}`;
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

// DATA_ITIN_2.items.forEach((item, i) => 
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
