<?php
if (isset($_GET['nav'])) {
    switch ($_GET['nav']) {
        case 'itin1':
            include("controller/itineraire/itin1Controller.php");
            break;
        case 'itin2':
            include("controller/itineraire/itin2Controller.php");
            break;
        case 'itin3':
            include("controller/itineraire/itin3Controller.php");
            break;
        case 'projet':
            include("controller/projetController.php");
            break;
        case 'galerie':
            include("controller/galerieController.php");
            break;
        case 'contact':
            include("controller/contactController.php");
            break;
        case 'login':
            include("controller/compte/loginController.php");
            break;
        case 'subscribe':
            include("controller/compte/subscribeController.php");
            break;
        case 'projet':
            include("controller/projetController.php");
            break;
        case 'logout':
            include("controller/compte/logoutController.php");
            break;
        case 'forgot-password':
            include("controller/compte/forgotpasswordController.php");
            break;
        case 'reset-password':
            include("controller/compte/resetpasswordController.php");
            break;
    }
} else {
    include("controllers/accueilController.php");
};
?>