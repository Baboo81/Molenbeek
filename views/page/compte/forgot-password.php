
    <main>
        <div class="page-wrapper-login">
            <form class="form" method="post" action="/assets/script/account.php">
                <h2>Mot de passe oublié ?</h2>
                <p>Ne vous inquiétez pas, ça arrive. Veuillez entrer l'adresse associée à votre compte.</p>
                <div class="form__fields">
                    <div class="input-group">
                        <label for="mail" class="input-group__label">Adresse mail :</label>
                        <input type="email" name="mail" id="mail" class="input-group__input" placeholder="Entrez votre adresse e-mail" required>
                    </div>
                </div>
                <div class="button-wrapper form__submit">
                    <input class="btn btn-dark" type="submit" value="Réinitialiser le mot de passe">
                </div>
                <span class="form__help"><a href="/views/login.html">
                    Retour à l'écran de connexion
                </a></span>
                <span class="form__help"><a href="/views/subscribe.html">
                    Pas encore de compte ?
                </a></span>

            </form>

        </div>
    </main>
