<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/modules/menu-BEM.css">
    <link rel="stylesheet" href="/assets/css/modules/login.css">
    <script src="/assets/script/menu-BEM.js" defer></script>
    <script src="/assets/script/footer.js" defer></script>
    <title>Login</title>
</head>
<header>
    <div class="menu">
        <div class="menu__container">
            <a class="menu__logo">
                <img src="/assets/img/logos/logo-uni.svg" alt="logo">
            </a>
            <div class="menu__items">
                <a class="menu__item"><i class="fa-solid fa-house"></i></a>
                <a class="menu__item menu__trigger">Itinéraires</a>
                <div class="menu__dropdown">
                    <a class="menu__item menu__item--sub">Molenbeek en vélo<i class="fa-solid fa-arrow-right"></i></a>
                    <a class="menu__item menu__item--sub">Molenbeek maritime<i class="fa-solid fa-arrow-right"></i></a>
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



</header>

<body>
    <main>
        <div class="page-wrapper-login">
            <form class="form" method="post" action="/assets/script/account.php">
                <h2>Login</h2>
                <div class="form__fields">
                    <div class="input-group">
                        <label for="mail" class="input-group__label">Adresse mail :</label>
                        <input type="email" name="mail" id="mail" class="input-group__input" placeholder="Entrez votre adresse e-mail" required>
                    </div>
                    <div class="input-group">
                        <label for="password" class="input-group__label">Mot de passe :</label>
                        <input type="password" name="password" id="password" class="input-group__input" placeholder="Entrez votre mot de passe"
                            required>
                    </div>
                </div>
                <div class="button-wrapper form__submit">
                    <input class="btn btn-dark" type="submit" value="Connectez-vous">
                </div>
                <span class="form__help"><a href="/views/forgot-password.html">
                    Mot de passe oublié ?
                </a></span>

            </form>

        </div>
    </main>


</body>
<footer>

</footer>
</html>