
    <main>
        <div class="page-wrapper-login">
            <form class="form" method="post" action="/assets/script/account.php">
                <h2>Login</h2>
                <div class="form__fields">
                <div class="input-group">
                        <label for="prenom" class="input-group__label">Prénom :</label>
                        <input type="email" name="prenom" id="prenom" class="input-group__input" placeholder="Entrez votre prénom" required>
                    </div>
                    <div class="input-group">
                        <label for="nom" class="input-group__label">Nom de famille :</label>
                        <input type="email" name="nom" id="nom" class="input-group__input" placeholder="Entrez votre nom de famille" required>
                    </div>
                    <div class="input-group">
                        <label for="mail" class="input-group__label">Adresse mail :</label>
                        <input type="email" name="mail" id="mail" class="input-group__input" placeholder="Entrez votre adresse e-mail" required>
                    </div>
                    <div class="input-group">
                        <label for="password" class="input-group__label">Mot de passe :</label>
                        <input type="password" name="password" id="password" class="input-group__input" placeholder="Entrez votre mot de passe"
                            required>
                    </div>
                    <span class="form__help"><a href="?nav=forgot-password">
                    Mot de passe oublié ?
                </a></span>
                </div>

                <!-- Démarrer la session - que mettre ici ?? -->

                <div class="button-wrapper form__submit">
                <a href="#"><input class="btn btn--dark" type="submit" value="Connectez-vous"></a>
                </div>

                <span class="form__help">
                Nouvel utilisateur ? <a href="?nav=subscribe">Créez un compte ici
                </a></span>
                

            </form>

        </div>
        
    </main>
    <?php
    try {//Objet PDO permet la connection à la BD:
        $mysqlClient = new PDO(
            sprintf('mysql:host=%s;dbname=%s;port=%s', 
            "localhost",
            "membres",
            3306),
            "root",
            "root"
        );
        $mysqlClient->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
    } catch(Exception $exception) {
        die('La connection a échoué : '.$exception->getMessage());
    }
?>
    
    <?php 
        /**
         * Vérification de l'utilisateur
         */
        $isFound = false; //connu
        $connectedUser;
        $loginAttempt = 0;

        if(isset($_POST['user'],$_POST['mail'],$_POST['password'])){
            
            $loginAttempt++;

            $user_user = $_POST['user'];
            $user_mail = $_POST['mail']; 
            $pass_word = $_POST['password'];

            $sqlQuery = "
                SELECT *
                FROM membres
                WHERE username = :param_username AND passwd = :param_password 
            ";

            $statement = $mysqlClient->prepare($sqlQuery); 
            $statement->execute(array("param_username" => $user_name, "param_password" => $pass_word));
            $result = $statement->fetchAll();  
         
            if($result){
                $isFound = true;
                $connectedUser = $result[0]['username'];
                $email = $result[0]['email'];
            }

        }

        if($isFound){

            echo "Bienvenue sur page d'accueil ! $connectedUser ($email)";

        }else{


            include_once('assets/views/login.html');


            if(!$isFound && $loginAttempt >=1 ){
                echo "Username and password incorrect! ";
                $loginAttempt = 0;
            }
            
        }

    ?>