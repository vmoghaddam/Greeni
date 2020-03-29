'use strict';
app.controller('signinController', ['$scope', '$routeParams', '$location', 'authService', 'ngAuthSettings', '$rootScope', function ($scope, $routeParams, $location, authService, ngAuthSettings, $rootScope) {

    $scope.loginData = {
        userName: "",// "babak@3dchain.io",
        password: "", //"Atrina1359@a",
        useRefreshTokens: false,
        scope: [-1],
    };

    $scope.txt_Mobile = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تلفن همراه ',
        rtlEnabled: true,
        bindingOptions: {
            value: 'loginData.userName',

        }
    };

    $scope.txt_Password = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'کلمه عبور',
        mode: "password",
        rtlEnabled: true,
        bindingOptions: {
            value: 'loginData.password',

        }
    };

    $scope.passwordValidationRules = {
        validationGroup: 'signin',
        validationRules: [{

            type: "required",
            message: "Password is required"
        }]
    };



    $scope.btn_save = {
        text: 'تایید',
        type: 'success',
        icon: 'check',
        width: '100%',
        height: 45,
        rtlEnabled: true,
        validationGroup: 'signin',
        onClick: function (e) {

            var result = e.validationGroup.validate();

            if (!result.isValid) {

                return;
            }
            $scope.login();

            /////////


        }

    };

    $scope.login = function () {
        $scope.loadingVisible = true;
         

        authService.login($scope.loginData).then(function (response) {


            $scope.loadingVisible = false;

            
            $rootScope.userName = authService.authentication.userName;
            if ($rootScope.role == 'Company') {
                $location.path('/profile/company/' + $rootScope.userId);
            }
            else
                $location.path('/greeni1');


        },
            function (err) {
                $scope.loadingVisible = false;
                $scope.message = err.error_description;
                General.ShowNotify('Invalid Username or Password.', 'error');
                
            });
    };

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