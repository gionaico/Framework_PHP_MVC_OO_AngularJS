<?php
@session_start();
class controller_homepage {
	
    function __construct() {

        $_SESSION['module'] = "homepage";
    }

    /*function homepage() {
        loadView( "module/homepage/view/", "homepage.html"); 
    }*/

    function getCourses() {

        $evio_loadModel = loadModel(MODEL_HOMEPAGE, "homepage_model", "mejoresCursos");
	    echo json_encode($evio_loadModel);
	    exit;
    }

    function idCourse(){
    	if (isset($_POST["idCourse"]) && $_POST["idCourse"] == true) {
			$id=$_POST["idCourse2"];
			$_SESSION["idCourse"]=$id;
			$res="http://localhost/Proyectos/GiovannyProy4/courses/details/";
			echo($res);
		    exit;
		}
    }

    function filtros(){
    	if (isset($_POST["filtros"]) && $_POST["filtros"] == true) {
			$category=$_POST["category"];
			$_SESSION["filtros"]=array(
                "category"=>$category,
                "lenguage"=>"",
                "level"=>"",
                "title"=>"",
                "price"=>"",
                "subject"=>"",
                "sub_subject"=>"");
			
			$res="http://localhost/Proyectos/GiovannyProy4/courses/list_courses/";
			echo($res);
		    exit;
		}
    }

    function getCategorias(){ 	        	        
        $json = loadModel(MODEL_HOMEPAGE, "homepage_model", "obtain_category");  
    	echo ($json);
    	exit;
    }

    function cursosVisitados(){   
        $res["success"]=false;
        try{
            $cursos=$_POST;
            $cad="";
            for ($i=0; $i <count($cursos) ; $i++) { 
                $cad.="id='".$cursos[$i]."' or ";
            }
            $cursosVis = loadModel(MODEL_HOMEPAGE, "homepage_model", "cursosVisitados",$cad);
            $res["success"]=true;
            $res["cursos"]=$cursosVis;
            echo json_encode($res);exit;
        }catch(Exception $e){
            $res["mensaje"]="Fallo en cargar cursos mas visitados";
            echo json_encode($res);exit;
        }
    }
    
}

?>