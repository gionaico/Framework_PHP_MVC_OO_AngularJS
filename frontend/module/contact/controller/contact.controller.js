

appLibra.controller('contactCtrl', function ($scope, services) {
    $scope.contact = {
        inputName: "",
        inputEmail: "",
        inputSubject: "",
        inputMessage: ""
    };

    $scope.SubmitContact = function (valido) {
        var data = {
        	"inputName": $scope.contact.inputName, 
        	"inputEmail": $scope.contact.inputEmail, 
        	"inputSubject": $scope.contact.inputSubject, 
        	"inputMessage": $scope.contact.inputMessage,
        	"token":'contact_form'};

        var contact_form = JSON.stringify(data);

        services.post('contact', 'process_contact', contact_form)
        	.then(function (response) {
        		console.log(response);

	            if (response.success) {
		            var toasts = new Toast('Sending email', 'info', 'toast-bottom-right', response.mensaje, 15000);
		    		delayToasts(toasts,0);
	            } else {
	            	var toasts = new Toast('Sending email', 'error', 'toast-bottom-right', response.mensaje, 15000);
		    		delayToasts(toasts,0);
	            }	            
        	});

    };
});