// Création de la map numéro 1:

const centroid = [50.859619, 4.316703];
const map = L.map('mapid1').setView(centroid, 16.5);

//Définition des couleurs des marqeurs
let current_red = 0;


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

// Add OSM tiles:
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Ajout de POI: cfr:json1.js


// //Génération des marqeurs + paramètre changement couleur:
const popupTemplate = `
    <b>__lieu__</b>
    <br>
    <img src="__img__" alt="parc du Scheutbos" />
    <br>
    Niveau de difficulté : __difficulte__
    <br>
    Distance : __distance__km<br>Dénivelé : __dinivele  
`;

const markers = DATA.map(d => [
    L.marker([d.lat, d.lng], { icon: blueIcon}) 
    .addTo(map)                                
    .bindPopup(popupTemplate
        .replace('__lieu__', d.lieu)
        .replace('__img__', d.image)
        .replace('__difficulte__', d.difficulte)
        .replace('__distance__', d.distance)
        .replace('__denivele__', d.denivele)
    ),
    L.marker([d.lat, d.lng], { icon: redIcon})
                                        
    .bindPopup(popupTemplate
        .replace('__lieu__', d.lieu)
        .replace('__img__', d.image)
        .replace('__difficulte__', d.difficulte)
        .replace('__distance__', d.distance)
        .replace('__denivele__', d.denivele)
    )                   
])

markers[0][1].openPopup();


//Récupération des id pour créer une fonction qui permet de cliquer sur les liens:

const linkTemplate = `<span class="clickable"><li>__lieu__</li></span>`;

$(document).ready(function(){


    for(let index in DATA) {
        const link = $(linkTemplate.replace('__lieu__', DATA[index].lieu)).click(function (){
            update_markers(index);
        });
        $('.links').append(link);
    }

    
    
    
    });
    
//Fonction:
    
    function update_markers(new_red) {
        if (new_red !== current_red){
            markers[new_red][0].removeFrom(map);
            markers[new_red][1].addTo(map).openPopup();
    
            markers[current_red][1].removeFrom(map);
            markers[current_red][0].addTo(map);
    
            current_red = new_red;
        }
    }
    

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

var polyline = L.polyline(latLng, {color: '#003366'}).addTo(map);

