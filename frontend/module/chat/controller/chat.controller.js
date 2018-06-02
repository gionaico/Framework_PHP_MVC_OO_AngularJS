appLibra.controller('chatCtrl', ['Messages', '$scope', function(Messages, $scope) {

	// Message Inbox
    $scope.messages = [];
    Messages.user({id: "gio", name: "giogio"});

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