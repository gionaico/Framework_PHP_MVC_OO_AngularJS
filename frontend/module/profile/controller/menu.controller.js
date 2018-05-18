appLibra.controller('menuCtrl', function ($scope, $uibModal, $rootScope, $anchorScroll) {

    $scope.open = function () {
        var modalInstance = $uibModal.open({
            animation: 'true',
            templateUrl: 'frontend/module/profile/view/modal_Login.html',
            controller: 'modalCtrl',
            size: "md"/*,
            resolve: {
                        categoriaCourses: function (services) {
                            return services.get('homepage', 'getCategorias');
                        }
                    }*/
        });
    };

});