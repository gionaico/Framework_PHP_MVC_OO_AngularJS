<?php

    class basket_dao {
        static $_instance;

        private function __construct() {

        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function cursosEnCarrito_DAO($db, $arrArgument) {      
          $sql=("SELECT * FROM courses WHERE $arrArgument");
          $res=$db->listar($db->ejecutar($sql));
          // echo ($sql);exit;
          return $res;
        }

        public function userByToken_DAO($db, $arrArgument) {
            $token = $arrArgument;
            $sql = "SELECT * FROM users WHERE token='$token'";
            return $db->listar($db->ejecutar($sql));
        }
        public function insertarEnPedido_DAO($db, $arrArgument) {
            $sql = "INSERT INTO pedidos (id_pedido, user, ImporteTotal) VALUES ( '".$arrArgument["id_pedido"]."', '".$arrArgument["user"]."', '".$arrArgument["precioTotal"]."')";
            // echo ($sql);exit;
            return $db->ejecutar($sql);
        }
        public function insertarEnCursoComprado_DAO($db, $arrArgument) {
            $sql = "INSERT INTO cursosComprados (id_pedido, user, id_curso) VALUES ( '".$arrArgument["id_pedido"]."', '".$arrArgument["user"]."', '".$arrArgument["id_curso"]."')";
            // echo ($sql);exit;
            return $db->ejecutar($sql);
        }
            
    }//End productDAO
