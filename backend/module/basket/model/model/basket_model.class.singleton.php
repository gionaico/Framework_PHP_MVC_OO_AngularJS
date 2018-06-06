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

        

    }/*final de la clase*/
