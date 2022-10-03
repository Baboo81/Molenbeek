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

//Ajout de POI:

textMarker1 = `
<b>Parc du Karreveld</b>
<br>
<img src="/assets/img/itinéraire1/karreveld.JPG" alt="parc du Karreveld" />
<br>
Niveau de difficulté : facile
<br>
Distance : 1.5km<br>Dénivelé : nulle`
                         

textMarker2 = `
<b>Cimetière de Molenbeek</b>
<br>
<img src="/assets/img/itinéraire1/cimetiere.JPG" alt="cimetière de Molenbeek" />
<br>
Niveau de difficulté : facile
<br>
Distance : 2.5km<br>Dénivelé : nulle  `


textMarker3 = ` 
<b>Quartier Diongre</b>
<br>
<img src="/assets/img/itinéraire1/quartierDiongre.JPG" alt="maison du quartier Diongre" />
<br>
Niveau de difficulté : facile
<br>
Distance : 3.5km<br>Dénivelé : nulle  `



textMarker4 = `
<b>Stade Edmond Machtens</b>
<br>
<img src="/assets/img/itinéraire1/stade.jpeg" alt="stade de Molenbeek" />
<br>
Niveau de difficulté : facile
<br>
Distance : 4.5km<br>Dénivelé : nulle    `


textMarker5 = `
<b>Parc des muses</b>
<br>
<img src="/assets/img/itinéraire1/parcDesMuses.JPG" alt="parc des muses" />
<br>
Niveau de difficulté : facile
<br>
Distance : 5.5km<br>Dénivelé : nulle   `


textMarker6 = `
<b>Parc Albert & Marie-José</b>
<br>
<img src="/assets/img/itinéraire1/parcAlbert&MJ.JPG" alt="parc Albert et Marie-José" />
<br>
Niveau de difficulté : facile
<br>
Distance : 6.5km<br>Dénivelé : nulle    `


textMarker7 = `
<b>Parc du Scheutbos</b>
<br>
<img src="/assets/img/itinéraire1/parcScheutbos.JPG" alt="parc du Scheutbos" />
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `

//Génération des marqeurs + paramètre changement couleur:

const markers = [
    [
        L.marker([50.859619, 4.316703], { icon: blueIcon})                                 
        .bindPopup(textMarker1)
        .openPopup(), 
        L.marker([50.859619, 4.316703], { icon: redIcon})
        .addTo(map)                                     
        .bindPopup(textMarker1)                     
        .openPopup() 
    ],
    [
        L.marker([50.859936, 4.310880], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker2),
        L.marker([50.859936, 4.310880], { icon: redIcon})
        .bindPopup(textMarker2)
    ],
    [
        L.marker([50.857926, 4.308880], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker3),
        L.marker([50.857926, 4.308880], { icon: redIcon})
        .bindPopup(textMarker3)
    ],
    [
        L.marker([50.855942, 4.311382], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker4),
        L.marker([50.855942, 4.311382], { icon: redIcon})
        .bindPopup(textMarker4)
    ],
    [
        L.marker([50.854320, 4.316353], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker5),
        L.marker([50.854320, 4.316353], { icon: redIcon})
        .bindPopup(textMarker5)
    ],
    [
        L.marker([50.851194, 4.313364], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker6),
        L.marker([50.851194, 4.313364], { icon: redIcon})
        .bindPopup(textMarker6)
    ],
    [
        L.marker([50.851597, 4.300140], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker7),
        L.marker([50.851597, 4.300140], { icon: redIcon})
        .bindPopup(textMarker7) 
    ]
];

//Récupération des id pour créer une fonction qui permet de cliquer sur les liens:

$(document).ready(function(){

    $("#parcDuKarreveld").click(function (){
            update_markers(0);
    });
    
    $("#cimetiereDeMolenbeek").click(function (){
            update_markers(1);
    });
    
    $("#quartierDiongre").click(function (){
        update_markers(2);
    });
    
    $("#parcDuScheutbos").click(function (){
        update_markers(3);
    });
    
    $("#parcAlbertEtMarieJose").click(function (){
        update_markers(4);
    });
    
    $("#parcDesMuses").click(function (){
        update_markers(5);
    });
    
    $("#stadeDeMolenbeek").click(function (){
        update_markers(6);
    });
    
    
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

