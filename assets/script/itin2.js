//Création map:
const centroid = [50.85538037305153, 4.339400499483728];
const map = L.map('mapid2').setView(centroid, 16.5);

//Trace itinéraire:
const latLng = [
    [50.85538037305153, 4.339400499483728],
    [50.85533107240288, 4.3386152723646605],
    [50.854828, 4.338677],
    [50.854702473961176, 4.338428822706077],
    [50.85280408956153, 4.337271600409956],
    [50.85265509314037, 4.335905653001505],
    [50.85199792005185, 4.333654601478056],
    [50.85107281916792, 4.337952130695064],
    [50.852030028017204, 4.340462898557711],
    [50.855654495785004, 4.342767434120627],
    [50.8557841196206, 4.3430386172498165],
    [50.85580918983987, 4.343160722759251],
    [50.858742065666554, 4.345308286498817],
    [50.85906204560511, 4.3454303336194275],
    [50.85806470057518, 4.344168845750541],
    [50.857969640331234, 4.343517590417422],
    [50.85716936247415, 4.340373063361232],
    [50.85778152952077, 4.338111889811175],
    [50.85799147811224, 4.339367163590906],
    [50.85627559448729, 4.338123506857903],
    [50.856402962322456, 4.336903220843801],
    [50.855564, 4.341385],
];

const polyline1 = L.polyline(latLng, {color: '#003366'}).addTo(map);


let DATA_ITIN_2 = {
    routeInfo: [{
        distance: 5, // distance du trajet
        time: 2, // temps du trajet
        target: `` // personnes ciblées
    }],
    items: [{ 
        lat : 50.85538037305153,
        lng: 4.339400499483728,
        lieu: `Comte de Flandre`,
        alt: `Station métro: Comte de Flandre`,
        image: `assets/img/itin2/maritime-lg/Comte de Flandre.jpeg`,
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://m.stib.be/`,
        website: `Le STIB`,
        description: `Comte de Flandre (en néerlandais : Graaf van Vlaanderen) est une station des lignes 1 et 5 du métro de Bruxelles. 
        Elle est située entre les stations Étangs Noirs et Sainte-Catherine.
        `
    },
    { 
        lat: 50.85533107240288,
        lng: 4.3386152723646605,
        lieu: `Administration communale`,
        alt: `Administration communale de Molenbeek`,
        image: `assets/img/itin2/maritime-lg/Maison_Communale_2.jpeg`,
        distance: 7.5,
        denivele: null,
        difficulte: `facile`, 
        url: `https://www.molenbeek.irisnet.be/fr/je-vis/administration-communale-1`,
        website: `Administration communale de Molenbeek`,
        description: `La commune offre de nombreux services: de l'accueil de la petite enfance à l'emploi, en passant par le logement, les activités culturelles, les événements pour les seniors. .
        .`
    },
    {
        lat: 50.854828,
        lng: 4.338677,
        lieu: `Flamme de l'espoir`,
        alt: `Flamme de l'espoir`,
        image: `assets/img/itin2/maritime-lg/Flamme.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `https://www.visit.brussels/fr/visiteurs/venue-details.Cite-jardin-Diongre.277790`,
        website: `Flamme de l'espoir`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        `
    },
    {
        lat: 50.854702473961176,
        lng: 4.338428822706077,
        lieu: `Place communale`,
        alt: `Place communale`,
        image: `assets/img/itin2/maritime-lg/Maison_Communale_2.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Place communale`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        `

    },
    {
        lat: 50.85280408956153,
        lng: 4.337271600409956,
        lieu: `Rue Fin`,
        alt: `Rue Fin`,
        image: `assets/img/itin2/maritime-lg/Rue_Fin.jpeg.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Rue Fin`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        `        
    },
    {
        lat: 50.85199792005185,
        lng: 4.333654601478056,
        lieu: `Parc de la Fonderie`,
        alt: `Parc de la Fonderie`,
        image: `assets/img/itin2/maritime-sm/Fonderie_2-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `La Fonderie`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        lat: 50.852030028017204,
        lng: 4.340462898557711,
        lieu: `Atelier Groot Eiland`,
        alt: `Atelier Groot Eiland`,
        image: `assets/img/itin2/maritime-sm/Groot_Eiland-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Atelier Groot Eiland`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`  
    },

    {
        lat: 50.855654495785004,
        lng: 4.342767434120627,
        lieu: `Phare du Canal`,
        alt: `Phare du Canal`,
        image: `assets/img/itin2/maritime-sm/Phare-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Phare du Canal`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.8557841196206,
        lng: 4.3430386172498165,
        lieu: `C'est si bon`,
        alt: `C'est si bon`,
        image: `/assets/img/itin2/maritime-sm/Phare-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `C'est si bon`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.85580918983987,
        lng: 4.343160722759251,
        lieu: `Le Chien du Chien`,
        alt: `Le Chien du Chien / Les tissus du chien vert`,
        image: `assets/img/itin2/maritime-sm/chien2-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Le Chien du Chien / Les tissus du chien vert`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.858742065666554,
        lng: 4.345308286498817,
        lieu: `De Vaartkapoen`,
        alt: `De Vaartkapoen`,
        image: `assets/img/itin2/maritime-sm/De_Vaartkapoen-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `De Vaartkapoen`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.85906204560511,
        lng: 4.3454303336194275,
        lieu: `Monument aux Promoteurs`,
        alt: `Monument aux Promoteurs des Installations Maritimes`,
        image: `assets/img/itin2/maritime-sm/Monument_aux_Promoteurs-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Monument aux Promoteurs des Installations Maritimes`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.85107281916792,
        lng: 4.337952130695064,
        lieu: `Foyer`,
        alt: `Foyer`,
        image: `assets/img/itin2/maritime-sm/Belmundo-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Foyer`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.85716936247415,
        lng: 4.340373063361232,
        lieu: `Eglise St Jean-Baptiste`,
        alt: `Eglise St Jean-Baptiste`,
        image: `assets/img/itin2/maritime-sm/Eglise_SJB_2-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Eglise St Jean-Baptiste`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.85778152952077,
        lng: 4.338111889811175,
        lieu: `Académie de Dessin`,
        alt: `Académie de Dessin et des Arts Visuels`,
        image: `ssets/img/itin2/maritime-sm/Academie_de_dessin-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Académie de Dessin et des Arts Visuels`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.85799147811224,
        lng: 4.339367163590906,
        lieu: `Maison des Cultures`,
        alt: `Maison des Cultures et de la Cohésion Sociale`,
        image: `assets/img/itin2/maritime-sm/Maison_des_cultures_1-sm`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Maison des Cultures et de la Cohésion Sociale`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.856402962322456,
        lng: 4.336903220843801,
        lieu: `Parc Bonnevie`,
        alt: `Parc Bonnevie`,
        image: `assets/img/itin2/maritime-sm/Bonnevie-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Parc Bonnevie`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`   
    },

    {
        lat: 50.855564,
        lng: 4.341385,
        lieu: `Place de la Minoterie`,
        alt: `Place de la Minoterie`,
        image: `assets/img/itin2/maritime-sm/Minoterie-sm.jpeg`,
        distance: 8,
        denivele: null,
        difficulte: `difficile`,
        url: `#`,
        website: `Place de la Minoterie`,
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




const polyline = L.polyline(latLng, {color: '#003366'}).addTo(map);

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
