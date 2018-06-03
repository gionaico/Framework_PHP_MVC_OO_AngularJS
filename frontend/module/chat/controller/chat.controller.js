appLibra.controller('chatCtrl', ['Messages', '$rootScope', '$scope', function(Messages, $rootScope, $scope) {

	// Message Inbox
    $scope.messages = [];
    console.log($rootScope.usuario);
    Messages.user({id: $rootScope.usuario, name: $rootScope.usuario});

    // Receive Messages
    Messages.receive(function(message, isPrivate) {
        $scope.messages.push(message);
    });

    // Send Messages
    $scope.send = function() {

        var message = { 
            to: 'support-agent',
            data: $scope.textbox ,
            user: Messages.user()
        }; 
        $scope.textbox="";

        Messages.send(message);

        $scope.messages.push(message);

    };

}]);