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
    <title>Inscription</title>
</head>

<!--TODO À SUIVRE : https://www.phptutorial.net/php-tutorial/php-registration-form/ -->

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
            <form action="register.php" method="post" class="form">
                <h2>Inscription</h2>
                <div class="form__fields">
                    <div class="input-group">
                        <label for="mail" class="input-group__label">Adresse mail :</label>
                        <input type="email" name="mail" id="mail" class="input-group__input"
                            placeholder="Entrez votre adresse e-mail" required>
                    </div>
                    <div class="input-group">
                        <label for="password" class="input-group__label">Mot de passe :</label>
                        <input type="password" name="password" id="password" class="input-group__input"
                            placeholder="Entrez votre mot de passe" required>
                    </div>
                    <div class="input-group">
                        <label for="password2" class="input-group__label">Confirmer le mot de passe :</label>
                        <input type="password" name="password2" id="password2" class="input-group__input"
                            placeholder="Entrez votre mot de passe" required>
                    </div>
                    <div class="input-group">
                        <label for="agree" class="input-group__label" >
                            <input type="checkbox" name="agree" id="agree" value="oui" class="input-group__checkbox" />
                            Je suis d'accord avec
                            <a href="#" title="term of services">les conditions de service</a>
                        </label>
                    </div>
                </div>
                <div class="button-wrapper form__submit">
                    <input class="btn btn-dark" type="submit" value="Enregistrer">
                </div>
                <span class="form__help"><a href="/views/login.html">
                        Vous avez déjà un compte ?
                    </a></span>


            </form>

        </div>
    </main>





        <!-- <form action="register.php" method="post">
            <h1>Sign Up</h1>
            <div>
                <label for="username">Username:</label>
                <input type="text" name="username" id="username">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password">
            </div>

            <div>
                <label for="agree">
                    <input type="checkbox" name="agree" id="agree" value="yes" /> I agree
                    with the
                    <a href="#" title="term of services">term of services</a>
                </label>
            </div>
            <button type="submit">Register</button>
            <footer>Already a member? <a href="login.php">Login here</a></footer>
        </form> -->

</body>

</html>