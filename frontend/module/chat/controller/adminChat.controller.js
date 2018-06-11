appLibra.controller('adminChatCtrl', ['Messages', '$scope',  function(Messages, $scope) {

    // Message Inbox
    $scope.chats = {};

    Messages.user({id: "support-agent", name: "Support Agent"});

    // Receive Messages
    Messages.receive(function(message, isPrivate) {
        
        // isPrivate is always true

        // create a new chat if doesn't exist
        if(!$scope.chats[message.user.id]) {

            $scope.chats[message.user.id] = {
                user: message.user,
                messages: []
            };

        }
        
        // add messages to the chat
        $scope.chats[message.user.id].messages.push(message);

    });

    // Send Messages
    $scope.send = function(to, text) {

        var message = { 
            to: to,
            data: text,
            user: Messages.user()
        };
        $scope.text=="";
        Messages.send(message);

        // because we are sending a message to a user's personal channel,
        // but not subscribing to it we need to keep track of sent messages 
        // ourselves
        $scope.chats[to].messages.push(message);

    };

}]);