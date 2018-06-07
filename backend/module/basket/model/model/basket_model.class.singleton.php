<?php

    class basket_model {
        private $bll;
        static $_instance;

        private function __construct() {
            $this->bll = basket_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)){
                self::$_instance = new self();
                // echo "xxxxxxxxxx";
            }
            return self::$_instance;
        }

        public function cursosEnCarrito($arrArgument) {
            // echo json_encode("hbjhvjhvj");exit;
            return $this->bll->cursosEnCarrito_BLL($arrArgument);
        }
        public function userByToken($arrArgument) {
            return $this->bll->userByToken_BLL($arrArgument);
        }
        public function insertarEnPedido($arrArgument) {
            return $this->bll->insertarEnPedido_BLL($arrArgument);
        }

    }/*final de la clase*/
