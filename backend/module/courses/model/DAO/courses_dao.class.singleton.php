<?php

    class courses_dao {
        static $_instance;

        private function __construct() {

        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function create_course_DAO($db, $arrArgument) {

            $title= $arrArgument['title'];   
            $courseLenguge= $arrArgument['courseLenguge'];        
            $ulr = $arrArgument['ulr'];
            $courseDuration = $arrArgument['courseDuration'];
            $level = $arrArgument['level'];        
            $price = $arrArgument['price'];
            $courseDescr = $arrArgument['courseDescr'];
            $personalDescr = $arrArgument['personalDescr'];
            $register_date = $arrArgument['register_date'];
            $avatar= $arrArgument['avatar'];
            $subject= $arrArgument['subject'];
            $subSubject= $arrArgument['subSubject'];

            $category = $arrArgument['category'];        
            $All_category="";
            foreach ($category as $indice) {
                    $All_category=$All_category.$indice.":";
                }

            $sql = "INSERT INTO courses (title, lenguage, ulr, duration, levelCour, price, courseDescr, personalDescr, register_date, avatar, category, subject, sub_subject) VALUES ('$title', '$courseLenguge', '$ulr', '$courseDuration', '$level', $price, '$courseDescr', '$personalDescr', '$register_date', '$avatar', '$All_category', '$subject', '$subSubject' )";
            
        
          
          return $db->ejecutar($sql);
        }

       public function obtain_category_DAO(){
            $category = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/Proyectos/GiovannyProy4/resources/ListOfSubcategoryCourse.json');
  
            return $category;

        }

        public function courseDetails_DAO($db, $id) {
            $sql = "SELECT * FROM courses WHERE id='".$id."'";
            return $db->listar($db->ejecutar($sql));
            
        }

        public function getAllCourses_DAO($db, $arr) {
            $sql = "SELECT * FROM courses";
            return $db->listar($db->ejecutar($sql));            
        }

        public function obtain_subCategory_DAO(){
            $json = array();
            $tmp = array();

            $subCategory = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/Proyectos/GiovannyProy4/resources/ListOfSubcategoryCourse.json');
            

              
                  return $subCategory;

        }

        public function autocomplete_DAO($db, $arrArgument) {
            $sql = "SELECT * FROM courses";
            return $db->listar($db->ejecutar($sql));
        }

        public function keyword_DAO($db, $arrArgument) {

            $sql = "SELECT * FROM courses WHERE title LIKE '%".$arrArgument."%'";
            return $db->listar($db->ejecutar($sql));
        }


        public function cursosFiltrados_DAO($db, $arrArgument) {
            $cadWhere=array();
            $indice=0;
          
            if ($arrArgument["category"]!="") {
                $cadWhere[$indice]="subject='".$arrArgument["category"]."'";
                $indice++;
            }
            if ($arrArgument["lenguage"]!="") {
                $cadWhere[$indice]="lenguage='".$arrArgument["lenguage"]."'";
                $indice++;
            }
            if ($arrArgument["title"]!="") {
                $cadWhere[$indice]="title LIKE '%".$arrArgument["title"]."%'";
                $indice++;
            }
            if ($arrArgument["level"]!="") {
                $cadWhere[$indice]="levelCour= '".$arrArgument["level"]."'";
                $indice++;
            }
            if ($arrArgument["price"]!="") {
                $cadWhere[$indice]="price< ".$arrArgument["price"]."";
                $indice++;
            }
            if ($arrArgument["sub_subject"]!="") {
                $cadWhere[$indice]="sub_subject= '".$arrArgument["sub_subject"]."'";
                $indice++;
            }

            if ($indice==0) {
                $sql = "SELECT * FROM courses";
            }else{        
                $cad="";

                for ($i=0; $i <count($cadWhere) ; $i++) { 
                    $cad=$cad."".$cadWhere[$i]." and ";
                }
                $sql = "SELECT * FROM courses WHERE ".substr($cad, 0, -4)."";
            }

            /*echo ($sql);
            exit;*/
            return $db->listar($db->ejecutar($sql));
            
        }
        public function verComentarios_DAO($db, $arrArgument) {
            $sql = "SELECT * FROM comentarios as c INNER JOIN users as u WHERE c.user_name=u.user_name and c.id_curso='$arrArgument'  ORDER BY c.fecha_comentario DESC";
            return $db->listar($db->ejecutar($sql));
        }

        public function insertarComentario_DAO($db, $arrArgument) {
            $curso=$arrArgument["curso"];
            $user=$arrArgument["user_name"];
            $coment=$arrArgument["comentario"];


            $sql = "INSERT INTO comentarios (id_curso, user_name, comentario) VALUES ('$curso', '$user', '$coment' )";
            // echo json_encode($sql);exit;
            return $db->ejecutar($sql);
        }
        public function insertarPuntuacion_DAO($db, $arrArgument) {
            $curso=$arrArgument["id_curso"];
            $user=$arrArgument["user"];
            $puntos=$arrArgument["puntos"];

            $sql = "INSERT INTO puntuaciones (id_curso, user, puntuacion) VALUES ('$curso', '$user', '$puntos' )";
            return $db->ejecutar($sql);
        }
        public function cursosPuntos_DAO($db, $arrArgument) {
            $sql = "SELECT COUNT(DISTINCT p.user) as cantidad, p.id_curso FROM puntuaciones as p GROUP BY p.id_curso";
            return $db->listar($db->ejecutar($sql));
        }

        public function cursosPuntuados_DAO($db, $arrArgument) {
            $sql = "SELECT Avg(p.puntuacion) AS promedio, COUNT(DISTINCT p.user) as cantidad, p.id_curso FROM puntuaciones as p GROUP BY p.id_curso";
            // $sql = "SELECT COUNT(DISTINCT p.user) as cantidad, p.id_curso FROM puntuaciones as p GROUP BY p.id_curso";
            return $db->listar($db->ejecutar($sql));
        }
        public function verificaPuntos_DAO($db, $arrArgument) {
            $curso=$arrArgument["id_curso"];
            $user=$arrArgument["user"];

            $sql = "SELECT * FROM puntuaciones where user='$user' and id_curso='$curso'";
            // $sql = "SELECT COUNT(DISTINCT p.user) as cantidad, p.id_curso FROM puntuaciones as p GROUP BY p.id_curso";
            return $db->listar($db->ejecutar($sql));
        }
        public function updatePuntos_DAO($db, $arrArgument) {
            $curso=$arrArgument["id_curso"];
            $user=$arrArgument["user"];
            $puntos=$arrArgument["puntos"];

            $sql = "UPDATE puntuaciones SET puntuacion='$puntos' WHERE id_curso='$curso' and user='$user'";
            return $db->ejecutar($sql);
        }
                /*UPDATE table_name
        SET column1=value, column2=value2,...
        WHERE some_column=some_value */
            
    }//End productDAO
