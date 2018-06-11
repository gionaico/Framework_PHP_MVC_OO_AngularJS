<?php

    class examen_dao {
        static $_instance;

        private function __construct() {

        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }



        public function nombre_DAO($db, $arr) {
            /*$sql = "SELECT * FROM courses WHERE id='".$id."'";*/
            // echo ($arr);exit;
            $sql = "SELECT * FROM users";
            return $db->listar($db->ejecutar($sql));
            
        }


            
    }//End productDAO
