
    <main>
        <div class="page-wrapper-login">
            <form class="form" method="post" action="/assets/script/account.php">
                <h2>Nouveau mot de passe</h2>
                <div class="form__fields">
                    <div class="input-group">
                        <label for="password" class="input-group__label">Mot de passe :</label>
                        <input type="password" name="password" id="password" class="input-group__input"
                            placeholder="Entrez votre mot de passe" required>
                    </div>
                    <div class="input-group">
                        <label for="password2" class="input-group__label">Confirmer le nouveau mot de passe :</label>
                        <input type="password" name="password2" id="password2" class="input-group__input"
                            placeholder="Entrez votre mot de passe" required>
                    </div>
                </div>
                <div class="button-wrapper form__submit">

                    <!-- Quel lien pour le bouton ? -->
                    
                <a href="#"><input class="btn btn--dark" type="submit" value="Réinitialiser le mot de passe"></a>
                </div>
                <span class="form__help"><a href="?nav=login">
                    Retour à l'écran de connexion
                </a></span>

            </form>

        </div>
    </main>