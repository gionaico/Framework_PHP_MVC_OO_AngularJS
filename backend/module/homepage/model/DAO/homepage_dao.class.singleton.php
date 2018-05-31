<?php
//echo json_encode("products_dao.class.singleton.php");
//exit;

class homepage_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    
    public function mejoresCursos_DAO($db, $arrArgument) {      
      $sql=("SELECT * from courses co INNER JOIN (SELECT l.id_curso, COUNT(l.user_name)as cant_likes FROM likes as l GROUP By l.id_curso ORDER BY cant_likes DESC) as tab WHERE co.id=tab.id_curso ");
      
      $res=$db->listar($db->ejecutar($sql));
      return $res;
    }
   
    public function obtain_category_DAO(){
        $category = file_get_contents(SITE_ROOT.'/resources/ListOfCategoryCourse.json');          
        return $category;
    }
    
    public function cursosVisitados_DAO($db, $arrArgument) {      
      $cad=substr($arrArgument, 0, -4);
      $sql= "SELECT * FROM courses WHERE $cad";
      $res=$db->listar($db->ejecutar($sql));
      // echo json_encode($res);exit;
      return $res;
    }
    
}//End productDAO
