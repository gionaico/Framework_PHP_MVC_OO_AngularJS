<?php
@session_start();

class controller_basket {

    function __construct() {        
        // echo json_decode("pppppppppppp");exit;
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
				
				/*Hacer mejora en que si el usuario ya ha comprado un curso no te deje volver a comprarlo*/
				$precioTotal=0;
				for ($i=0; $i < count($cursosEnCarrito) ; $i++) { 
					$precioTotal=$precioTotal+floatval($cursosEnCarrito[$i]["price"]);
				}
				$dat=array(
                            "user"=>$usuario[0]["user_name"],
                            "precioTotal"=>$precioTotal,
                        );
				$insertarEnPedido=loadModel(MODEL_BASKET, "basket_model", "insertarEnPedido", $dat);

				echo json_encode($precioTotal);exit;

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