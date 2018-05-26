<?php
//utilizar $_FILES['file'] no $_FILES['avatar'] por dropzone.js

function upload_files($carpetaAguardar, $user) {

    $error = array();
    $indice=0;
    $copiarFichero = false;
    $extensiones = array('jpg', 'jpeg', 'gif', 'png', 'bmp');

    if(!isset($_FILES)) {
        $error[$indice]=  'No existe $_FILES';
        $indice++;
    }
    if(!isset($_FILES['file'])) {
        $error[$indice]=  'No existe $_FILES[file] ';
        $indice++;
    }

    $imagen = $_FILES['file']['tmp_name'];
    $nom_fitxer= $_FILES['file']['name'];
    $mida_fitxer=$_FILES['file']['size'];
    $tipus_fitxer=$_FILES['file']['type'];
    $error_fitxer=$_FILES['file']['error'];
    // echo ($_FILES['file']['size']."  ".$nom_fitxer."  ".$tipus_fitxer."  ".$error_fitxer);

    if ($error_fitxer>0) { // El error 0 quiere decir que se subió el archivo correctamente
        switch ($error_fitxer){
            case 1: 
                $error[$indice]=  'Fitxer major que upload_max_filesize';
                $indice++;
                break;
            case 2: 
                $error[$indice]=  'Fitxer major que max_file_size ';break;
                $indice++;
                break;
            case 3: 
                $error[$indice]=  'Fitxer només parcialment pujat ';break;
                $indice++;
                break;
            //case 4: $error[$indice]=  'No has pujat cap fitxer ';break; //assignarem a l'us default-avatar
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    if($_FILES['file']['error'] !== 0) { //Assignarem a l'us default-avatar
        $error[$indice]=  'Archivo no subido correctamente ';
        $indice++;
    }
    
    ////////////////////////////////////////////////////////////////////////////
    if ($_FILES['file']['size'] > 3145728 ){//tamano en size 3mb
        $error[$indice]=  "Large File Size ";
        $indice++;
    }

    ////////////////////////////////////////////////////////////////////////////
    if ($_FILES['file']['name'] === "") { //Assignarem a l'us default-avatar
        $error[$indice]= "No ha seleccionado ninguna imagen. Te proporcionamos un default-avatar";
        $indice++;
    }

    if ($_FILES['file']['name'] !== "") {
        ////////////////////////////////////////////////////////////////////////////
        @$extension = strtolower(end(explode('.', $_FILES['file']['name']))); // Obtenemos la extensión, en minúsculas para poder comparar
        if( ! in_array($extension, $extensiones)) {
            $error[$indice]=  'Sólo se permite subir archivos con estas extensiones: ' . implode(', ', $extensiones).' ';
            $indice++;
        }
        ////////////////////////////////////////////////////////////////////////////
        //getimagesize falla si $_FILES['avatar']['name'] === ""
        if (!@getimagesize($_FILES['file']['tmp_name'])){
            $error[$indice]=  "Invalid Image File... </br>";
        }
        ////////////////////////////////////////////////////////////////////////////
        list($width, $height, $type, $attr) = @getimagesize($_FILES['file']['tmp_name']);
        if ($width > 4000 || $height > 4000){
            $error[$indice]=   "Maximum width and height exceeded. Please upload images below 100x100 px size ";
            $indice++;
        }
    }   
     
    ////////////////////////////////////////////////////////////////////////////
    if (is_uploaded_file($_FILES['file']['tmp_name'])){//is_uploaded_file — Indica si el archivo fue subido mediante HTTP POST
        if (is_file($_FILES['file']['tmp_name'])) {
            $copiarFichero = true;
                // I use absolute route to move_uploaded_file because this happens when i run ajax
        }else{
            $error[$indice]=   "Invalid File...";
            $indice++;
        }
    } 
    
    if ($user) {
        $nombreArchivo = new SplFileInfo($_FILES['file']['name']); 
        $nombreFichero = "b".$user.".".$nombreArchivo->getExtension();/*contruye el nombre con la extension que ya tenia*/
        $_SESSION['m_newfile']=$nombreFichero;
        // echo ($nombreFichero);exit;
        for ($i=0; $i <count($extensiones); $i++) { 
            $name="b".$user.".".$extensiones[$i];
            if(file_exists(SITE_ROOT.'media/'.$carpetaAguardar.'/'.$name)){
                unlink(SITE_ROOT.'media/'.$carpetaAguardar.'/'.$name);
            }   
        }
        $upfile = SITE_ROOT.'media/'.$carpetaAguardar.'/'.$nombreFichero;
    }else{
        $idUnico = rand();
        $upfile = SITE_ROOT.'media/'.$carpetaAguardar.'/'.$idUnico.$_FILES['file']['name'];
    }

    
    // echo json_encode($informacion);exit;

    
    if (count($error)==0) {
        if ($copiarFichero) {
            if (!move_uploaded_file($_FILES['file']['tmp_name'], $upfile)) {
                $error[$indice]= "<p>Error al subir la imagen.</p>";
                $indice++;
                return $return=array('resultado'=>false,'error'=>$error,'datos'=>"");
            }
            //We need edit $upfile because now i don't need absolute route.
            $upfile ='media/'.$carpetaAguardar.'/b'.$_SESSION['m_newfile'];
    // echo ($upfile);exit;
            return $return=array('resultado'=>true , 'error'=>$error,'datos'=>$upfile, "archivo"=>$nombreFichero);
        }
        if($_FILES['file']['error'] !== 0) { //Assignarem a l'us default-avatar
            $upfile = '/Proyectos/Framework_PHP_MVC_OO_AngularJS/media/'.$carpetaAguardar.'/default-potho.jpg';
            return $return=array('resultado'=>true,'error'=>$error,'datos'=>$upfile);
        }
    }else{
        return $return=array('resultado'=>false,'error'=>$error,'datos'=>"");
    }
}






function remove_file(){
    $extensiones = array('jpg', 'jpeg', 'gif', 'png', 'bmp');
    echo ($_GET);exit;
    for ($i=0; $i <$extensiones; $i++) { 
            
    }


	/*$name = $_POST["filename"];
    if(file_exists(SITE_ROOT.'media/'.$carpetaAguardar.'/'.$_SESSION['m_newfile'])){
        unlink(SITE_ROOT.'media/'.$carpetaAguardar.'/'.$_SESSION['m_newfile']);
		return true;
    }else{
		return false;
	}*/
}

function save_file($carpetaAguardar){
    $datos=$_POST;
    $extensiones = array('jpg', 'jpeg', 'gif', 'png', 'bmp');
    $res = array();

    for ($i=0; $i <count($extensiones); $i++) { 
        $name=$datos["user"].".".$extensiones[$i];
        if(file_exists(SITE_ROOT.'media/'.$carpetaAguardar.'/'.$name)){
            unlink(SITE_ROOT.'media/'.$carpetaAguardar.'/'.$name);
        }   
    }
    // echo (substr($datos["archivo"], 1));exit;
    $nombreAntiguo=SITE_ROOT.'media/'.$carpetaAguardar.'/'.$datos["archivo"];
    $nombreNuevo=SITE_ROOT.'media/'.$carpetaAguardar.'/'.substr($datos["archivo"], 1);
    $res["success"]=false;

    try{
        rename($nombreAntiguo, $nombreNuevo);
        $res["avatar"]='media/'.$carpetaAguardar.'/'.substr($datos["archivo"], 1);
        $res["success"]=true;
        $res["user"]=$datos["user"];
    }catch (Exception $e) {
        $res["mensaje"]="No se pudo realizar el cambio de nombre";
    }
    return $res;
}