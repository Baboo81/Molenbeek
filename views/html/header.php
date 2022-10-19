<!DOCTYPE html>
<html lang="en">

<!-- TODO Créer barre de navigation classique pour le site desktop -->
<!-- TODO Media queries - le projet -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.6.0.js"
		integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<!--Lien : main.css : Rassemble toutes les feuilles de style scss, compilées en css. -->
	<link rel="stylesheet" href="assets/css/main.css">
	<!--Lien pour leaflet-->
	<!-- <link rel="stylesheet" href="./assets/css/style-1.css"> -->
	<link rel="stylesheet" href="assets/css/modules/slider.css">
	<!--Leaflet.js -->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin="" />

	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
		integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
		crossorigin=""></script>
	</script>
	<script src="assets/script/slider.js" defer></script>
	<!--Lien  trace itinéraire-->
	<script src="assets/script/header.js" defer></script>
	<script src="assets/script/footer.js" defer></script>
	<script src="assets/script/main.js" defer></script>
	<script src="assets/script/menu-BEM.js" defer></script>
    <!-- icônes fontawesome -->
    <script src="https://kit.fontawesome.com/f64cbb42a1.js" crossorigin="anonymous"></script>



</head>


<body>
<a name="top"></a>
	<header class="global-header">
		<div class="menu">
			<div class="menu__container">
			  <a class="menu__logo">
				<img src="assets/img/logos/logo-uni.svg" alt="logo">
			  </a>
			  <div class="menu__items">
				<a class="menu__item"><i class="fa-solid fa-house"></i></a>
				<a class="menu__item menu__trigger">Itinéraires</a>
				<div class="menu__dropdown">
				  <a class="menu__item menu__item--sub" href="?nav=itin1">Molenbeek en vélo<i class="fa-solid fa-arrow-right"></i></a>
				  <a class="menu__item menu__item--sub" href="?nav=itin2">Molenbeek maritime<i class="fa-solid fa-arrow-right"></i></a>
				  <a class="menu__item menu__item--sub" href="?nav=itin3">Molenbeek historique<i class="fa-solid fa-arrow-right"></i></a>
				</div>
				<a class="menu__item" href="?nav=projet">Projet</a>
				<a class="menu__item" href="?nav=galerie">Galerie</a>
				<a class="menu__item menu__item--active" href="?nav=contact">Contact</a>
			  </div>
			  <div class="menu__items">
				<a class="menu__item menu__item--login" href="?nav=login"> <span>Se connecter</span></a>
				<a class="menu__item menu__item--white menu__item--register" href="?nav=subscribe"> <span>Enregistrer</span></a>
			  </div>
			  <button class="button button--menu"><i class="fa-solid fa-bars"></i></button>
			</div>
		  </div>
	</header>