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
		
		- (Jwr) esta encriptado y se almacena en localstorage y en cookies. Cuando se inicia sesion la app combrueba si hay almacenados datos en cookies, si los hay la session se activa automaticamente (desencriptando los datos y pintandolos en la vista), si no los hay el motivo pueden ser 2 o por que se cerro sesion anteriormente o porque las cookies caducaron.

		A la hora de loguearse con redes sociales la sequencia sigue varios pasos:
			1. Coge los datos que vienen de firebase y se los pasa al servidor, este comprara los datos que recibe con los que hay en DB, si ya existe devuelve los datos basicos para imprimirlos en pantalla y si no existen los introduce en DB y devuelve tambien los datos basicos.

		- Alerts:
			Utilizo una libreria llamada sweetalert2 y he creado un servicio para toda la app (dado que se usa en varios modulos) donde envio parametros y estos los muestra en pantalla en forma de alert con estilos css.
		
		- Ayudas en forma de alert:
			En algunas ocasiones se presisa informar del formato que debe seguir el usuario, y para ello uso los servicios del alert. Y a estos se puede acceder pinchando en una etiqueta <a> que suele estar junto al input que requiere la informacion del formato.

		-Validacion de formularios:
			Uso una libreria llamada jcs-auto-validate, con ello lo que consigo es que los html se mantengan mas limpios ya que el formulario esta bien ligado a una funcion de validacion, los requisitos minimos de un form estan cubiertos (que los campos esten rellenos .. etc), si requiero algo mas concreto utilizo patterns junto con ng-show.




		