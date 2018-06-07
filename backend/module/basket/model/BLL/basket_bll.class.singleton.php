<?php

    class basket_bll{
       
        private $dao;
        private $db;
        static $_instance;

        private function __construct() {
            $this->dao = basket_dao::getInstance();
            $this->db = db::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function cursosEnCarrito_BLL($arrArgument){

          return $this->dao->cursosEnCarrito_DAO($this->db, $arrArgument);
        }

        public function userByToken_BLL($arrArgument){    
            return $this->dao->userByToken_DAO($this->db,$arrArgument);
        }
        public function insertarEnPedido_BLL($arrArgument){    
            return $this->dao->insertarEnPedido_DAO($this->db,$arrArgument);
        }
        
    }
