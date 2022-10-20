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
                    <input class="btn btn--dark" type="submit" value="Enregistrer">
                </div>
                <span class="form__help"><a href="?nav=login">
                        Vous avez déjà un compte ?
                    </a></span>


            </form>

        </div>
    </main>
