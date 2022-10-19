
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
                <a href="?nav=reset-password"><input class="btn btn-dark" type="submit" value="Réinitialiser le mot de passe"></a>
                </div>
                <span class="form__help"><a href="?nav=login">
                    Retour à l'écran de connexion
                </a></span>
                <span class="form__help">
                    Pas encore de compte ? <a href="?nav=subscribe">Créez-en un ici
                </a></span>

            </form>

        </div>
    </main>
