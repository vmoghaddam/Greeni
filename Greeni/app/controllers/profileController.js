'use strict';
app.controller('profileController', ['$scope', '$rootScope', '$location', '$routeParams', 'personService', function ($scope, $rootScope, $location, $routeParams, personService) {


    //وقتی از این مدل چیزا استفاده می کنی:
    //$routeParams
    //باید اون بالا اضافه شده باشه
    $scope.profileId = $routeParams.id;
    alert($scope.profileId);
    //این کس شعرایی که کامنت کردم چیه؟
    //var $jq = jQuery.noConflict();
    //$jq('body').on('click', '.link-profile', function (e) {
    //    // do something
    //    e.preventDefault();
    //    var id = $jq(this).data('uid');
    //    // $rootScope.navigate('/profile/'+id);
    //    $window.open('#!/profile/' + id);
    //    $scope.profileId = $routeParams.id;
       
    //});
    
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
        website: '',



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

    $scope.txt_Company = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' فروشگاه',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.name',

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

    $scope.txt_MailCode = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'کد پستی',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.zipCode',

        }
    };

    $scope.txt_CodeMeli = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: ' کد ملی',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.NID',

        }
    };

    $scope.txt_Phone = {
        hoverStateEnabled: false,
        width: '100%',
        height: 45,
        placeholder: 'تلفن',
        rtlEnabled: true,
        bindingOptions: {
            value: 'entity.phone',

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
                var password = $jq("#password-validation").dxTextBox("instance");
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
    $scope.bind = function () {
        $scope.loadingVisible = true;
        personService.getCompany($scope.profileId).then(function (result) {
            $scope.loadingVisible = false;
            
            console.log(result);

        }, function (err) { $scope.loadingVisible = false; General.ShowNotify(err.message, 'error'); });
    }

    $scope.bind();
    ////////////////////////////////////////////

}]);