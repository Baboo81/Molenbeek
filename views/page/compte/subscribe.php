 <?php
session_start();//Création de la session

//$baseDeDonnees = new PDO('mysql:host=lacalhost;dbname=users;charset=utf8;', 'root', 'root');
$baseDeDonnees = 'users.sql';

if(isset($_POST['Enregistrer'])){

        if(!empty($_POST['mail']) AND !empty($_POST ['password'])){

            $mail = htmlspecialchars($_POST['mail']);//htmlspecialchars est une sécurité qui permet d'éviter que l'utilisateur incorpore du code malvéillant
            $psw = sha1($_POST['password']);//sha1 est un système de cryptage de mot de passe
            $insertUser = $baseDeDonnees->prepare ('INSERT INTO users(mail, password)VALUES (?, ?)');//Pour ajouter l'utilisateur ds la BD avec les valeurs: mail et mot de passe
            $insertUser->execute (array($mail, $psw));//Execute la requete pour mettre les val ds un tableau

            $recupUser = $baseDeDonnees->prepare ('SELECT * FROM users WHERE mail = ? AND password = ?');//Récup le mail et le mdp
            $recupUser->execute(array($mail, $psw));

            if($recupUser->rowCount() > 0){//Si le user existe est sup à 0, on récup l'id

                //Déclaration session, afin recupérer l'id au niveau de la table
                $_SESSION['mail'] = $mail;
                $_SESSION['password'] = $psw;
                $_SESSION[id] = $recupUser->fetch()['id'];//fetch recupère l'id

            }

            echo $_SESSION['id'];//Affiche session id.

        }else{

            echo "Veuillez complétez tous les champs";

        }

}
?>
 
 <main>
        <div class="page-wrapper-login">
            <form action="" method="post" class="form">
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
