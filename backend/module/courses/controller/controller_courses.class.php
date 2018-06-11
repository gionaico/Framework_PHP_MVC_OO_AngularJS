<?php
@session_start();

class controller_courses {

    function __construct() {        
        include(UTILS_COURSES . "validaCourses.php");         
        $_SESSION['module'] = "courses";
    }
     
    function puntos(){
        echo "string";exit;
    }

    function puntuarCurso(){
        $res["success"]=false;
        $verificaToken=verificaToken($_POST["token"]);
        if ($verificaToken["success"]) {
            try{
                $usuario = loadModel(MODEL_PROFILE, "profile_model", "userByToken", $_POST);
                if (count($usuario)==1) {
                    $res["success"]=true;
                    $datos=array(
                                "user"=>$usuario[0]["user_name"],
                                "id_curso"=>$_POST["curso"],
                                "puntos"=>$_POST["puntos"]);
                    // echo json_encode($datos);exit;          
                    

                    $verificaPuntos=loadModel(MODEL_COURSES, "courses_model", "verificaPuntos", $datos );
                    if (count($verificaPuntos)==0) {
                        $insertarPuntuacionComentario = loadModel(MODEL_COURSES, "courses_model", "insertarPuntuacion", $datos);
                        $res["mensaje"]="Puntiacion exitosa";    
                    }else{
                        $res["mensaje"]="Ya as puntuado este";        
                    }

                }else{
                    $res["mensaje"]="Error comprobacion de token";    
                }
            } catch (Exception $e) {
                $res["mensaje"]="Error comprobacion de datos.";
            }
            echo json_encode($res);exit;  
        }else{
            $res["mensaje"]="Error comprobacion de credenciales.";
            echo json_encode($res);exit;    
        }
        // echo json_encode($_POST);exit;
    }


    function verComentarios(){
        $id=$_GET['param'];
        $comentarios=loadModel(MODEL_COURSES, "courses_model", "verComentarios", $id);
        $json["comentarios"]=$comentarios;
        $json["curso"]=$id;

        echo json_encode($json);exit;
    }

    function comentarCurso(){
        $verificaToken=verificaToken($_POST["token"]);
        $res["success"]=false;
        if ($verificaToken["success"]) {
            try{
                $usuario = loadModel(MODEL_PROFILE, "profile_model", "userByToken", $_POST);
                if (count($usuario)==1) {
                        $datos=$_POST;
                        $datos["user_name"]=$usuario[0]["user_name"];
                        // echo json_encode($datos);exit;
                        $insertarComentario = loadModel(MODEL_COURSES, "courses_model", "insertarComentario", $datos);
                        $comentarios=loadModel(MODEL_COURSES, "courses_model", "verComentarios", $datos["curso"]);
                        
                        $res["success"]=true;
                        $res["mensaje"]="Tu comentario ha sido introducido exitosamente";
                        $res["comentarios"]=$comentarios;

                }else{
                    $res["mensaje"]="Error comprobacion de token";    
                }
            } catch (Exception $e) {
                $res["mensaje"]="Error comprobacion de credenciales.";
            }

        }else{
            $res["mensaje"]=$verificaToken["mensaje"];
        }
        echo json_encode($res);exit;
    }

    function getAllCourses(){
        $res=array(
                "success"=>false
            );
        try {
            $courses=loadModel(MODEL_COURSES, "courses_model", "getAllCourses");
            $cursosPuntuados=loadModel(MODEL_COURSES, "courses_model", "cursosPuntuados");
            // $a=array(
            //         );
            // $verificaPuntos=loadModel(MODEL_COURSES, "courses_model", "verificaPuntos" );

            $cursosPuntos=loadModel(MODEL_COURSES, "courses_model", "cursosPuntos");
            // $cursosMedia=loadModel(MODEL_COURSES, "courses_model", "cursosMedia");
            // SELECT Avg(p.puntuacion) AS Promedio FROM puntuaciones as p GROUP BY p.id_curso 

            for ($j=0; $j <count($courses) ; $j++) { 
                // $courses[$j]["cantPuntuaciones"]="0";
                $courses[$j]["media"]="0";
                for ($i=0; $i <count($cursosPuntuados) ; $i++) { 
                    if ($courses[$j]["id"]===$cursosPuntuados[$i]["id_curso"]) {
                        // $courses[$j]["cantPuntuaciones"]=$cursosPuntuados[$i]["cantidad"];
                        $courses[$j]["media"]=$cursosPuntuados[$i]["promedio"];
                    }
                }    
            }

            for ($j=0; $j <count($courses) ; $j++) { 
                $courses[$j]["cantPuntuaciones"]="0";
                // $courses[$j]["media"]="0";
                for ($i=0; $i <count($cursosPuntuados) ; $i++) { 
                    if ($courses[$j]["id"]===$cursosPuntos[$i]["id_curso"]) {
                        $courses[$j]["cantPuntuaciones"]=$cursosPuntos[$i]["cantidad"];
                        // $courses[$j]["media"]=$cursosPuntuados[$i]["promedio"];
                    }
                }    
            }

            $res["success"]=true;
            $res["category"]=$_GET['param'];
            $res["datos"]=$courses;
        } catch (Exception $e) {
            $res["mensaje"] ="Error en servidor. Intentalo mas tarde...";            
        }
        echo json_encode($res);
        exit; 
    }


    function getCoursesFiltrados(){
        if (isset($_POST["getCoursesFiltrados"]) && $_POST["getCoursesFiltrados"] == true) {
            $title=$_SESSION["filtros"]["title"];
            $category=$_SESSION["filtros"]["category"];
            $this->arrayFiltros();
            $_SESSION["filtros"]["title"]=$title;
            $_SESSION["filtros"]["category"]=$category;
            $cursos=$this->consultaFiltrada();

            echo json_encode($cursos);
            exit;
        }
    }

    function upload(){        
        $result_avatar = upload_files();
        $_SESSION['result_avatar'] = $result_avatar;            
    }


    public function consultaFiltrada(){
        if (!isset($_SESSION["filtros"])) {
                $this->arrayFiltros();  
            }

        // echo json_encode($datos);
        // exit;
        $filtros=$_SESSION["filtros"];
        $evio_loadModel = loadModel(MODEL_COURSES, "courses_model", "cursosFiltrados", $filtros);
        
        $datos=$this->cuentaPaginas($evio_loadModel);
        if (isset($_POST["consultaFiltrada"]) && $_POST["consultaFiltrada"] == true) {
            echo (json_encode($datos));
            exit;
        }
        return $datos;
    }

    function cambiarFiltros(){   
        $datosFil=json_decode($_POST["datosFiltros"], true);
        $this->EditArrayFiltros($datosFil);
        
        $cursos=$this->consultaFiltrada();
        echo json_encode($cursos);
        exit;       
    }

    public function arrayFiltros(){        
        $_SESSION["filtros"]=array(
                "category"=>"",
                "lenguage"=>"",
                "level"=>"",
                "title"=>"",
                "price"=>"",
                "sub_subject"=>"");            
    }

    public function EditArrayFiltros($datosFil){
        foreach($datosFil as $tipoFiltro=>$valorFiltro){
            if ($valorFiltro!="") {
                if ($valorFiltro==="all") {
                    $_SESSION["filtros"]["".$tipoFiltro.""]="";
                }else{
                    $_SESSION["filtros"]["".$tipoFiltro.""]=$valorFiltro;                                  
                }
            }
        } 

    }


    function resFiltros(){
        if ((isset($_POST["resFiltros"])) && ($_POST["resFiltros"] == true)) {
             
             $this->arrayFiltros();
            
            echo"";
            exit;
        }
    }

    function autocomplete(){
        if ((isset($_POST["autocomplete"])) && ($_POST["autocomplete"] == true)) {

            
            $evio_loadModel = loadModel(MODEL_COURSES, "courses_model", "autocomplete");

            echo json_encode($evio_loadModel);
            exit;
        }
    }

    function keyword(){
        if ((isset($_POST["keyword"])) && ($_POST["keyword"] == true)) {

            $_SESSION["filtros"]["title"]=$_POST["key"];
            
            $evio_loadModel = loadModel(MODEL_COURSES, "courses_model", "keyword", $_POST["key"]);

            $datos=$this->cuentaPaginas($evio_loadModel);        

            echo json_encode($datos);
            exit;
        }
    }

    function coursetDetails(){       
        // echo ($_GET['param']);exit;
        $id=$_GET['param'];
        $res=array(
                "success"=>false
            );

        try{
            $course = loadModel(MODEL_COURSES, "courses_model", "courseDetails", $id);
            $res["datos"] =$course;
            $res["success"]=true;            
        }catch(Exception $e){
            $res["mensaje"] ="Error en servidor. Intentalo mas tarde...";            
        }
        echo json_encode($res);
        exit;        
    }


    function courseVal(){
        /*echo "string";exit;*/
        if (isset($_POST['course_JSON'])) {	
            $this->alta_courses();    
        }else{echo "string";}
    }

    function delete(){
        $_SESSION['result_avatar'] = array();
        $result = remove_file();
        if ($result === true) {
            echo json_encode(array("res" => true));
            exit;
        } else {
            echo json_encode(array("res" => false));
            exit;
        }    
    }

    /**/
    public function cuentaPaginas($array){
        $filas=count($array);
        $pages=ceil($filas/3);
        $datos=array(
            "datos"=>$array,
            "pages"=>$pages,
            "filas"=>$filas);
        return $datos; 
    }

    public function alta_courses() {
    	$jsondata = array();
        $coursesJSON = json_decode($_POST["course_JSON"], true);        
        $result = validate($coursesJSON);
        $_SESSION['curso'] = $coursesJSON;
        if (empty($_SESSION['result_avatar'])) {
            $_SESSION['result_avatar'] = array('resultado' => true, 'error' => "", 'datos' => 'media/courses/default-potho.jpg');
        }

        $result_avatar = $_SESSION['result_avatar'];
        $_SESSION['result_avatar']=array();
	
        if (($result['resultado'])&&($result_avatar['resultado'])) {     
            $result['datos']['avatar']=$result_avatar['datos'];
                    
            $evio_loadModel = loadModel(MODEL_COURSES, "courses_model", "create_course", $result['datos']);
            if ($evio_loadModel){
                $mensaje = "User has been successfull registered";
                $jsondata["success"] = true;
                $callback = "http://localhost/Proyectos/GiovannyProy4/courses/new_course/";
                $jsondata["redirect"] = $callback;
                $_SESSION['cursoDet'] = $result['datos'];
            }else{
                $jsondata["success"] = false;
                $mensaje = "Problem ocurred registering user";
            }

            $jsondata["datos"]=$result['datos'];
            $jsondata["mensaje"]=$mensaje;
    	    echo json_encode($jsondata);
    	    exit;
        }else{    	
        	$jsondata["success"] = false;
            $jsondata["error"] = $result['error'];

            $jsondata['error_dubidaFoto'] = $result_avatar['error'];

            $jsondata['success1'] = false;

            if ($result_avatar['resultado']) {
                $jsondata['success1'] = true;
                $jsondata['prodpic'] = $result_avatar['datos'];
            }
            header('HTTP/1.0 400 Bad error');
            echo json_encode($jsondata);
        }
    }
    function loadData(){
        if ((isset($_POST["load_data"])) && ($_POST["load_data"] == true)) {
            $jsondata = array();

            if (isset($_SESSION['curso'])) {
                $jsondata["curso"] = $_SESSION['curso'];
                echo json_encode($jsondata);
                exit;
            } else {
                $jsondata["curso"] = "";
                echo json_encode($jsondata);
                exit;
            }
        }
    }

    function load(){    
        if (isset($_POST["load"]) && $_POST["load"] == true) {
            $curso = array();
            if (isset($_SESSION['cursoDet'])) {
                $curso=$_SESSION['cursoDet'];
                $curso['acceso']=true;
            }
            close_session();
            echo json_encode($curso);
            exit;
        }
    }

    function close_session() {
        unset($_SESSION['cursoDet']);
        $_SESSION = array(); // Destruye todas las variables de la sesión
        session_destroy(); // Destruye la sesión
    }


    function obtain_category() {
        if(  (isset($_POST["load_category"])) && ($_POST["load_category"] == true)  ){
            // $jsondata = array();
            $json = array();

            
            
            $json = loadModel(MODEL_COURSES, "courses_model", "obtain_category");
            // echo($json);
            // exit;
            if($json){
                $jsondata = $json;
                echo ($jsondata);
                exit;
            }else{
                $jsondata = "error";
                echo ($jsondata);
                exit;
            }
        }
    }


    function obtain_subCategory() {
        if(  (isset($_POST["load_subCategory"])) && ($_POST["load_subCategory"] == true)  ){
            /*$jsondata = array();*/
            
            $json = array();

            
            
            $json = loadModel(MODEL_COURSES, "courses_model", "obtain_subCategory");
            /*echo($json);*/
            /*exit;*/
            if($json){
                $jsondata = $json;
                echo ($jsondata);
                exit;
            }else{
                $jsondata = "error";
                echo ($jsondata);
                exit;
            }
        }
    }

}/*end class courses*/