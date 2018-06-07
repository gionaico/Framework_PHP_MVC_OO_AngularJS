<?php
@session_start();

class controller_basket {

    function __construct() {        
        $_SESSION['module'] = "basket";
    }
     
    function traerCursosCarrito(){
    	$cursos=$_POST["cursos"];
    	$cad="";
    	for ($i=0; $i < count($cursos); $i++) { 
    		$cad.="id=".$cursos[$i]. " or ";
    	}
    	
    	$cad=substr($cad, 0, -3);
    	$cursosEnCarrito = loadModel(MODEL_BASKET, "basket_model", "cursosEnCarrito", $cad);
    	echo json_encode($cursosEnCarrito);exit;
    }
	
	function comprar(){
		$cur = $_POST["cursosCarro"];
		$token=$_POST["token"];
		$verificaToken=verificaToken($informacionToken);
		$res["success"]=false;
		$cad="";
		
		if ($verificaToken["success"]) {
			try{
		    	for ($i=0; $i < count($cur); $i++) { 
		    		$cad.="id=".$cur[$i]["Producto"]["id"]. " or ";
		    	}
		    	$cad=substr($cad, 0, -3);
		    	$cursosEnCarrito = loadModel(MODEL_BASKET, "basket_model", "cursosEnCarrito", $cad);
				$usuario = loadModel(MODEL_BASKET, "basket_model", "userByToken", $token);
				
		    	// echo json_encode(count($cursosEnCarrito));exit;
				/*Hacer mejora en que si el usuario ya ha comprado un curso no te deje volver a comprarlo*/
				$precioTotal=0;
				for ($i=0; $i < count($cursosEnCarrito) ; $i++) { 
					$precioTotal=$precioTotal+floatval($cursosEnCarrito[$i]["price"]);
				}
				$date=new DateTime();
				$dat=array(
                            "user"=>$usuario[0]["user_name"],
                            "precioTotal"=>$precioTotal,
                            "hoy"=>$date->format('Y_m_d_H_i_s'),
                            "id_pedido"=>$usuario[0]["user_name"].$date->format('Y_m_d_H_i_s')
                        );
				$insertarEnPedido=loadModel(MODEL_BASKET, "basket_model", "insertarEnPedido", $dat);

				for ($i=0; $i < count($cursosEnCarrito); $i++) { 
		    		$dat["id_curso"]=$cursosEnCarrito[$i]["id"];
		    		$insertarEnCursoComprado=loadModel(MODEL_BASKET, "basket_model", "insertarEnCursoComprado", $dat);

		    	}
		    	$res["success"]=true;
				echo json_encode ($res);exit;


			} catch (Exception $e) {
				$res["mensaje"]="Fallo en verificacion de datos con DB";
			}

		}else{
			$res["mensaje"]=$verificaToken["mensaje"];
		}
		echo json_encode($res);exit;
		echo json_encode($_POST);exit;
	}    

}/*end class courses*/