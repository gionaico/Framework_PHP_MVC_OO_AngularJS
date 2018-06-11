<?php

    class examen_model {
        private $bll;
        static $_instance;

        private function __construct() {
            $this->bll = examen_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function nombre($arrArgument) {
            return $this->bll->nombre_BLL($arrArgument);
        }

    }
