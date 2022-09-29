// Création de la map numéro 2:

const centroid = [50.85538037305153, 4.339400499483728];
const map = L.map('mapid').setView(centroid, 16.5);

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
const marker1 = L.marker([50.85538037305153, 4.339400499483728]) // Génération du marqueur
                 .addTo(map)                                 // Ajout à la carte
                 .bindPopup(textMarker1)                     // Ajout du popup au marker
                 .openPopup();                               // Ouvre le popup

textMarker2 = `
<b>Administration communale de Molenbeek Saint-Jean</b>
<br>
<img src="/assets/img/itinéraire2/maritime-sm/" alt="Administration communale de Molenbeek Saint-Jean" />
<br>
Rue du Comte de Flandre 20, 1080 Bxl
Niveau de difficulté : facile
<br>
Distance : 2.5km<br>Dénivelé : nulle  `
const marker2 = L.marker([50.85533107240288, 4.3386152723646605]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker2);

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

const marker3 = L.marker([50.854828, 4.338677]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker3);

textMarker4 = `
<b>Place communale</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Maison_Communale_1.jpeg" alt="Maison communale de Molenbeek Saint-Jean" />
<br>
Niveau de difficulté : facile
<br>
Distance : 4.5km<br>Dénivelé : nulle    `
const marker4 = L.marker([50.854702473961176, 4.338428822706077]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker4);

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
const marker5 = L.marker([50.85280408956153, 4.337271600409956]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker5);

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
const marker6 = L.marker([50.85265509314037, 4.335905653001505]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker6);

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
const marker7 = L.marker([50.85199792005185, 4.333654601478056]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker7);

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
const marker8 = L.marker([50.85107281916792, 4.337952130695064]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker8);

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
const marker9 = L.marker([50.852030028017204, 4.340462898557711]).addTo(map)
                 .addTo(map)
                 .bindPopup(textMarker9);


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


const marker10 = L.marker([50.855654495785004, 4.342767434120627]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker10);

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
const marker11 = L.marker([50.8557841196206, 4.3430386172498165]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker11);

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
const marker12 = L.marker([50.85580918983987, 4.343160722759251]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker12);

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
const marker13 = L.marker([50.858742065666554, 4.345308286498817]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker13);

textMarker14 = `
<b>Monument aux Promoteurs des Installations Maritimes</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Monument_aux_Promoteurs.jpeg" alt="Monument d'un lampadaire en bronze avec deux personnages à son pied" />
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `
const marker14 = L.marker([50.85906204560511, 4.3454303336194275]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker14);

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
const marker15 = L.marker([50.85806470057518, 4.344168845750541]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker15);

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
const marker16 = L.marker([50.857969640331234, 4.343517590417422]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker16);

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
const marker17 = L.marker([50.85716936247415, 4.340373063361232]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker17);

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
const marker18 = L.marker([50.85778152952077, 4.338111889811175]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker18);

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
const marker19 = L.marker([50.85799147811224, 4.339367163590906]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker19);

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
const marker20 = L.marker([50.85627559448729, 4.338123506857903]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker20);

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
const marker21 = L.marker([50.856402962322456, 4.336903220843801]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker21);

textMarker22 = `
<b>Place de la Minoterie</b>
<br>
<img src="/assets/img/itinéraire2/maritime-lg/Minoterie.jpeg" alt="Façade de la Minoterie" />
<br>
Niveau de difficulté : facile
<br>
Distance : 7.5km<br>Dénivelé : nulle    `
const marker22 = L.marker([50.855564, 4.341385]).addTo(map)
                  .addTo(map)
                  .bindPopup(textMarker22);


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

var polyline = L.polyline(latLng, {color: 'red'}).addTo(map);

