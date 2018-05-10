
<?php   
    class controller_contact { 
        
        public function __construct() {
            $_SESSION['module'] = "contact";
        }

        public function process_contact() {
        	/// Obtenemos el json enviado
			$data = file_get_contents('php://input');
			// Los convertimos en un array
			$data = json_decode( $data, true );
                
            $res = array(
            			"success"=>false,
            			"mensaje"=>""
            		);

            if($data['token'] === "contact_form"){
                //////////////// Envio del correo al usuario
                $arrArgument = array(
									'type' => 'contact',
									'token' => '',
									'user' => $data['inputName'],
									'email' => $data['inputEmail'],
									'inputSubject' => $data['inputSubject'],
									'inputMessage' => $data['inputMessage']
								);
                
				set_error_handler('ErrorHandler');
				try{
                //////////////// Envio del correo al admin de la web
					$this->copiaAdnin($data);
					sleep(3);
                    enviar_email($arrArgument);
                    $res["mensaje"] = "El email se a enviado correctamente.";
                    $res["success"] = true;
                    echo json_encode($res);
				} catch (Exception $e) {
					$res["mensaje"] = "Server error. Try later ...";
					echo json_encode($res);
				}
				restore_error_handler();
                
                
                
				
            }else{
            	$res["mensaje"] = "Server error. Try later ...";
				echo json_encode($res);
            }
        }
    
        function copiaAdnin($data){
        	$arrArgument = array(
								'type' => 'admin',
								'token' => '',
								'user' => $data['inputName'],
								'email' => $data['inputEmail'],
								'inputSubject' => $data['inputSubject'],
								'inputMessage' => $data['inputMessage']
							);
	        set_error_handler('ErrorHandler');
			try{	            
	            enviar_email($arrArgument);
			} catch (Exception $e) {
				echo "<div class='alert alert-error'>Server error. Try later...</div>";
			}
			restore_error_handler();
        }
    }