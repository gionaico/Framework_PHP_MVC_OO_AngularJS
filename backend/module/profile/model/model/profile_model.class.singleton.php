<?php

class profile_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = profile_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function create_user($arrArgument) {
        return $this->bll->create_user_BLL($arrArgument);
    }

    public function checkUser($arrArgument) {
        return $this->bll->checkUser_BLL($arrArgument);
    }
    
    public function checkUserEmail($arrArgument) {
        return $this->bll->checkUserEmail_BLL($arrArgument);
    }

    public function obtain_countries($url){
        return $this->bll->obtain_countries_BLL($url);
    }

    public function obtain_provinces(){
        return $this->bll->obtain_provinces_BLL();
    }

    public Function obtain_cities($arrArgument){
        return $this->bll->obtain_cities_BLL($arrArgument);
    }

    public Function registrarUser($arrArgument){           
        return $this->bll->registrarUser_BLL($arrArgument);
    }

    public Function registrarUserSocial($arrArgument){           
        return $this->bll->registrarUserSocial_BLL($arrArgument);
    }

    public Function updateToken($arrArgument){           
        return $this->bll->updateToken_BLL($arrArgument);
    }
    public Function DatosBasicosUser($arrArgument){           
        return $this->bll->DatosBasicosUser_BLL($arrArgument);
    }
    public Function activarUser($arrArgument){           
        return $this->bll->activarUser_BLL($arrArgument);
    }
    public Function updatePass($arrArgument){           
        return $this->bll->updatePass_BLL($arrArgument);
    }
    public function checkUserEmail2($arrArgument) {
        return $this->bll->checkUserEmail2_BLL($arrArgument);
    }
    public function update_usuario($arrArgument) {
        return $this->bll->update_usuario_BLL($arrArgument);
    }
    public function userByToken($arrArgument) {
        return $this->bll->userByToken_BLL($arrArgument);
    }
    public function cambioAvatar($arrArgument) {
        return $this->bll->cambioAvatar_BLL($arrArgument);
    }
    public function traerUsuarios($arrArgument) {
        return $this->bll->traerUsuarios_BLL($arrArgument);
    }
    public function deleteUser($arrArgument) {
        return $this->bll->deleteUser_BLL($arrArgument);
    }
    public function compruebaLike($arrArgument) {
        return $this->bll->compruebaLike_BLL($arrArgument);
    }
    public function insertLike($arrArgument) {
        return $this->bll->insertLike_BLL($arrArgument);
    }
    public function traerCompras($arrArgument) {
        return $this->bll->traerCompras_BLL($arrArgument);
    }
    public function traercursosComprados($arrArgument) {
        return $this->bll->traercursosComprados_BLL($arrArgument);
    }
    public function traerCursosConLike($arrArgument) {
        return $this->bll->traerCursosConLike_BLL($arrArgument);
    }
    public function traercursosComentados($arrArgument) {
        return $this->bll->traercursosComentados_BLL($arrArgument);
    }
    public function traerInfoCursosComentados($arrArgument) {
        return $this->bll->traerInfoCursosComentados_BLL($arrArgument);
    }
    public function traercursosPuntuados($arrArgument) {
        return $this->bll->traercursosPuntuados_BLL($arrArgument);
    }


}
