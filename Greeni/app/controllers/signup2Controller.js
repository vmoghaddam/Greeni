'use strict';
app.controller('signup2Controller', ['$scope', '$rootScope', '$location', 'authService', '$route', '$routeParams', function ($scope, $rootScope, $location, authService, $route, $routeParams) {
    $scope.refer = $routeParams.refer;
    var $jq = jQuery.noConflict();
    $scope.entity = {
        firstName: null,
        lastName: null,
        address: null,
        mobile: null,
        email:null,
        

    };
    $scope.txt_Email = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' ایمیل',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.email',

        }
    };
    $scope.txt_FirstName = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'نام',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.firstName',

        }
    };

    $scope.txt_LastName = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' نام خانوادگی',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.lastName',

        }
    };


    $scope.txt_Address = {
        hoverStateEnabled: false,
        width: '100%',
        height: 90,
        placeholder: ' آدرس',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.address',

        }
    };

    $scope.txt_Mobile = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تلفن همراه ',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.mobile',

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
            value: 'entity.password',

        }
    };

    $scope.txt_ConfirmPassword = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تکرار کلمه عبور',
        mode: "password",
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.confirmPassword',

        }
    };

    $scope.passwordValidationRules = {
        validationGroup: 'signup',
        validationRules: [{

            type: "required",
            message: "Password is required"
        }]
    };

    $scope.confirmPasswordValidationRules = {
        validationGroup: 'signup',
        validationRules: [{

            type: "compare",
            comparisonTarget: function () {
                var password = $jq("#password-validation2").dxTextBox("instance");
                if (password) {
                    return password.option("value");
                }
            },
            message: "کلمه عبور اشتباه است"
        },
        {
            type: "required",
            message: "Confirm Password is required"
        }]
    };

    $scope.btn_signup = {
        text: 'ثبت نام فروشگاه',
        type: 'default',
        icon: 'check',
        width: '100%',
        height: 45,
        rtlEnabled: true,
        //validationGroup: 'signin',
        onClick: function (e) {
            if (!$scope.refer)
                $location.path('/signup');
            else
                $location.path('/signup/' + $scope.refer)


        }

    };


    $scope.btn_save = {
        text: 'تایید',
        type: 'success',
        icon: 'check',
        width: '100%',
        height: 45,
        rtlEnabled: true,
        validationGroup: 'signup',
        onClick: function (e) {

            var result = e.validationGroup.validate();

            if (!result.isValid) {

                return;
            }
            /////////
            $scope.loadingVisible = true;
            authService.registerUser($scope.entity).then(function (response) {

                // General.ShowNotify(Config.Text_SavedOk, 'success');

                $scope.loadingVisible = false;
                if (!$scope.refer)
                    $location.path('/signin');
                else
                    $location.path('/signin/' + $scope.refer);

            }, function (err) { $scope.loadingVisible = false; General.ShowNotify(err.message, 'error'); });
            ////////////////////
        }

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