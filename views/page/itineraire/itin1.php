<!-- <!DOCTYPE html>
<html lang="en">

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


	<!-- jQuery -->

		<!-- jQuery -->
		<!-- <script src="https://code.jquery.com/jquery-3.6.0.js"
		integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script> -->
	<!--Lien : main.css : Rassemble toutes les feuilles de style scss, compilées en css. -->
	<!-- <link rel="stylesheet" href="/assets/css/main.css">
	<link rel="stylesheet" href="/assets/css/modules/slider.css"> -->
	<!--Leaflet.js -->
	<!-- <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin="" />
		

	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
		crossorigin=""></script> -->
		
  		<!--Leaflet.js -->
	
	<!-- <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin="" />
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
		crossorigin=""></script>

	<script src="/assets/script/menu-BEM.js" defer></script>
	<script src="/assets/script/footer.js" defer></script>
	<script src="/assets/script/main.js" defer></script>
	<script src="/assets/script/json1.js" defer></script>
	<script src="/assets/script/itinéraire1.js" defer></script>

	<script src="https://kit.fontawesome.com/f64cbb42a1.js" crossorigin="anonymous"></script>


</head>

<body> -->
	<!--Barre de navigation-->
	<!-- <header class="global-header">

		<div class="menu">
			<div class="menu__container">
				<a class="menu__logo">
					<img src="/assets/img/logos/logo-uni.svg" alt="logo">
				</a>
				<div class="menu__items">
					<a class="menu__item"><i class="fa-solid fa-house"></i></a>
					<a class="menu__item menu__trigger">Itinéraires</a>
					<div class="menu__dropdown">
						<a class="menu__item menu__item--sub">Molenbeek en vélo<i
								class="fa-solid fa-arrow-right"></i></a>
						<a class="menu__item menu__item--sub">Molenbeek maritime<i
								class="fa-solid fa-arrow-right"></i></a>
						<a class="menu__item menu__item--sub">Molenbeek historique<i
								class="fa-solid fa-arrow-right"></i></a>
					</div>
					<a class="menu__item">Projet</a>
					<a class="menu__item">Galerie</a>
					<a class="menu__item menu__item--active">Contact</a>
				</div>
				<div class="menu__items">
					<a class="menu__item menu__item--login"> <span>Se connecter</span></a>
					<a class="menu__item menu__item--white menu__item--register"> <span>Enregistrer</span></a>
				</div>
				<button class="button button--menu"><i class="fa-solid fa-bars"></i></button>
			</div>
		</div>
	</header>  -->

	<!--Section itinéraire 1-->
	<section class="section">

		<div class="map-container">
			<!--<div id="map" class="map"></div>-->
			<div id="mapid1" class="container-fluid"></div>
		</div>
		<div class="legend-page-wrapper">
			<button class="minimise-legende">Minimiser légende<i class="fa-solid fa-xmark"></i></button>
			<div class="title-box">
			
				<h3>
					Parcours vélo (6,5km)
				</h3>
			</div>
			<div class="points-list">
				<ol class="links">
					<span class="clickable" id="parcDuKarreveld">
						<li>Parc du Karreveld</li>
					</span>
					<span class="clickable" id="cimetiereDeMolenbeek">
						<li>Cimetière de Molenbeek</li>
					</span>
					<span class="clickable" id="quartierDiongre">
						<li>Quartier Diongre</li>
					</span>
					<span class="clickable" id="parcDuScheutbos">
						<li>Stade Edmond Machtens</li>
					</span>
					<span class="clickable" id="parcAlbertEtMarieJose">
						<li>Parcs des Muses</li>
					</span>
					<span class="clickable" id="parcDesMuses">
						<li>Parcs Albert & Marie-José</li>
					</span>
					<span class="clickable" id="stadeDeMolenbeek">
						<li>Parc du Scheutbos</li>
					</span>
				</ol>
			</div>
			<!-- <div class="btn-wrapper-1"><button class="btn btn-dark"></button></div> -->
		</div>

	</section>
