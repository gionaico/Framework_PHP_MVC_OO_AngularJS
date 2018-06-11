<?php

class profile_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function create_user_DAO($db, $arrArgument) {
        $un= $arrArgument['un'];   
        $name= $arrArgument['name'];        
        $birth_date = $arrArgument['birth_date'];
        $genere = $arrArgument['genere'];
        $country = $arrArgument['country'];        
        $province = $arrArgument['province'];
        $city = $arrArgument['city'];
        $phone = $arrArgument['phone'];
        $email = $arrArgument['email'];
        $password= $arrArgument['password'];
        $interests = $arrArgument['interests'];
        $register_date= $arrArgument['register_date'];

        $password_cifrado=password_hash($password, PASSWORD_DEFAULT);
        $All_interests="";
        foreach ($interests as $indice) {
                $All_interests=$All_interests.$indice.":";
            }

        if ($country=="ES") {
          $sql = "INSERT INTO users (user_name, name, birth_date, genere, country, province, city, phone, email, password, interests, register_date) VALUES ('$un', '$name', '$birth_date', '$genere', '$country', '$province', '$city', $phone, '$email', '$password_cifrado', '$All_interests', '$register_date')";
        }else{
          $sql = "INSERT INTO users (user_name, name, birth_date, genere, country, phone, email, password, interests, register_date) VALUES ('$un', '$name', '$birth_date', '$genere', '$country', $phone, '$email', '$password_cifrado', '$All_interests', '$register_date' )";
        }
        
      
      return $db->ejecutar($sql);
    }

    function deleteUser_DAO($db, $arrArgument){
      $user= $arrArgument["user_name"];
      $sql="DELETE FROM users WHERE user_name='$user'";
      return $db->ejecutar($sql);
    }

    function update_usuario_DAO($db, $arrArgument){
      $dat=$arrArgument["datosDAO"];
      $user=$arrArgument["user"];
      $cad="";
      for ($i=0; $i <count($dat) ; $i++) { 
        $cad.=$dat[$i].", ";
      } 
      $cad=substr($cad, 0, -2);

      $sql = "UPDATE users SET $cad WHERE user_name='$user'";
      return $db->ejecutar($sql);
      // echo json_encode($sql);exit;
    }

 

    public function checkUserEmail2_DAO($db, $arrArgument) {
      $email= $arrArgument["email"];
      $user= $arrArgument["user_name"];

      $sql=("SELECT * FROM users WHERE email ='$email' and user_name!='$user'"); /*and tipo_registro='m'*/
      // echo $sql;
      return $db->listar($db->ejecutar($sql));
    }

    public function obtain_countries_DAO($url){
          $ch = curl_init();
          curl_setopt ($ch, CURLOPT_URL, $url);
          curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
          $file_contents = curl_exec($ch);

          $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
          curl_close($ch);
          $accepted_response = array(200, 301, 302);
          if(!in_array($httpcode, $accepted_response)){
            return FALSE;
          }else{
            return ($file_contents) ? $file_contents : FALSE;
          }
    }

    public function obtain_provinces_DAO(){
          $json = array();
          $tmp = array();

          $provincias = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/Proyectos/GiovannyProy4/resources/provinciasypoblaciones.xml');
          $result = $provincias->xpath("/lista/provincia/nombre | /lista/provincia/@id");
          for ($i=0; $i<count($result); $i+=2) {
            $e=$i+1;
            $provincia=$result[$e];

            $tmp = array(
              'id' => (string) $result[$i], 'nombre' => (string) $provincia
            );
            array_push($json, $tmp);
          }
              return $json;

    }

    public function obtain_cities_DAO($arrArgument){
          $json = array();
          $tmp = array();

          $filter = (string)$arrArgument;
          $xml = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/Proyectos/GiovannyProy4/resources/provinciasypoblaciones.xml');
          $result = $xml->xpath("/lista/provincia[@id='$filter']/localidades");

          for ($i=0; $i<count($result[0]); $i++) {
              $tmp = array(
                'poblacion' => (string) $result[0]->localidad[$i]
              );
              array_push($json, $tmp);
          }
          return $json;
    }

    public function registrarUser_DAO($db, $arrArgument) {
        $user= $arrArgument['user'];
        $email = $arrArgument['email'];
        $password= $arrArgument['password'];
        $password_cifrado=password_hash($password, PASSWORD_DEFAULT);
        $token= $arrArgument['token'];
        $avatar= $arrArgument['avatar'];
        $register_date=date("Y-m-d");


        $sql = "INSERT INTO users (user_name, email, password, register_date, token, avatar) VALUES('$user', '$email', '$password_cifrado', '$register_date', '$token', '$avatar')";
        // echo $sql;
        // exit;
        return $db->ejecutar($sql);      
    }

    public function registrarUserSocial_DAO($db, $arrArgument) {
        $user= $arrArgument['user'];
        $name= $arrArgument['name'];
        $email = $arrArgument['email'];
        $avatar = $arrArgument['avatar'];
        $tipo_registro = $arrArgument['tipo_registro'];
        $register_date=date("Y-m-d");


        $sql = "INSERT INTO users (user_name, name, email,  register_date, avatar, tipo_registro) VALUES('$user', '$name', '$email', '$register_date', '$avatar', '$tipo_registro')";
        // echo $sql;
        // exit;
        return $db->ejecutar($sql);      
    }


    public function checkUser_DAO($db, $arrArgument) {
      $user= $arrArgument["user"];      
      $sql=("SELECT * FROM users WHERE user_name ='$user'");
      return $db->listar($db->ejecutar($sql));
    }
    

    public function checkUserEmail_DAO($db, $arrArgument) {
      $email= $arrArgument["email"];      
      $sql=("SELECT * FROM users WHERE email ='$email' and tipo_registro='m'"); /*and tipo_registro='m'*/
      return $db->listar($db->ejecutar($sql));
    }

    public function DatosBasicosUser_DAO($db, $arrArgument) {
      $user= $arrArgument["user"]; 
      $sql=("SELECT user_name, name, type, avatar, activado, primera_visita FROM users WHERE user_name ='$user'"); /*and tipo_registro='m'*/
      return $db->listar($db->ejecutar($sql));
    }

    public function updateToken_DAO($db, $arrArgument) {
        $token = $arrArgument["token"];
        $user = $arrArgument["user"];
        $sql = "UPDATE users SET token='$token' WHERE user_name='$user'";
        return $db->ejecutar($sql);      
    }

    public function cambioAvatar_DAO($db, $arrArgument) {
        $avatar = $arrArgument["avatar"];
        $user = $arrArgument["user"];
        $sql = "UPDATE users SET avatar='$avatar' WHERE user_name='$user'";
        return $db->ejecutar($sql);      
    }

    public function activarUser_DAO($db, $arrArgument) {
        $token = $arrArgument["token"];
        $activado = $arrArgument["activado"];


        $sql = "UPDATE users SET activado='$activado' WHERE token='$token'";
        // echo $sql;exit;
        return $db->ejecutar($sql);      
    }

    public function updatePass_DAO($db, $arrArgument) {
        $token = $arrArgument["token"];
        $pass = password_hash($arrArgument["pass"], PASSWORD_DEFAULT);
        $sql = "UPDATE users SET password='$pass' WHERE token='$token'";

        return $db->ejecutar($sql);      
    }
    public function userByToken_DAO($db, $arrArgument) {
        $token = $arrArgument["token"];
        $sql = "SELECT * FROM users WHERE token='$token'";
        
        return $db->listar($db->ejecutar($sql));
    }

    public function traerUsuarios_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM users";
        return $db->listar($db->ejecutar($sql));
    }
    public function compruebaLike_DAO($db, $arrArgument) {
        $id=$arrArgument["idlike"];
        $sql = "SELECT * FROM likes WHERE id='$id'";
        return $db->listar($db->ejecutar($sql));
    }
    public function insertLike_DAO($db, $arrArgument) {
        $id=$arrArgument["idlike"];
        $curso=$arrArgument["id"];
        $user=$arrArgument["user"];
        $sql = "INSERT INTO likes (id, user_name, id_curso) VALUES ('$id', '$user', '$curso')";
        // echo json_encode($sql);exit;
        return $db->ejecutar($sql);
    }
    public function traerCompras_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM pedidos as p WHERE p.user='".$arrArgument[0]["user_name"]."'";
        return $db->listar($db->ejecutar($sql));
    }
    public function traercursosComprados_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM cursosComprados as c INNER JOIN courses as co ON c.id_curso=co.id WHERE c.user='".$arrArgument[0]["user_name"]."'";
        return $db->listar($db->ejecutar($sql));
    }
    public function traerCursosConLike_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM likes as l INNER JOIN courses as co ON l.id_curso=co.id WHERE l.user_name='".$arrArgument[0]["user_name"]."'";
        return $db->listar($db->ejecutar($sql));
    }
    public function traercursosComentados_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM comentarios as c WHERE c.user_name='".$arrArgument[0]["user_name"]."' ORDER BY c.id_curso";
        return $db->listar($db->ejecutar($sql));
    }
    public function traerInfoCursosComentados_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM courses WHERE ".$arrArgument." ";
        // echo $sql;exit;
        return $db->listar($db->ejecutar($sql));
    }
    public function traercursosPuntuados_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM courses c INNER JOIN puntuaciones p ON c.id=p.id_curso WHERE p.user='".$arrArgument."' ";
        // echo $sql;exit;
        return $db->listar($db->ejecutar($sql));
    }


}//End productDAO


