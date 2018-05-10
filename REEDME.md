	*Form User
		- Validate: compara datos con DB y consigue que si ya hay un nombre de usuario en la DB a un nuevo usuario no le permita registrarse con el mismo user_name. Sucede lo mismo con el email y el tlf ya que entiendo que a la hora de hacer un recover_password, estos datos deben ser unicos de cada usuario.

	*Form Curso
		-Este formulario se usa para poder cargar datos sobre un curso que nosotros como usuarios queremos comercializar. Tiene validaciones js y php asi como usa dropzone y selects dependientes uno de otro.
		 
	*Homepage
		-Cursos mejor valorados: extrae de la base de datos los cursos mas valorados por los usuarios. Al cargar la pagina aparecen los 3 mejores y mediante un boton van apareciendo los siguientes. Cada curso esta identificado con un id, asi que al hacer click sobre un curso nos redirecciona a la vista de todos los detalles del curso sobre el que hicimos click.
		Al hacer click el id se guarda en una variable global del servidor y cuando carga la vista de los detalles esta hace una peticion y recoge el valor que se guardo en la vista anterior en el servidor.

		-Categorias de cursos: extrae de la informacion de un archivo JSON, donde estan las categorias y las fotos que se relacionan con cada categoria. Al cargar la pagina aparecen las 3 primeras categorias y mediante un boton van apareciendo los siguientes.

	*Courses
		-Esta vista tiene los cursos que hay en la base de datos, si se accede a esta vista mediante el homepage (es decir haciendo click sobre una categoria de los cursos, aqui nos aparecera los cursos relacionados con la categoria elegida), en caso de acceder a esta vista mediante el boton del menu "courses" nos muestra todas las categotias que tiene la app.

		-Consta de filtros para poder acotar lo maximo posible las preferencias del usuario.

		-Paginacion y filtros hechas con javascript.

		-Usa mapa para localizar los cursos. Tiene un mapa general donde se puede ver varios cursos asi como un mapa particular de cada curso en su vista individual.

	*Courses-Homepage
		- Las dos vistas constan de un input con autocomplete, gastan las mismas funciones por ello fue necesario crear un archivo js donde se almacenan funciones comunes en varias vistas.

		- El autocomplete homepage nos redirecciona a la vista courses, donde veremos los resultados a lo que hemos escrito en el input.
		
		- El autocomplete courses, cada vez que cambiamos la palabra o letra en el input este recarga la informacion de db y nos muestra todo lo relacionado a lo que hemos escrito, asi como resetea la paginacion y nos lo vuelve a organizar segun la cantidad de resultados obtenidos.

	*Profile
		- Consta de register, login manual, login facebook, twitter y google+.
		- Recover password.
		- Sing UP
		- Update my profile

	
	MEJORAS
		- Filtros en el modulo de courses, para afinar la busqueda de un curso.
		
		- Uso de la clase Mail usando phpmailer.		
		
		- Se emplean 2 mapas (de google maps) una esta en list donde aparecen maximo 11 y van variando segun editemos los filtros, los markers tienen un link que si pinchamos encima nos envia a los detalles del producto sobre el que hemos pinchado y el segundo esta en el detail de cada producto (en su vista individual) donde nos muestra el punto de su ubicacion con una animacion en el marker. 
		
		- Agregada clase Log (esta nos permite llevar un control de ls errores que se producen en, el proyecto), imprime los errores en el directorio log. Para comprobar su funcionamiento basta con cambiar el nombre de una contante y esto provocara un fallo, el cual se imprimira, para tener una referencia de lo que ha sucedido.
		
		- En view/css tiene varios themes (cambia el color de la web por algun evento concreto), se pueden cambiar en el header de la aplicacion.
		
		- (Jwr) El token que se almacena en localStorage es la union de un token creado con md5 + datos basicos del usuario codificados con Base64 + el el primer token codificado con Base64. Cada parametro esta separado por un punto para hacer mas sencillo su manipulacion.
		El motivo de hacer esto es no hacer peticiones a DB constantemente para datos basicos del usuario.
		El procedimiento que sigue es el de comparar el parametro 1 con el parametro 3 decodificado con Base64, y si resulta correcto nos permite leer los datos del encriptados del usuario en caso contrario nos marca un error cierra sesion y nos solicita que iniciemos sesion nuevamente.

		A la hora de loguearse con redes sociales la sequencia sigue varios pasos:
			1. coge los datos que vienen de firebase y se los pasa al servidor, este comprara los datos que recive con los que hay en DB, si ya existe actualiza el token pero si no existe lo registra y crea el token.



		