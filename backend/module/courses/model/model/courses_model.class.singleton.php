<?php

    class courses_model {
        private $bll;
        static $_instance;

        private function __construct() {
            $this->bll = courses_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)){
                self::$_instance = new self();
                // echo "xxxxxxxxxx";
            }
            return self::$_instance;
        }

        public function create_course($arrArgument) {
            return $this->bll->create_course_BLL($arrArgument);
        }

        public Function obtain_category($arrArgument){
            return $this->bll->obtain_category_BLL($arrArgument);
        }
        public Function obtain_subCategory($arrArgument){
            return $this->bll->obtain_subCategory_BLL($arrArgument);
        }
        public Function courseDetails($id){
           
            return $this->bll->courseDetails_BLL($id);
        }

        public Function cursosFiltrados($arrArgument){           
            return $this->bll->cursosFiltrados_BLL($arrArgument);
        }

         public Function autocomplete($arrArgument){           
            return $this->bll->autocomplete_BLL($arrArgument);
        }

        public Function keyword($arrArgument){           
            return $this->bll->keyword_BLL($arrArgument);
        }
        public Function getAllCourses($arrArgument){           
            return $this->bll->getAllCourses_BLL($arrArgument);
        }
        public Function verComentarios($arrArgument){           
            return $this->bll->verComentarios_BLL($arrArgument);
        }
        public Function insertarComentario($arrArgument){           
            return $this->bll->insertarComentario_BLL($arrArgument);
        }
        public Function insertarPuntuacion($arrArgument){           
            return $this->bll->insertarPuntuacion_BLL($arrArgument);
        }
        public Function cursosPuntuados($arrArgument){           
            return $this->bll->cursosPuntuados_BLL($arrArgument);
        }
        public Function cursosPuntos($arrArgument){           
            return $this->bll->cursosPuntos_BLL($arrArgument);
        }
        public Function verificaPuntos($arrArgument){           
            return $this->bll->verificaPuntos_BLL($arrArgument);
        }
        public Function updatePuntos($arrArgument){           
            return $this->bll->updatePuntos_BLL($arrArgument);
        }
    }
