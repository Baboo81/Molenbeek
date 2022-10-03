// Création de la map numéro 2:

const centroid = [50.85538037305153, 4.339400499483728];
const map = L.map('mapid2').setView(centroid, 16.5);

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
<b>Station métro : Comte de Flandre</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Comte de Flandre.jpeg" alt="Station métro Comte de Flandre " />
<br>
Rue Sainte-Marie 1-6, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 1.5km<br>Dénivelé : nulle`


textMarker2 = `
<b>Administration communale de Molenbeek Saint-Jean</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Maison_Communale_1-sm.jpeg" alt="Administration communale de Molenbeek Saint-Jean" />
<br>
Rue du Comte de Flandre 20, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 2.5km<br>Dénivelé : nulle  `


textMarker3 = ` 
<b>La flamme de l'espoir</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Flamme-sm.jpeg" alt="Monument: flamme de l'espoir" />
<br>
Place Communale, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 3.5km<br>Dénivelé : nulle  `


textMarker4 = `
<b>Place communale</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Maison_Communale_1.jpeg" alt="Maison communale de Molenbeek Saint-Jean" />
<br>
Niveau de difficulté : facile
<br>
Distance : 4.5km<br>Dénivelé : nulle    `


textMarker5 = `
<b>Rue Fin</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Rue_Fin-sm.jpeg" alt="Habitations rue Fin" />
<br>
Rue Fin, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 5.5km<br>Dénivelé : nulle   `

textMarker6 = `
<b>La fonderie</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Fonderie_2-sm.jpeg" alt="La fonderie" />
<br>
Rue Ransfort 27, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 6.5km<br>Dénivelé : nulle    `


textMarker7 = `
<b>Parc de la fonderie</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Parc_Fonderie-sm.jpeg" alt="Parc de la Fonderie" />
<br>
Rue de l'Éléphant, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker8 = `
<b>Belmundo / Hôtel BELVUE</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Belmundo-sm.jpeg" alt="Batiment Belmundo" />
<br>
Quai du Hainaut 41-43, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker9 = `
<b>Atelier Groot Eiland</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Groot_Eiland-sm.jpeg" alt="Batiment de l'atelier" />
<br>
Quai du Hainaut 29, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `



textMarker10 = `
<b>Le phare du Canal</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Phare-sm.jpeg" alt="Le phare du Canal" />
<br>
Quai des Charbonnages 40, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `




textMarker11 = `
<b>C'est si bon</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Phare-sm.jpeg" alt="Le phare du Canal" />
<br>
Quai des Charbonnages 46, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker12 = `
<b>Le chhien du chien / Les tissus du chien vert</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/chien2-sm.jpeg" alt="Photo d'une bateau suspendu" />
<br>
Quai des Charbonnages 50A, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker13 = `
<b>De Vaartkapoen</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/De_Vaartkapoen.jpeg" alt="Sculpture d'un homme en bronze sortant des égouts" />
<br>
Pl. Sainctelette 1, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker14 = `
<b>Monument aux Promoteurs des Installations Maritimes</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Monument_aux_Promoteurs.jpeg" alt="Monument d'un lampadaire en bronze avec deux personnages à son pied" />
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker15 = `
<b>Foyer</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Foyer_2-sm.jpeg" alt="Façade du Foyer" />
<br>
Rue des Ateliers 25, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker16 = `
<b>Musée de la Migration (MMM)</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Musee_Migration-sm.jpeg" alt="Façade du Musée " />
<br>
Rue des Ateliers 17, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker17 = `
<b>Eglise St Jean-Baptiste</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/Eglise_SJB_2-sm.jpeg" alt="Eglise St Jean-Baptiste" />
<br>
Parv. Saint-Jean-Baptiste, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker18 = `
<b>Académie de Dessin et des Arts Visuels</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Academie_de_dessin.jpeg" alt="Façade de l'académie" />
<br>
Rue Mommaerts 2A, 1080 Molenbeek-Saint-Jean
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker19 = `
<b>Maison des cultures et de la Cohésion Sociale</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Maison_des_cultures_2.jpeg" alt="Molenbeek écrit en lettres 3D" />
<br>
Rue Mommaerts 4, 1080 Molenbeek-Saint-Jean
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker20 = `
<b>Panaderia Bakery</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Pandaria.jpeg" alt="Façade de la boulangerie" />
<br>
Rue de l'Ecole 56, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker21 = `
<b>Parc Bonnevie</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Pandaria.jpeg" alt="Façade de la boulangerie" />
<br>
Rue Bonnevie, 1080 Bxl
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


textMarker22 = `
<b>Place de la Minoterie</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Minoterie.jpeg" alt="Façade de la Minoterie" />
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `


//Génération des marqeurs + paramètre changement couleur:
const markers = [
    [
        L.marker([50.85538037305153, 4.339400499483728], { icon: blueIcon})                                 
        .bindPopup(textMarker1)
        .openPopup(), 
        L.marker([50.85538037305153, 4.339400499483728], { icon: redIcon})
        .addTo(map)                                     
        .bindPopup(textMarker1)                     
        .openPopup() 
    ],
    [
        L.marker([50.85533107240288, 4.3386152723646605], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker2),
        L.marker([50.85533107240288, 4.3386152723646605], { icon: redIcon})
        .bindPopup(textMarker2)
    ],
    [
        L.marker([50.854828, 4.338677], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker3),
        L.marker([50.854828, 4.338677], { icon: redIcon})
        .bindPopup(textMarker3)
    ],
    [
        L.marker([50.854702473961176, 4.338428822706077], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker4),
        L.marker([50.854702473961176, 4.338428822706077], { icon: redIcon})
        .bindPopup(textMarker4)
    ],
    [
        L.marker([50.85280408956153, 4.337271600409956], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker5),
        L.marker([50.85280408956153, 4.337271600409956], { icon: redIcon})
        .bindPopup(textMarker5)
    ],
    [
        L.marker([50.85265509314037, 4.335905653001505], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker6),
        L.marker([50.85265509314037, 4.335905653001505], { icon: redIcon})
        .bindPopup(textMarker6)
    ],
    [
        L.marker([50.85199792005185, 4.333654601478056], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker7),
        L.marker([50.85199792005185, 4.333654601478056], { icon: redIcon})
        .bindPopup(textMarker7)
    ],
    [
        L.marker([50.85107281916792, 4.337952130695064], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker8),
        L.marker([50.85107281916792, 4.337952130695064], { icon: redIcon})
        .bindPopup(textMarker8)
    ],
    [
        L.marker([50.852030028017204, 4.340462898557711], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker9),
        L.marker([50.852030028017204, 4.340462898557711], { icon: redIcon})
        .bindPopup(textMarker9)
    ],
    [
        L.marker([50.855654495785004, 4.342767434120627], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker10),
        L.marker([50.855654495785004, 4.342767434120627], { icon: redIcon})
        .bindPopup(textMarker10)
    ],
    [
        L.marker([50.8557841196206, 4.3430386172498165], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker11),
        L.marker([50.8557841196206, 4.3430386172498165], { icon: redIcon})
        .bindPopup(textMarker11)
    ],
    [
        L.marker([50.85580918983987, 4.343160722759251], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker12),
        L.marker([50.85580918983987, 4.343160722759251], { icon: redIcon})
        .bindPopup(textMarker12)
    ],
    [
        L.marker([50.858742065666554, 4.345308286498817], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker13),
        L.marker([50.858742065666554, 4.345308286498817], { icon: redIcon})
        .bindPopup(textMarker13)
    ],
    [
        L.marker([50.85906204560511, 4.3454303336194275], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker14),
        L.marker([50.85906204560511, 4.3454303336194275], { icon: redIcon})
        .bindPopup(textMarker14)
    ],
    [
        L.marker([50.85806470057518, 4.344168845750541], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker15),
        L.marker([50.85806470057518, 4.344168845750541], { icon: redIcon})
        .bindPopup(textMarker15)
    ],
    [
        L.marker([50.857969640331234, 4.343517590417422], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker16),
        L.marker([50.857969640331234, 4.343517590417422], { icon: redIcon})
        .bindPopup(textMarker16)
    ],
    [
        L.marker([50.85716936247415, 4.340373063361232], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker17),
        L.marker([50.85716936247415, 4.340373063361232], { icon: redIcon})
        .bindPopup(textMarker17)
    ],
    [
        L.marker([50.85778152952077, 4.338111889811175], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker18),
        L.marker([50.85778152952077, 4.338111889811175], { icon: redIcon})
        .bindPopup(textMarker18)
    ],
    [
        L.marker([50.85799147811224, 4.339367163590906], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker19),
        L.marker([50.85799147811224, 4.339367163590906], { icon: redIcon})
        .bindPopup(textMarker19)
    ],
    [
        L.marker([50.85627559448729, 4.338123506857903], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker20),
        L.marker([50.85627559448729, 4.338123506857903], { icon: redIcon})
        .bindPopup(textMarker20)
    ],
    [
        L.marker([50.856402962322456, 4.336903220843801], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker21),
        L.marker([50.856402962322456, 4.336903220843801], { icon: redIcon})
        .bindPopup(textMarker21)
    ],
    [
        L.marker([50.855564, 4.341385], { icon: blueIcon})
        .addTo(map)
        .bindPopup(textMarker22),
        L.marker([50.855564, 4.341385], { icon: redIcon})
        .bindPopup(textMarker22)
    ]

 ];

//Récupération des id pour créer une fonction qui permet de cliquer sur les liens:

$(document).ready(function(){

    $("#stationMetroComteDeFlandre").click(function (){
            update_markers(0);
    });
    
    $("#administrationCommunale").click(function (){
            update_markers(1);
    });
    
    $("#laFlammeDeLespoir").click(function (){
        update_markers(2);
    });
    
    $("#placeCommunale").click(function (){
        update_markers(3);
    });
    
    $("#rueFin").click(function (){
        update_markers(4);
    });
    
    $("#laFonderie").click(function (){
        update_markers(5);
    });
    
    $("#parcDeLaFonderie").click(function (){
        update_markers(6);
    });

    $("#belmundoHotelBelvue").click(function(){
        update_markers(7);
    });

    $("#mima").click(function(){
        update_markers(8);
    });

    $("#atelierGrootEiland").click(function(){
        update_markers(9);
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

var polyline = L.polyline(latLng, {color: '#006600'}).addTo(map);

