//
<?php
// trouve le chemin du serveur et du répertoire racine
$path = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
$path .= $_SERVER["SERVER_NAME"] . dirname($_SERVER["PHP_SELF"]);
echo $path;

// Utiliser <?php echo $path . "... "; pour des liens 
?>

<section class="section">

	<div class="map-container">
		<!--<div id="map" class="map"></div>-->
		<div id="mapid1" class="container-fluid"></div>
	</div>
	<div id="popup-card" class="popup-card"></div>
	<div class="legend-page-wrapper minimise-legende">

		<div class="title-box">
			<div class="tab-wrapper">
				<div class="tab tab--desktop minimise-text">Minimiser légende</div>
			</div>
			<h3>
				Parcours vélo (6,5km)
			</h3>
		</div>
		<div class="points-list">
		</div>
	</div>


	<div class="popup-container">
	</div>

</section>

<script src="./assets/script/json1.js" defer></script>
<script src="./assets/script/itin1.js" defer></script>