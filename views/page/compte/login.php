
    <?php echo "Hello !";?>
    <main>
        <div class="page-wrapper-login">
            <form class="form" id="form-login" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <!-- <form class="form" method="post" action="?nav=accueil.php"> -->
                <h2>Login</h2>
                <div class="form__fields">
                <span>* le champ est requis</span>
                <div class="input-group">
                        <label for="prenom" class="input-group__label">Prénom :</label>
                        <input type="text" name="prenom" id="prenom" class="input-group__input" placeholder="Entrez votre prénom" value="<?php echo $prenom;?>" required>
                        <span class="error">* <?php echo $prenomErr;?></span>
                    </div>
                    <div class="input-group">
                        <label for="nom" class="input-group__label">Nom de famille :</label>
                        <input type="text" name="nom" id="nom" class="input-group__input" placeholder="Entrez votre nom de famille" value="<?php echo $nom;?>" required>
                        <span class="error">* <?php echo $nomErr;?></span>
                    </div>
                    <div class="input-group">
                        <label for="mail" class="input-group__label">Adresse mail :</label>
                        <input type="email" name="email" id="email" class="input-group__input" placeholder="Entrez votre adresse e-mail" value="<?php echo $email;?>" required>
                        <span class="error">* <?php echo $emailErr;?></span>
                    </div>
                    <div class="input-group">
                        <label for="password" class="input-group__label">Mot de passe :</label>
                        <input type="password" name="password" id="password" class="input-group__input" placeholder="Entrez votre mot de passe"
                            required>
                            <span class="error">* <?php echo $nameErr;?></span>
                    </div>
                    <span class="form__help"><a href="?nav=forgot-password">
                    Mot de passe oublié ?
                </a></span>
                </div>

                <!-- Démarrer la session - que mettre ici ?? -->

                <div class="button-wrapper form__submit">
                <a href="#"><input class="btn btn--dark" type="submit" name="submit" id="btn-connect" value="Connectez-vous"></a>
                </div>

                <span class="form__help">
                Nouvel utilisateur ? <a href="?nav=subscribe">Créez un compte ici
                </a></span>
                

            </form>

        </div>
        
    </main>

    <?php
// define variables and set to empty values
$prenomErr = $nomlErr = $emailErr = $passwordErr = "";
$prenom = $nom = $email = $password = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["prenom"])) {
      $prenomErr = "Vous devez entrer votre prénom";
    } else {
      $prenom = test_input($_POST["prenom"]);
          // check if first name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        $prenomErr = "Seulement des lettres et des espaces sont autorisés";
      }
    }
  
    if (empty($_POST["nom"])) {
      $nomErr = "Vous devez entrer votre nom";
    } else {
      $nom = test_input($_POST["nom"]);
          // check if last name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        $prenomErr = "Seulement des lettres et des espaces sont autorisés";
      }
    }
  
    if (empty($_POST["email"])) {
      $emailErr= "Vous devez entrer une adresse mail";
    } else {
        $email = test_input($_POST["email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $emailErr = "format invalide";
        }
    }
  
    if (empty($_POST["password"])) {
      $password = "Vous devez entrer un mot de passe";
    } else {
      $password = test_input($_POST["password"]);
    }

  }

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $prenom = test_input($_POST["prenom"]);
  $nom = test_input($_POST["nom"]);
  $email = test_input($_POST["email"]);
  $password = test_input($_POST["password"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php
echo "<h2>Your Input:</h2>";
echo $prenom;
echo "<br>";
echo $nom;
echo "<br>";
echo $email;
?>

<script>
var form = document.getElementById("login-form");

document.getElementById("btn-connect").addEventListener("click", function () {
  form.submit();
});
</script>