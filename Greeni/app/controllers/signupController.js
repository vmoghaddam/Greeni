'use strict';
app.controller('signupController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

    $scope.entity = {
        FirstName: null,
        LastName: null,
        Company: null,
        Address: null,
        MailCode: null,
        CodeMeli: null,
        Phone: null,
        Mobile: null,
        Email: null,
        Password: null,
        ConfirmPassword: null,
        
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

     $scope.txt_LastName = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' نام خانوادگی',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.LastName',
             
        }
    };

     $scope.txt_Company = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' فروشگاه',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.Company',
             
        }
    };

     $scope.txt_Address = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' آدرس',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.Address',
             
        }
    };

    $scope.txt_MailCode = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' کد پستی',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.MailCode',
             
        }
    };

    $scope.txt_CodeMeli = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' کد ملی',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.CodeMeli',
             
        }
    };

    $scope.txt_Phone = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تلفن',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.Phone',
             
        }
    };

    $scope.txt_Mobile = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تلفن همراه ',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.Mobile',
             
        }
    };

    $scope.txt_Email = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' ایمیل',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.Email',
             
        }
    };

    $scope.txt_Password = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'رمز',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.Password',
             
        }
    };

    $scope.txt_ConfirmPassword = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'ورود دوباره رمز ورود',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.ConfirmPassword',
             
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