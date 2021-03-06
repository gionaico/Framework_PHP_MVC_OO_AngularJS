<?php

    class courses_bll{
       
        private $dao;
        private $db;
        static $_instance;

        private function __construct() {
            $this->dao = courses_dao::getInstance();
            $this->db = db::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function create_course_BLL($arrArgument){

          return $this->dao->create_course_DAO($this->db, $arrArgument);
        }
        
        public function obtain_category_BLL($arrArgument){
          return $this->dao->obtain_category_DAO($arrArgument);
        }

        public function obtain_subCategory_BLL($arrArgument){
          return $this->dao->obtain_subCategory_DAO($arrArgument);
        }

        public function courseDetails_BLL($id){    
            return $this->dao->courseDetails_DAO($this->db,$id);      
        }

        public function cursosFiltrados_BLL($arrArgument){        
            return $this->dao->cursosFiltrados_DAO($this->db,$arrArgument);      
        }

        public function autocomplete_BLL($arrArgument){        
            return $this->dao->autocomplete_DAO($this->db,$arrArgument);      
        }

        public function keyword_BLL($arrArgument){    
            return $this->dao->keyword_DAO($this->db,$arrArgument);      
        }
        public function getAllCourses_BLL($arrArgument){    
            return $this->dao->getAllCourses_DAO($this->db,$arrArgument);      
        }
        public function verComentarios_BLL($arrArgument){    
            return $this->dao->verComentarios_DAO($this->db,$arrArgument);      
        }
        public function insertarComentario_BLL($arrArgument){    
            return $this->dao->insertarComentario_DAO($this->db,$arrArgument);      
        }
        public function insertarPuntuacion_BLL($arrArgument){    
            return $this->dao->insertarPuntuacion_DAO($this->db,$arrArgument);      
        }
        public function cursosPuntuados_BLL($arrArgument){    
            return $this->dao->cursosPuntuados_DAO($this->db,$arrArgument);      
        }
        public function cursosPuntos_BLL($arrArgument){    
            return $this->dao->cursosPuntos_DAO($this->db,$arrArgument);      
        }
        public function verificaPuntos_BLL($arrArgument){    
            return $this->dao->verificaPuntos_DAO($this->db,$arrArgument);      
        }
        public function updatePuntos_BLL($arrArgument){    
            return $this->dao->updatePuntos_DAO($this->db,$arrArgument);      
        }
    }
