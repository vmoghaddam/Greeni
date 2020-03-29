﻿'use strict';
app.controller('signupController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

    $scope.entity = {
        firstName: null,
        lastName: null,
        name: null,
        address: null,
        zipCode: null,
        NID: null,
        phone: null,
        mobile: null,
        email: null,
        password: null,
        confirmPassword: null,
        phone2: '',
        phone3: '',
        website:'',
     
        
        
    };

    $scope.txt_FirstName = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'نام',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.firstName',
             
        }
    };

     $scope.txt_LastName = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' نام خانوادگی',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.lastName',
             
        }
    };

     $scope.txt_Company = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' فروشگاه',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.name',
             
        }
    };

     $scope.txt_Address = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' آدرس',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.address',
             
        }
    };

    $scope.txt_MailCode = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'کد پستی',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.zipCode',
             
        }
    };

    $scope.txt_CodeMeli = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' کد ملی',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.NID',
             
        }
    };

    $scope.txt_Phone = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تلفن',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.phone',
             
        }
    };

    $scope.txt_Mobile = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تلفن همراه ',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.mobile',
             
        }
    };

    $scope.txt_Email = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' ایمیل',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.email',
             
        }
    };

    $scope.txt_Password = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'کلمه عبور',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.password',
             
        }
    };

    $scope.txt_ConfirmPassword = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تکرار کلمه عبور',
        rtlEnabled:true,
        bindingOptions: {
            value: 'entity.confirmPassword',
             
        }
    };


    $scope.passwordValidationRules = {
        validationGroup: 'signupres',
        validationRules: [{

            type: "required",
            message: "Password is required"
        }]
    };

    $scope.confirmPasswordValidationRules = {
        validationGroup: 'signupres',
        validationRules: [{

            type: "compare",
            comparisonTarget: function () {
                var password = $jq("#password-validation").dxTextBox("instance");
                if (password) {
                    return password.option("value");
                }
            },
            message: "'Password' and 'Confirm Password' do not match."
        },
        {
            type: "required",
            message: "Confirm Password is required"
        }]
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