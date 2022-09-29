// Création de la map numéro 3:

const centroid = [50.859619, 4.316703];
const map = L.map('mapid').setView(centroid, 16.5);
// const map = L.map('mapid1').setView(centroid, 16.5);

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
<b>Chateau du Karreveld</b>
<br>
<img class="mini" src="./assets/img/itinéraire3/photo2.JPG" alt="un truc" />
<br>
Niveau de difficulté : facile
<br>
Distance : 1.5km<br>Dénivelé : nulle`
// const marker1_blue = L.marker([50.86048, 4.31557], { icon: blueIcon}) // Génération du marqueur                                 
//     .bindPopup(textMarker1)                     // Ajout du popup au marker
//     .openPopup();                               // Ouvre le popup

// const marke1_red = L.marker([50.86048, 4.31557], { icon: redIcon}) // Génération du marqueur
//     .addTo(map)                                 // Ajout à la carte    
//     .bindPopup(textMarker1)                     // Ajout du popup au marker
//     .openPopup();                               // Ouvre le popup

textMarker2 = `
<b>Sculture de l'argent</b>
<br>
<img class="mini" src="./assets/img/itinéraire3/flic.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 2.5km<br>Dénivelé : nulle  `
// const marker2 = L.marker([50.85968, 4.34562])
//     .addTo(map)
//     .bindPopup(textMarker2);

textMarker3 = ` 
<b>Gare-aux-fantomes</b>
<br>
<img class="mini" src="./assets/img/itinéraire3/photo12.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 3.5km<br>Dénivelé : nulle  `

// const marker3_blue = L.marker([50.857623, 4.325175], { icon: blueIcon})
//     .addTo(map)
//     .bindPopup(textMarker3);
    
// const marker3_red = L.marker([50.857623, 4.325175], { icon: redIcon})
//     .bindPopup(textMarker3);

textMarker4 = `
<b>Maison culturelle Molenbeek</b>
<br>
<img class="mini" src="./assets/img/itinéraire3/asbl.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 4.5km<br>Dénivelé : nulle    `
// const marker4 = L.marker([50.85802, 4.33831]).addTo(map)
//     .addTo(map)
//     .bindPopup(textMarker4);

textMarker5 = `
<b></b>
<br>
<img class="mini" src="./assets/img/itinéraire3/saint-baptiste.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 5.5km<br>Dénivelé : nulle   `
// const marker5 = L.marker([50.854320, 4.316353]).addTo(map)
//     .addTo(map)
//     .bindPopup(textMarker5);

textMarker6 = `
<b></b>
<br>
<img class="mini" src="./assets/img/itinéraire3/placeCommunale.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 6.5km<br>Dénivelé : nulle    `
// const marker6 = L.marker([50.851194, 4.313364]).addTo(map)
//     .addTo(map)
//     .bindPopup(textMarker6);

textMarker7 = `
<b></b>
<br>
<img class="mini" src="./assets/img/itinéraire3/fonderie.JPG" alt="" />
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `
// const marker7 = L.marker([50.851597, 4.300140]).addTo(map)
//     .addTo(map)
//     .bindPopup(textMarker7);

// ------------------------

const markers = [
    [
        L.marker([50.86048, 4.31557], { icon: blueIcon})                                 
        .bindPopup(textMarker1)
        .openPopup(), 
        L.marker([50.86048, 4.31557], { icon: redIcon})
        .addTo(map)                                     
        .bindPopup(textMarker1)                     
        .openPopup()
    ],
    [
        L.marker([50.85968, 4.34562], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker2),
        L.marker([50.85968, 4.34562], { icon: redIcon})
        .bindPopup(textMarker2)
    ],
    [
        L.marker([50.857623, 4.325175], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker3),
        L.marker([50.857623, 4.325175], { icon: redIcon})
        .bindPopup(textMarker3)
    ],
    [
        L.marker([50.85802, 4.33831], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker4),
        L.marker([50.85802, 4.33831], { icon: redIcon})
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

$(document).ready(function(){

$("#chateaudukarreveld").click(function (){
        update_markers(0);
});

$("#sculpturedelagent").click(function (){
        update_markers(1);
});

$("#gareauxfantomes").click(function (){
    update_markers(2);
});

$("#maisondescultures").click(function (){
    update_markers(3);
});

$("#eglisebaptiste").click(function (){
    update_markers(4);
});

$("#maisoncommunale").click(function (){
    update_markers(5);
});

$("#fonderie").click(function (){
    update_markers(6);
});


});

function update_markers(new_red) {
    if (new_red !== current_red){
        markers[new_red][0].removeFrom(map);
        markers[new_red][1].addTo(map).openPopup();

        markers[current_red][1].removeFrom(map);
        markers[current_red][0].addTo(map);

        current_red = new_red;
    }
}