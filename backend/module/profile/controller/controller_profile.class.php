<?php
@session_start();


class controller_profile {
    
    function __construct() {        
        include(UTILS_PROFILE . "validaProfile.php");         
        $_SESSION['module'] = "profile";
    }

    /*-------------------------------------------*/
    /*function form() {
        loadView( "module/profile/view/", "profile.html"); 
    }


    function changePass(){         
         loadView( "module/profile/view/", "changePass.html");        
    }*/
    function infoUser(){

        $user["token"]= $_GET['param'];
        try {            
            $usuario = loadModel(MODEL_PROFILE, "profile_model", "userByToken", $user);
            $datos["user"]= $usuario[0];
            $datos["success"]=true;
        } catch (Exception $e) {
            $datos["success"]=false;
        }
        echo json_encode($datos);
        exit;
    }

    function upDatePass(){         
        $datos_user["pass"]=  $_POST['password'];
        $datos_user["token"]=  $_POST['token'];

        $updatePass = loadModel(MODEL_PROFILE, "profile_model", "updatePass", $datos_user);
        if ($updatePass) {          
            $json_data["success"]= true;
            $json_data["mensaje"] = "Passwor cambiado exitosamente. Inicia sesion con tu nuevo password";
        }else{
            $json_data["success"]= false;
            $json_data["mensaje"] = "Fallo en cambio de password. Intentalo mas tarde.";
        }

        echo json_encode($json_data);

    }
    /*-------------------------------------------*/
    function recovPass(){
        $datos_user["email"] = $_POST['email1'];
             
        $checkUserEmail = loadModel(MODEL_PROFILE, "profile_model", "checkUserEmail", $datos_user);
        $datos_user["user"] = $checkUserEmail[0]["user_name"];

        if (count($checkUserEmail)==1) {   
            $datos_user["token"] = md5(uniqid(rand(), true));
            $updateToken = loadModel(MODEL_PROFILE, "profile_model", "updateToken", $datos_user);

            sendtoken($datos_user, "recoverPass");

            $json_data["success"]= true;
            $json_data["mensaje"] = "Revisa tu email para recuperar password";
        }else{
            $json_data["success"]= false;
            $json_data["mensaje"] = "Este email no existe en DB";
        }

        echo json_encode($json_data);
        exit;
    }

    function upDateDatosPer(){
        $dat=$this->getArrayDatos($_POST['user']);
        $user=json_decode($dat["datos"], true);        

        if ($dat["success"]) {
            $datos_user["user"]=$user[0]["user_name"];
            $usuario = loadModel(MODEL_PROFILE, "profile_model", "checkUser", $datos_user);  
            $datos["success"]=true; 
            $datos["datos"]=$usuario;
            echo json_encode($datos);
        }else{
            echo json_encode($dat);
        }
    }

    /*-------------------------------------------*/
    function register(){         
        $datos_user=array(
            "user"=>$_POST['user_register'],
            "email"=>$_POST['email_register'],
            "password"=>$_POST['password_register']
        );  

        $datos_user["token"] = md5(uniqid(rand(), true));
        $datos_user["avatar"] = "https://robohash.org/".$_POST['user_register'];

        $resultado=valida_usuario($datos_user);
        
        if ($resultado["resultado"]) {
            $insertDatos = loadModel(MODEL_PROFILE, "profile_model", "registrarUser", $datos_user);

            if ($insertDatos) {
                $json_data["success"]= true;
                $json_data["mensaje"] = "Felicidades ".$_POST['user_register']." te has registrado correctamente. Recibiras un email para activar tu cuenta.";
                $json_data["j"]=$datos_user["token"];
                sendtoken($datos_user, "alta");
                echo json_encode($json_data);
                exit;
            }else{
                $json_data["success"] = false;
                $resultado['error']['insersionDatos']="ERROR. Insersion de datos fallida";
                $json_data["error"] = $resultado['error']['insersionDatos'];

                // header('HTTP/1.0 400 Bad error');
                echo json_encode($json_data);
            }
        }else{      
                // echo json_encode("nooo");exit;
            $json_data["success"] = false;
            $json_data["error"] = $resultado['error'];

            // header('HTTP/1.0 400 Bad error');
            echo json_encode($json_data);
        }
    }

    /*-------------------------------------------*/
    function activar(){
        $datos_user = array(
                'token' => $_GET['param'],
                'activado' => "y"
            );
        try {
            $value = loadModel(MODEL_PROFILE, "profile_model", "activarUser", $datos_user);
        } catch (Exception $e) {
            $value = false;
        }

        if ($value) {
            $user = loadModel(MODEL_PROFILE, "profile_model", "userByToken", $datos_user);  
            $json_data["datos"] = array(
                "user"=>$user[0]['user_name'],
                "type"=>$user[0]['type'],
                "name"=>$user[0]['name'],
                "avatar"=>$user[0]['avatar']
            );
        }
        $json_data["success"]=$value;
        echo json_encode($json_data);      
    }


    /*-------------------------------------------*/
   function loginManual(){
        $datos_user=array(
                "user"=>$_POST['user_log'],
                "password"=>$_POST['password_log']
            );
        $resultado=valida_usuarioLog($datos_user);
            // echo json_encode($resultado);  exit;
        if ($resultado["resultado"]) {
            $json_data["success"]= true;
            $json_data["mensaje"] = "Bienvenido ".$_POST['user_log']." , has iniciado sesion exitosamente";
            // $json_data["datos"]=$resultado["datosUser"];
            $json_data["datos"] = array(
                "user"=>$resultado["datosUser"]['user_name'],
                "type"=>$resultado["datosUser"]['type'],
                "name"=>$resultado["datosUser"]['name'],
                "avatar"=>$resultado["datosUser"]['avatar'],
                "tipo_registro"=>$resultado["datosUser"]['tipo_registro']
            );

            $json_data["token"] = $this->ActualizarToken($datos_user);

            echo json_encode($json_data);
        }else{      
            $json_data["success"] = false;
            $json_data["error"] = $resultado['error'];

            echo json_encode($json_data);
            // header('HTTP/1.0 400 Bad error');
        }
    }
    /*-------------------------------------------*/
    function compruebaToken(){
        $token=$_POST["token"];
        $validaToken=$this->getArrayDatos($token);
        $jsondata["success"]=false;

        if ($validaToken["success"]) {
            $jsondata["token"]=$token;
            try{
                $user = loadModel(MODEL_PROFILE, "profile_model", "userByToken", $jsondata);  
                if (count($user)==1) {
                    $jsondata["user"]=array(
                        "name"=> $user[0]["name"],
                        "user"=> $user[0]["user_name"],
                        "avatar"=> $user[0]["avatar"],
                        "name"=> $user[0]["name"],
                        "type"=> $user[0]["type"],
                        "tipo_registro"=> $user[0]["tipo_registro"]
                    );
                    $jsondata["success"]=true;                    
                }
            } catch (Exception $e) {
                $jsondata["mensaje"]="Problemas comprobacion de datos. Intentelo mas tarde.";
            }
        }else{
            $jsondata["mensaje"]="Problemas de seguridad. Inicie sesion nuevamente.";            
        }
        echo json_encode($jsondata );exit;
        // echo json_encode(json_decode($validaToken["datos"]));exit;
    }
    /*-------------------------------------------*/

    public function ActualizarToken($datos_user){
        // $DatosBasicosUser=loadModel(MODEL_PROFILE, "profile_model", "DatosBasicosUser", $datos_user);
        $datosEditar["user"]=$datos_user["user"];
        $datosEditar["token"]=$this->creaToken();
        $updateToken = loadModel(MODEL_PROFILE, "profile_model", "updateToken", $datosEditar);
        return $datosEditar["token"];
    }

    /*-------------------------------------------*/

    public function creaToken(){
        $token = md5(uniqid(rand(), true));
        $clave =base64_encode ($token);
        $token_datos=$token.".".$clave;
        return $token_datos;
    }

    /*-------------------------------------------*/
    function getdatos(){
        // echo ($_POST['user']);
        $array = explode(".", $_POST['user']);
        $datos["success"]=false;

        $tokenComparar=$array[0];
        $tokenComparar2=$array[2];
        if ($tokenComparar==base64_decode($tokenComparar2)) {
            $datos["success"]=true;
            $datos["datos"] =base64_decode($array[1]);
        }elseif(count($array)!=3){
            $datos["mensaje"]="Problema de seguridad. Logueate nuevamente";

        }else{            
            $datos["mensaje"]="ERROR. Autentificacion de datos";
        }

        echo json_encode($datos);
    }

    public function getArrayDatos($informacionToken){
        
        $array = explode(".", $informacionToken);
        $datos["success"]=false;

        $tokenComparar=$array[0];
        $tokenComparar2=$array[1];
        if ($tokenComparar==base64_decode($tokenComparar2)) {
            $datos["success"]=true;
        }elseif(count($array)!=3){
            $datos["mensaje"]="Problema de seguridad. Logueate nuevamente";

        }else{            
            $datos["mensaje"]="ERROR. Autentificacion de datos";
        }

        return $datos;
    }

    /*-------------------------------------------*/
    function logSocial(){
        $datos_user=array(
            "user"=>$_POST['user'],
            "email"=>$_POST['email'],
            "name"=>$_POST['name'],
            "avatar"=>$_POST['avatar'],
            "tipo_registro"=>$_POST['tipo_registro']
        ); 
        $usuario = loadModel(MODEL_PROFILE, "profile_model", "checkUser", $datos_user);
            // echo ($usuario);exit;
        if (count($usuario)<1) {
            $insertDatos = loadModel(MODEL_PROFILE, "profile_model", "registrarUserSocial", $datos_user);
            if ($insertDatos) {
                $json_data["success"]= true;
                $json_data["mensaje"] = "Bienvenido ".$_POST['name']." , has iniciado sesion exitosamente";

                $datos_user["type"]=0;
                $json_data["datos"] = array(
                    "user"=>$usuario[0]['user_name'],
                    "type"=>$usuario[0]['type'],
                    "name"=>$usuario[0]['name'],
                    "avatar"=>$usuario[0]['avatar']
                ); 
                $json_data["token"] = $this->ActualizarToken($datos_user);
                
                echo json_encode($json_data);
            }else{      
                $json_data["success"] = false;
                $json_data["error"] = 'error';

                header('HTTP/1.0 400 Bad error');
                echo json_encode($json_data);
            }
        }else{
            $json_data["datos"] = array(
                "user"=>$usuario[0]['user_name'],
                "type"=>$usuario[0]['type'],
                "name"=>$usuario[0]['name'],
                "avatar"=>$usuario[0]['avatar']
            ); 
            $json_data["token"] = $this->ActualizarToken($json_data["datos"]);
            $json_data["success"]= true;
            $json_data["mensaje"] = "Bienvenido ".$_POST['name']." , has iniciado sesion exitosamente";
            
            echo json_encode($json_data);
        }
        
    }

    /*-------------------------------------------*/
    function load_country(){
            $url = 'http://www.oorsprong.org98989/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';

            try{
                $json =  loadModel(MODEL_PROFILE, "profile_model", "obtain_countries", $url);
                if ($json==false) {
                    $data = file_get_contents(RESOURCES."ListOfCountryNamesByName.json");
                    $paises = json_decode($data, true);
                    echo json_encode($paises);
                    exit;
                }else{
                    echo $json;
                    exit;
                }
            }catch (Exception $e) {
                echo "error";
                exit;
            }
    }

    /*-------------------------------------------*/
    function load_provinces(){        
        $jsondata["successs"]=false;
        $json =  loadModel(MODEL_PROFILE, "profile_model", "obtain_provinces");

        if($json){
            $jsondata["provinces"] = $json;
            $jsondata["success"]=true;
            echo json_encode($jsondata);
            exit;
        }else{
            $jsondata["provinces"] = "error";
            echo json_encode($jsondata);
            exit;
        }
    }

    /*-------------------------------------------*/
    function load_cities(){
        if(  isset($_POST['idPoblac']) ){
            $jsondata["success"]=false;
            $json = array();

            $json =  loadModel(MODEL_PROFILE, "profile_model", "obtain_cities", $_POST['idPoblac']);

            if($json){
                $jsondata["success"]=true;
                $jsondata["cities"] = $json;
                echo json_encode($jsondata);
                exit;
            }else{
                $jsondata["cities"] = "error";
                echo json_encode($jsondata);
                exit;
            }   
        }
    }

    function upload_avatar(){        
        $carpetaAguardar="users";
        $user=$_GET["user"];
        $result_avatar = upload_files($carpetaAguardar, $user);
        $_SESSION['result_avatar'] = $result_avatar; 
        
        echo json_encode($result_avatar);exit;
        /*$res["success"]=false;
        

        if ($result_avatar["error"]==="") {
            $datosUser=array(
                            "user"=>$user,
                            "avatar"=>$result_avatar["datos"]
                        );
            $cambioAvatar=loadModel(MODEL_PROFILE, "profile_model", "cambioAvatar", $datosUser);
            if ($cambioAvatar) {
                $res["success"]=true;
                $res["avatar"]=$result_avatar["datos"];
                echo json_encode($res);exit;
            }else{
                $res["error"]="Fallo en conexion con DB";
                echo json_encode($res);exit;
            }
        }
        $res["error"]=$result_avatar["error"];
        echo json_encode($result_avatar);exit;*/
    }
    function delete_avatar() {

        echo json_encode($_GET);
    }

    function guardar_avatar() {
        $cambioAvat=save_file("users");
        $resul["success"]=false;
        if ($cambioAvat["success"]) {
            $actualizarAvatar=loadModel(MODEL_PROFILE, "profile_model", "cambioAvatar", $cambioAvat);
            if ($actualizarAvatar) {
                $resul["success"]=true;
                $resul["mensaje"]="Actualizacion de avatar realizada correctamente";
                $resul["avatar"]=$cambioAvat["avatar"];
            }else{
                $resul["mensaje"]="Fallo en conexion con base de datos";
            }
            echo json_encode($resul);
        }else{
            echo json_encode($cambioAvat);
        }
        
    }


    function updateUser(){
        /*Fecha actual con formato*/
        /*$hoy = new DateTime();
        $hoyFormateado=$hoy->format('Y-m-d');

        $birth_date=$_POST["datosNew"]["birth_date"];
        $birth_dateDate = new DateTime($birth_date);
        $birth_dateFormateado=$birth_dateDate->format('Y-m-d');

*/      
        $oldDatos=$_POST["datosOld"];
        $newDatos=$_POST["datosNew"];
        $validacion=valUpdate($oldDatos, $newDatos);
        // echo json_encode($validacion);exit;
        $jsondata["successErrores"]=true;
        if ($validacion["success"]) {
            if (count($validacion["datosDAO"])==0) {
                $jsondata["success"]=true;
                $jsondata["mensaje"]="No hay datos que actualizar";
            }else{
                $update =  loadModel(MODEL_PROFILE, "profile_model", "update_usuario", $validacion);
                if ($update) {
                    $jsondata["success"]=true;
                    $jsondata["mensaje"]="Tus datos se han cambiado exitosamente";
                }else{
                    $jsondata["success"]=false;
                    $jsondata["mensaje"]="Fallo de conexion. No se actualizo los datos";
                }
            }
        }else{
            $jsondata["successErrores"]=false;
            $jsondata["datos"]=$validacion["error"];
        }
        echo json_encode($jsondata);exit;
        /*if ($birth_dateFormateado==$hoyFormateado) {
            echo json_encode (valUpdate($hoy));exit;
        }

        echo json_encode ($birth_dateFormateado);exit;
        // $date = new DateTime();
        echo json_encode ($birth_dateFormateado);exit;
        $f=$_POST["birth_date"];
        $date = new DateTime($f);
        echo ($date->format('Y-m-d'));exit;
        $date->add(new DateInterval('P1D'));
        $f3=$date->format('Y-m-d');
        echo $f3;exit;*/

        echo json_encode($validacion);exit;
        $usersJSON = json_decode($_POST["user"], true);
        $jsondata["success"]=false;

        $datos_user=array(
            "email"=>$usersJSON['email'],
            "user_name"=>$usersJSON['user_name'],
            "name"=>$usersJSON['name'],
            "country"=>$usersJSON['country'],
            "phone"=>$usersJSON['phone'],
            "password"=>$usersJSON['password'],
            "birth_date"=>$usersJSON['birth_date'],
            "genere"=>$usersJSON['genere'],
            "intereses"=>$usersJSON['intereses'],
        );

        if ($usersJSON['country']=="ES") {
            $datos_user["province"]=$usersJSON['province'];
            $datos_user["city"]=$usersJSON['city'];
        }

        $checkEmail =  loadModel(MODEL_PROFILE, "profile_model", "checkUserEmail2", $datos_user);

        if (count($checkEmail)==0) {
            // echo "string";
            $update =  loadModel(MODEL_PROFILE, "profile_model", "update_usuario", $datos_user);
            $jsondata["success"]=true;
            $jsondata["mensaje"]="Tus datos se han cambiado exitosamente";
        }else{
            $jsondata["mensaje"]="El email proporcionado ya existe en la base con otro usuario, intentalo nuevamente ";
        }
        echo json_encode($jsondata);
    }


   
}/*end clase profile*/






































/*
if (isset($_POST['user_JSON'])) {	
    alta_users();
}

/////////////////////////////////////////////////// 
function alta_users() {
	$jsondata = array();
    $usersJSON = json_decode($_POST["user_JSON"], true);
    $result = validate($usersJSON);

    if ($result['resultado']) {    	
    	$path_model=$_SERVER['DOCUMENT_ROOT'] . '/Proyectos/GiovannyProy4/module/profile/model/model/';        
        $evio_loadModel = loadModel($path_model, "profile_model", "create_user", $result['datos']);
        // echo ($evio_loadModel);
        // 	exit;
        	
        if ($evio_loadModel){
            $mensaje = "User has been successfull registered";
        	$jsondata["success"] = true;
        }else{
        	$jsondata["success"] = false;
            $mensaje = "Problem ocurred registering user";
        }

        $callback = "index.php";
        $jsondata["mensaje"] = $mensaje;
        $jsondata["redirect"] = $callback;
	    echo json_encode($jsondata);
	    exit;
    }else{    	
    	$jsondata["success"] = false;
        $jsondata["error"] = $result['error'];
        header('HTTP/1.0 400 Bad error');
        echo json_encode($jsondata);
    }
}



    }*/