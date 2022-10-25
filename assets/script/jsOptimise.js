// Création de la map numéro 2:

const centroid = [50.85538037305153, 4.339400499483728];
const map = L.map('mapid2').setView(centroid, 16.5);

// //Définition des couleurs des marqeurs
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

// // Add OSM tiles:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
   }).addTo(map);

// //Ajout de POI: cfr: json2.js

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
    ),                   
  ])

// markers[0][1].openPopup();

// //Récupération des id pour créer une fonction qui permet de cliquer sur les liens:

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
    



//const centroid = [50.85538037305153, 4.339400499483728];
//const map = L.map('mapid2').setView(centroid, 16.5);

//Trace itinéraire:
var latLng = [
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

var polyline = L.polyline(latLng, {color: '#003366'}).addTo(map);

