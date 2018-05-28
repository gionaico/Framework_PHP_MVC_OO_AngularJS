<?php

    function valUpdate($old, $new){
        $oldDatos=$old;
        $newDatos=$new;
        $error = array();
        $valido = true;

        $hoy = new DateTime();
        $hoyFormateado=$hoy->format('Y-m-d');
        $datos=array();
        $i=0;

        $birth_date=$newDatos["birth_date"];
        $birth_dateDate = new DateTime($birth_date);
        $birth_dateFormateado=$birth_dateDate->format('Y-m-d');

        if ($newDatos["name"]!="") {
            if ($newDatos["name"]!=$oldDatos["name"]) {
                $datos[$i]="name='".$newDatos["name"]."'";
                $i++;
            }
        }

        if ($birth_dateFormateado!=$hoyFormateado) {
            if (calculaedad($birth_dateFormateado)<18) {
                $error["birth_date"]="Tienes que ser mayor a 18 anos";
                $valido = false;
               // echo json_encode ("menor");exit;
            }else{
                $datos[$i]="birth_date='".$birth_dateFormateado."'";
                $i++;
            }
        }

        if ($newDatos["genere"]!="") {
            if ($newDatos["genere"]!=$oldDatos["genere"]) {
                $datos[$i]="genere='".$newDatos["genere"]."'";
                $i++;
            }
        }

        if ($newDatos["country"]!="") {
            if ($newDatos["country"]["sISOCode"]!=$oldDatos["country"]) {
                $datos[$i]="country='".$newDatos["country"]["sISOCode"]."'";
                $i++;
            }
        }

        if ($newDatos["province"]!="") {
            if ($newDatos["province"]["id"]!=$oldDatos["province"]) {
                $datos[$i]="province='".$newDatos["province"]["id"]."'";
                $i++;
            }
        }

        if ($newDatos["city"]!="") {
            if ($newDatos["city"]["poblacion"]!=$oldDatos["city"]) {
                $datos[$i]="city='".$newDatos["city"]["poblacion"]."'";
                $i++;
            }
        }

        if ($newDatos["phone"]!="") {
            if ($newDatos["phone"]!=$oldDatos["phone"]) {
                $datos[$i]="phone='".$newDatos["phone"]."'";
                $i++;
            }
        }

        if ($newDatos["email"]!="") {
            if ($newDatos["email"]!=$oldDatos["email"]) {
                $datos_user=array(
                           "email"=>$newDatos["email"],
                           "user_name"=>$oldDatos["user_name"]
                            );
                $checkEmail =  loadModel(MODEL_PROFILE, "profile_model", "checkUserEmail2", $datos_user);
                if (count($checkEmail)>=1) {
                    $error["email"]="Este email corresponde a otro usuario";
                    $valido = false;
                }else{
                    $datos[$i]="email='".$newDatos["email"]."'";
                    $i++;
                }
            }
        }

        if ($newDatos["pass1"]!="") {
            $datos[$i]="password=".password_hash($newDatos["pass1"], PASSWORD_DEFAULT);;
            $i++;
        }

        return $return = array('success' => $valido, 
                                'error' => $error,
                                'datosDAO'=>$datos,
                                'user'=>$oldDatos["user_name"]);
        
        // echo json_encode("biv");exit;
    }

    function sendtoken($arrArgument, $type) {
        $mail = array(
            'type' => $type,
            'token' => $arrArgument['token'],
            'email' => $arrArgument['email'],
            'user' => $arrArgument['user']
        );
        set_error_handler('ErrorHandler');
        try {
            enviar_email($mail);
            return true;
        } catch (Exception $e) {
            return false;
        }
        restore_error_handler();
    }

    function valida_usuarioLog($value){
        $error = array();
        $valido = true;

        $usuario = loadModel(MODEL_PROFILE, "profile_model", "checkUser", $value);

        if (count($usuario)==1) {
            if (!password_verify($value["password"], $usuario[0]["password"] )) {
                $error['password'] = 'The password for this user is incorrect';
                $valido = false;  
            }elseif ($usuario[0]["activado"]=="n") {
                $error['user'] = 'Este usuario aun no esta activo. Revisa tu email para activarlo.';
                $valido = false;
            }
        }else{
            $error['user'] = 'This user dont exist in our DB';
            $valido = false;  

        }

        return $return = array('resultado' => $valido, 
                                'error' => $error,
                                'datosUser'=>$usuario[0]);
    }


    function valida_usuario($value) {
        $error = array();
        $valido = true;
        $filtro = array(
            'user' => array(
                'filter' => FILTER_VALIDATE_REGEXP,
                'options' => array('regexp' => '/^[_A-Za-z0-9-\\+]{4,}$/')
            ),
            'email' => array(
                'filter' => FILTER_VALIDATE_REGEXP,
                'options' => array('regexp' => '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/')
            ),
            'password' => array(
                'filter' => FILTER_VALIDATE_REGEXP,
                'options' => array('regexp' => '/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/')
            ),       
            
        );

        $resultado = filter_var_array($value, $filtro);

        if (($resultado!=null) && ($resultado)) {   
            if (!$resultado['user']) {
                $error['user'] = 'Please write min 4 caracters';
                $valido = false;
            }else{                
                $compruebaUsuario = loadModel(MODEL_PROFILE, "profile_model", "checkUser", $value);

                if (count($compruebaUsuario)>0) {
                    $error['user'] = 'This user already exist in our DB';
                    $valido = false;  
                }
            }

             if (!$resultado['email']) {
                $error['email'] = 'Formato de email invalido';
                $valido = false;
            }else{                
                $compruebaEmail = loadModel(MODEL_PROFILE, "profile_model", "checkUserEmail", $value);
                // $error['email'] = '<strong>*php'.$compruebaEmail.'</strong> This email already exist in our DB';
                if (count($compruebaEmail)>0) {
                    $error['email'] = 'This email already exist in our DB';
                    $valido = false;  
                }
            }

            if (!$resultado['password']) {
                $error['password'] = 'Invalid format';
                $valido = false;
            }
                  

        } else {
            $valido = false;
        }
        
        return $return = array('resultado' => $valido, 
                                'error' => $error, 
                                'datos' => $resultado);

    }

function validate($value) {
    $error = array();
    $valido = true;
    $filtro = array(
        'un' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^[_A-Za-z0-9-\\+]{4,}$/')
        ),
        'name' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => "/[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}/")
        ),
        'phone' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^[0-9]{9}$/')
        ),
        'email' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/')
        ),
        'password' => array(
            'filter' => FILTER_VALIDATE_REGEXP,
            'options' => array('regexp' => '/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/')
        ),       
        
    );

    $resultado = filter_var_array($value, $filtro);

    
    

    $resultado['country'] = $value['country'];
    $resultado['province'] = $value['province'];
    $resultado['city'] = $value['city'];
    $resultado['genere'] = $value['genere'];
    $resultado['interests'] = $value['interests'];
    $resultado['birth_date'] = $value['birth_date'];
    $resultado['register_date']=date("Y-m-d");

    
    if ($resultado['country'] === '') {
        $error['country'] = "*php You haven't select a country.";
        $valido = false;
    }elseif ($resultado['country'] === 'ES') {
        
        if ($resultado['province']===''){
                $error['province']="You need to choose a province";
                $valido = false;
        }

        if ($resultado['city']===''){
                $error['city']="You need to choose a city";
                $valido = false;
        }
    }
    
    if ($resultado['genere']=="") {
        $error['genere']="You need to choose a genere";
        $valido = false;
     }

     if ($resultado['interests']=="") {
        $error['interests']="You need to choose a interests";
        $valido = false;
     }


    if (($resultado!=null) && ($resultado)) {

        $path_model=$_SERVER['DOCUMENT_ROOT'] . '/Proyectos/GiovannyProy4/module/profile/model/model/';        

        if (!$resultado['un']) {
            $error['un'] = 'Please write min 4 caracters';
            $valido = false;
        }else{
            $arr=["user_name",$resultado['un']];
            $evio_loadModel = loadModel($path_model, "profile_model", "checkUser", $arr);
            if (!$evio_loadModel) {
                $error['un'] = 'This user already exist in our DB';
                $valido = false;  
            }
        }       

        if (!$resultado['phone']) {
            $error['phone'] = 'Format must be min 9 numeric characters';
            $valido = false;
        }else{
            $arr=["phone",$resultado['phone']];
            $evio_loadModel = loadModel($path_model, "profile_model", "checkUser", $arr);
            if (!$evio_loadModel) {
                $error['phone'] = 'This phone already exist in our DB';
                $valido = false;  
            }
        }

        if (!$resultado['email']) {
            $error['email'] = 'Invalid Email';
            $valido = false;
        }else{
            $arr=["email",$resultado['email']];
            $evio_loadModel = loadModel($path_model, "profile_model", "checkUser", $arr);
            if (!$evio_loadModel) {
                $error['email'] = 'This email already exist in our DB';
                $valido = false;  
            }
        }

        if (!validateDate($resultado['birth_date'], 'Y-m-d')) {
            $error['birth_date'] = 'Invalid Date';
            $valido = false;
        }else{
            if (!validateAge($resultado['birth_date'])) {
                $error['birth_date'] = 'Your age must be greater than 18 years';
                $valido = false;
            }
        }

       

    } else {
        $valido = false;
    }
    
    return $return = array('resultado' => $valido, 
                            'error' => $error, 
                            'datos' => $resultado);
}





