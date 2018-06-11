<?php
@session_start();

class controller_examen {

    function __construct() {        
        $_SESSION['module'] = "examen";
    }
     

    function a(){
        // echo ($_GET["param"]);exit;
        // echo (MODEL_EXAMEN);exit;
        $cursos = loadModel(MODEL_EXAMEN, "examen_model", "nombre", $_GET["param"]);
        echo json_encode($cursos);exit;
    }


}/*end class*/
