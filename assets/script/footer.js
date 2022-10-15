// modifier l'innerHTML du footer lorsque la largeur de l'écran dépasse 961px

// récupérer élément
const footer = document.getElementsByTagName("footer")[0]; // [0] sélectionne le premier élément qui correspond;
console.log(footer);

// Fonction pour changer l'innerHTML du footer si le media query correspond à y
function changeFooter(y) {
    if (y.matches) { // Si le media query correspond...
        footer.innerHTML = `<div id="footer-inner">
			<div id="footer-top">
				<a href="/index.html"><img src="/assets/img/logos/logo-col.svg" alt="logo" id="logo-footer"></a>
			</div>

			<ul id="footer-links">
				<li>
					<a href="#">Vie privée</a>
				</li>
				<li>
					<a href="#">Conditions générales d’utilisation
					</a>
				</li>
				<li>
					<a href="#">Cookies</a>
				</li>
				<li>
					<a href="#">Transparence et Légal
					</a>
				</li>
			</ul>

			<div id="footer-contact">

				<address><a href="https://goo.gl/maps/bdHCxq9JNCSn16qPA" target="_blank">
					Interface3 | Rue Gaucheret 88-90 | 1030 Bruxelles</a>
				</address>
				<a href="tel:+32 (0)2 219 15 10">+32 (0)2 219 15 10</a>

				<p>© Christel Rodriguez Perez | Nasra Ahmed Ibrahim | Eleanor Mears, 2022</p>

			</div>
		</div>

		<div id="social">
			<a href="#"><img src="/assets/img/icons/icon-insta.svg" alt="Instagram"></a>
			<a href="#"><img src="/assets/img/icons/icon-fb.svg" alt="Facebook"></a>
			<a href="#"><img src="/assets/img/icons/icon-twitter.svg" alt="Twitter"></a>
			<a href="#"><img src="/assets/img/icons/icon-linkedin.svg" alt="Linkedin"></a>
		</div>`;
    }  
    else {
        footer.innerHTML = `
        <div id="footer-top">
            <img src="/assets/img/logos/logo-col.svg" alt="logo" id="logo-footer">
            <a href="#top" id="haut">
                <p>Haut de page</p>
                <img src="/assets/img/icons/arrow-up-1.svg" alt="flèche vers le haut">
            </a>
        </div>
        <div id="footer-middle">
            <div id="footer-contact">
                <div>
                   <address><a href="https://goo.gl/maps/bdHCxq9JNCSn16qPA" target="_blank">
					Interface3 | Rue Gaucheret 88-90 | 1030 Bruxelles</a>
				</address>
                    <a href="tel:+32 (0)2 219 15 10">+32 (0)2 219 15 10</a>
                </div>
                <div id="footer-copyright">
                    <p>© Christel Rodriguez Perez | Nasra Ahmed Ibrahim | Eleanor Mears, 2022</p>
                </div>
            </div>

            <div id="footer-bottom">
                <div id="social">
                    <a href="#"><img src="/assets/img/icons/icon-insta.svg" alt="Instagram"></a>
                    <a href="#"><img src="/assets/img/icons/icon-fb.svg" alt="Facebook"></a>
                    <a href="#"><img src="/assets/img/icons/icon-twitter.svg" alt="Twitter"></a>
                    <a href="#"><img src="/assets/img/icons/icon-linkedin.svg" alt="Linkedin"></a>
                </div>
                <ul id="footer-links">
                    <li>
                        <a href="#">Vie privée</a>
                    </li>
                    <li>
                        <a href="#">Conditions générales d’utilisation
                        </a>
                    </li>
                    <li>
                        <a href="#">Cookies</a>
                    </li>
                    <li>
                        <a href="#">Transparence et Légal
                        </a>
                    </li>
                </ul>
            </div>`
    }
}

// Appeler la fonction changePic() quand la taille d'écran dépasse 961px

let y = window.matchMedia("(min-width: 961px)");
  changeFooter(y);

