	*Form User
		- Validate: compara datos con DB y consigue que si ya hay un nombre de usuario en la DB a un nuevo usuario no le permita registrarse con el mismo user_name. Sucede lo mismo con el email y el tlf ya que entiendo que a la hora de hacer un recover_password, estos datos deben ser unicos de cada usuario.

	*Form Curso
		-Este formulario se usa para poder cargar datos sobre un curso que nosotros como usuarios queremos comercializar. Tiene validaciones js y php asi como usa dropzone y selects dependientes uno de otro.
		 
	*Homepage
		-Cursos mejor valorados: extrae de la base de datos los cursos mas valorados por los usuarios. Al cargar la pagina aparecen los 3 mejores y mediante un boton van apareciendo los siguientes. Cada curso esta identificado con un id, asi que al hacer click sobre un curso nos redirecciona a la vista de todos los detalles del curso sobre el que hicimos click.
		

		-Categorias de cursos: extrae de la informacion de un archivo JSON, donde estan las categorias y las fotos que se relacionan con cada categoria. Al cargar la pagina aparecen las 3 primeras categorias y mediante un boton van apareciendo los siguientes.

	*Courses
		-Esta vista tiene los cursos que hay en la base de datos, si se accede a esta vista mediante el homepage (es decir haciendo click sobre una categoria de los cursos, aqui nos aparecera los cursos relacionados con la categoria elegida), en caso de acceder a esta vista mediante el boton del menu "courses" nos muestra todas las categotias que tiene la app.

		-Paginacion y filtros hechas con AngularJS.

		-Usa mapa para localizar los cursos. Tiene un mapa general donde se puede ver varios cursos asi como un mapa particular de cada curso en su vista individual.

	
		- El autocomplete courses, cada vez que cambiamos la palabra o letra en el input AngularJS nos filtra todos los cursos relacionados con lo que se ha escrito. Filtra cualquier coincidencia (en titulo, descripcion, categoria ... etc). 

	*Profile
		- Consta de register, login manual, login facebook, twitter y google+.
		- Recover password.
		- Sing UP

	
	MEJORAS
		- Filtros en el modulo de courses, para afinar la busqueda de un curso.
		
		- Uso de la clase Mail usando phpmailer.		
		
		- Se emplean 2 mapas (de google maps) una esta en list. Los markers tienen un link que si pinchamos encima, nos envia a los detalles del producto sobre el que hemos pinchado y el segundo esta en el details de cada producto (en su vista individual) donde nos muestra el punto de su ubicacion. 
		
		- Agregada clase Log (esta nos permite llevar un control de ls errores que se producen en, el proyecto), imprime los errores en el directorio log. Para comprobar su funcionamiento basta con cambiar el nombre de una contante y esto provocara un fallo, el cual se imprimira, para tener una referencia de lo que ha sucedido.
		
		- En view/css tiene varios themes (cambia el color de la web por algun evento concreto), se pueden cambiar en el header de la aplicacion.
		
		- (Jwr) 
			1.Cuando usuario se loguea inserta en base de datos un token nuevo.
			2.Este token se almacena en cookies para poderlo coger en el momento de traer datos del usuario.
			3.El token esta disenyado con dos partes, con ello logro que la aplicacion detecte si ha sido manipulado (editado e eliminado). El procedimiento es el siguiente:
					-Coge el token de cookies y en fronend detecta que sea el formato con el que se disenyo.
					-Si no hay problema en el formato lo envia al controlador de backend y este comprueba que si aun cumpliendo el formato sea correcto (es decir, comprueba que sea un token que se pueda validar a si mismo).
					-Si el paso anterior es superado, por ultimo lo compara contra Db y si existe, me devuelve los datos del usuario al cual pertenece el token.

					- **** Si no cumple alguna de las restricciones anteriores, me expulsa de la sesion y elimina la cookie, asi que tendremos que loguearnos nuevamente.
					-Este proceso ocurre por ejemplo cuando intentamos editar nuestro perfil.


		A la hora de loguearse con redes sociales la sequencia sigue varios pasos:
			1. Coge los datos que vienen de firebase y se los pasa al servidor, este comprara los datos que recibe con los que hay en DB, si ya existe devuelve los datos basicos para imprimirlos en pantalla y si no existen los introduce en DB y devuelve tambien los datos basicos para verlos en pantalla junto con el token.

		- Alerts:
			Utilizo una libreria llamada sweetalert2 y he creado un servicio para toda la app (dado que se usa en varios modulos) donde envio parametros y estos los muestra en pantalla en forma de alert con estilos css.
		
		- Ayudas en forma de alert:
			En algunas ocasiones se presisa informar del formato que debe seguir el usuario, y para ello uso los servicios del alert. Y a estos se puede acceder pinchando en una etiqueta <a> que suele estar junto al input que requiere la informacion del formato.

		-Validacion de formularios:
			Uso una libreria llamada jcs-auto-validate, con ello lo que consigo es que los html se mantengan mas limpios ya que el formulario esta bien ligado a una funcion de validacion, los requisitos minimos de un form estan cubiertos (que los campos esten rellenos .. etc), si requiero algo mas concreto utilizo patterns junto con ng-show.

		-Dropzone
			Esta hecho para que cada usuario solo pueda tener una foto de perfil.
			En backend al subir una foto, la guarda como foto "b", y si finalmente el usuario pulsa el boton de guardar, el backend elimina la foto de perfil anterior y coloca a la foto "b" como nueva foto de perfil.
			Hecho esto, la guarda en DB, si tiene exito todos estos procesos, devuelve un mensaje de exito y cambia la imagen en el perfil automaticamente y al insatante. Si hay errores los pinta para que el usuario los vea y actue en consecuencia.

		-Vistas Admin
			Los usuarios que tienen de tipo administrador tienen acceso a un crud de todos los uduarios registrados en la aplicacion, de esta forma este tipo de usuario tienen acceso a:
				*Una tabla dinamica y con filtros para poder afinar la busqueda de cualquier tipo de usuario de una forma rapida y eficaz.
				*Disponen tambien de una opcion para ordenar por varios parametros.
				*Paginacion.
				*Edicion de la vista (pueden paginar de 10 en 10 o de 8 en 8 usuarios segun las necesidades del administrador).

			Tienen acceso a un modal donde se ven los datos del usuario sobre el que se ha hecho click.

			Dispone de un formulario update, para todos los usuarios con validacion de datos en JS y en PHP, asi como la posibilidad de cambiar la foto de un usuario (el avatar).

		-Creacion de una factoria propia para el update que a su vez se reutiliza para el update del administrador.
		-Validacion de token en cada vista de administrador, si el token no es valido o el usuario no es de tipo admin los controladores cirran sesion y nos obliga a loguearnos nuevamente.

	-Mejoras Ultima Semana

		-Al visitar un curso (su vista de detalles) guarda en cookies el id codificado del cusro que estamos viendo, con ellos consigo que cuando habre la pagina en otras ocasiones en el home tenga un listado de los cursos visitados por el usuario, como sugerencias para el.

		- Chat:
			*A este servicio solo tienen acceso los usuarios logueados, este servicio ofrece la posibilidad de interactuar en directo con la alguien del personal de la empresa, para resolucion de problemas o dudas que tenga el cliente. En el lado de la empresa pueden aparecer varios usuarios a la vez.

		-Like:
			* Este sistema permite hacer like a los cursos siempre y cuando estemos logueados, solo permite hacer un like a cada curso, si un curso ya tiene like nos devuelve una alerta de que el curso ya lo tiene.

		-Commentarios y scroll
			*Permite a los usuarios logueados hacer comentarios de un curso y a los que no estan logueados solo permite ver los comentarios de otros usuarios. Todo esto se ve en un modal el cual tiene encapsulado a todos los comentarios en un div al cual se le puede hacer scroll para leer todos los comentarios.

		-Carrito 
			*Con el carrito hay la posibilidad de comprar desde diferentes vistas de la pliacacion, ya que uso rootScope e inicializo en .run, a su vez los productos seleccionados por un usuario se van guardando (codificados), en localstorage, para mantenerlo por si cierra la pagina y no realizo la compra, con ello se puede recuperar los datos del carrito,  al abrir el navegador nuevamente el carrito tiene los ultimos productos agregados. A la hora del pago el valor total se calcula en backend para que los datos de precio sean mas puros y estar seguros que no han sido manipulados de alguna forma.

		-Panel de Control
			*Es una vista donde el usuario, puede acceder a ver sus datos, editarlos, ver sus ultimas compras, ver los comentarios hechos, los likes que ha hecho y desde alli poder redireccionarse a las view de cada curso.




		