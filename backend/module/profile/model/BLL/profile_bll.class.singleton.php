<?php

class profile_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = profile_dao::getInstance();
        $this->db = db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function create_user_BLL($arrArgument){
      return $this->dao->create_user_DAO($this->db, $arrArgument);
    }


    public function checkUser_BLL($arrArgument){        
      return $this->dao->checkUser_DAO($this->db, $arrArgument);
    }
    
    public function checkUserEmail_BLL($arrArgument){        
      return $this->dao->checkUserEmail_DAO($this->db, $arrArgument);
    }


    public function obtain_countries_BLL($url){
      return $this->dao->obtain_countries_DAO($url);
    }


    public function obtain_provinces_BLL(){
      return $this->dao->obtain_provinces_DAO();
    }


    public function obtain_cities_BLL($arrArgument){
      return $this->dao->obtain_cities_DAO($arrArgument);
    }

    
    public function registrarUser_BLL($arrArgument){    
        return $this->dao->registrarUser_DAO($this->db,$arrArgument);
    }


    public function registrarUserSocial_BLL($arrArgument){    
        return $this->dao->registrarUserSocial_DAO($this->db,$arrArgument);
    }

    public function updateToken_BLL($arrArgument){    
        return $this->dao->updateToken_DAO($this->db,$arrArgument);
    }

    public function DatosBasicosUser_BLL($arrArgument){    
        return $this->dao->DatosBasicosUser_DAO($this->db,$arrArgument);
    }
    public function activarUser_BLL($arrArgument){    
        return $this->dao->activarUser_DAO($this->db,$arrArgument);
    }
    public function updatePass_BLL($arrArgument){    
        return $this->dao->updatePass_DAO($this->db,$arrArgument);
    }
     public function checkUserEmail2_BLL($arrArgument){    
        return $this->dao->checkUserEmail2_DAO($this->db,$arrArgument);
    }
    public function update_usuario_BLL($arrArgument){    
        return $this->dao->update_usuario_DAO($this->db,$arrArgument);
    }
    public function userByToken_BLL($arrArgument){    
        return $this->dao->userByToken_DAO($this->db,$arrArgument);
    }
    public function cambioAvatar_BLL($arrArgument){    
        return $this->dao->cambioAvatar_DAO($this->db,$arrArgument);
    }
    public function traerUsuarios_BLL($arrArgument){    
        return $this->dao->traerUsuarios_DAO($this->db,$arrArgument);
    }
    public function deleteUser_BLL($arrArgument){    
        return $this->dao->deleteUser_DAO($this->db,$arrArgument);
    }
    public function compruebaLike_BLL($arrArgument){    
        return $this->dao->compruebaLike_DAO($this->db,$arrArgument);
    }
    public function insertLike_BLL($arrArgument){    
        return $this->dao->insertLike_DAO($this->db,$arrArgument);
    }
    public function traerCompras_BLL($arrArgument){    
        return $this->dao->traerCompras_DAO($this->db,$arrArgument);
    }
    public function traercursosComprados_BLL($arrArgument){    
        return $this->dao->traercursosComprados_DAO($this->db,$arrArgument);
    }
    public function traerCursosConLike_BLL($arrArgument){    
        return $this->dao->traerCursosConLike_DAO($this->db,$arrArgument);
    }
    public function traercursosComentados_BLL($arrArgument){    
        return $this->dao->traercursosComentados_DAO($this->db,$arrArgument);
    }
    public function traerInfoCursosComentados_BLL($arrArgument){    
        return $this->dao->traerInfoCursosComentados_DAO($this->db,$arrArgument);
    }
}
