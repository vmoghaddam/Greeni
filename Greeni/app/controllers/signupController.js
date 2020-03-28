'use strict';
app.controller('signupController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

    $scope.entity = {
        FirstName:null,
    };

    $scope.txt_FirstName = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'نام',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.FirstName',
             
        }
    };


    $scope.btn_save = {
        text: 'تایید',
        type: 'success',
        icon: 'check',
        width: '100%',
        height: 45,
        rtlEnabled:true,
        validationGroup:'signup',
        onClick: function (e) {

            var result = e.validationGroup.validate();

            if (!result.isValid) {
                
                return;
            }
            /////////


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