'use strict';
app.controller('storesController', ['$scope', '$routeParams', '$location', 'authService', 'ngAuthSettings', '$rootScope', function ($scope, $routeParams, $location, authService, ngAuthSettings, $rootScope) {

    
    /////////////////////////////////////////
    $scope.loadingVisible = false;
    $scope.loadPanel = {
        message: 'لطفا صبر کنید',
        rtlEnabled: true,
        showIndicator: true,
        showPane: true,
        shading: true,
        closeOnOutsideClick: false,
        shadingColor: "rgba(0,0,0,0.4)",
        // position: { of: "body" },
        onShown: function () {

        },
        onHidden: function () {

        },
        bindingOptions: {
            visible: 'loadingVisible'
        }
    };

    ////////////////////////////////////////////


}]);