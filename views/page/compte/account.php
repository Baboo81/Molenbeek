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

        if(isset($_POST['user'],$_POST['mail'] $_POST['password'])){
            
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