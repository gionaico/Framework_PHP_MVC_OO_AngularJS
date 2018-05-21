
appLibra.controller('courseFormCtrl', function ($scope) {
	$scope.courseForm={};
	$scope.regex = {
        price:'^[0-9]{1,3}([.][0-9]{1,2})?$'
      };

	$scope.submitCreateCourse = function (valido) {
		console.log("submitCreateCourse");
	};
});

/*	$('#dropzone').dropzone({
        // url: "module/courses/controller/controller_courses.php?upload=true",
        url: "../../courses/upload",
        addRemoveLinks: true,
        maxFileSize: 2000,
        dictResponseError: "Ha ocurrido un error en el server",
        acceptedFiles: 'image/*',
        init: function () {
            this.on("success", function (file, response) {
				console.log(response);
                $("#progress").show();
                $("#bar").width('100%');
                $("#percent").html('100%');
                $('.msg').text('').removeClass('msg_error');
                $('.msg').text('Success Upload image!!').addClass('msg_ok');//.animate({'right': '300px'}, 300);
            });
        },
        complete: function (file) {
            if(file.status == "success"){
				console.log("El archivo '"+ file.name+"' pasa js ");
            }
        },
        error: function (file) {
			alert("Error en js subiendo el archivo " + file.name);
        },
        removedfile: function (file, serverFileName) {
            var name = file.name;

            $.ajax({
                type: "POST",
                url: "../../courses/delete",
                data: "filename=" + name,
                success: function (data) {
                    $("#progress").hide();
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    $("#e_avatar").html("");

                    var json = JSON.parse(data);
                    console.log(json.res);
                    var element= file.previewElement;
                    if (json.res) {
                        console.log(element);
                        if (element  != null) {
                            console.log("fgfdgentra");
                            element.parentNode.removeChild(file.previewElement);
                            alert("Imagen eliminada: " + name);
                        } else {
                            false;
                        }
                    } else { //json.res == false, elimino la imagen también
                        
                        if (element != null) {
                            element.parentNode.removeChild(file.previewElement);
                        } else {
                            false;
                        }
                    }
                }
            });
        }
    });//end_dropzone*/
