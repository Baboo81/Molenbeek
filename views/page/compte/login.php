
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