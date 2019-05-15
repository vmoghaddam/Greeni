'use strict';
app.controller('greeni1Controller', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.productId = 1;

    $scope.basketCount = 0;
    $scope.isBasketNoVisible = $scope.basketCount>0;
    $scope.updateBasketCount = function () {
        $scope.basketCount = $rootScope.getBasketTotalCount();
        $scope.isBasketNoVisible = $scope.basketCount > 0;
    };
    $scope.updateBasketCount();

    $scope.orderValue = 1;
    $scope.num_order = {
        width: '100%',
        height: 45,
        min: 1,
        showSpinButtons: true,
        rtlEnabled: true,
        bindingOptions: {
            value:'orderValue',
        }
    };
    $scope.mobile = null;
    $scope.num_mobile = {
        width: '100%',
        height: 45,
        placeholder:'شماره موبایل',
        bindingOptions: {
            value: 'mobile',
        }
    };
    $scope.name = null;
    $scope.txt_name = {
        rtlEnabled: true,
        width: '100%',
        height: 45,
        placeholder: 'نام',
        bindingOptions: {
            value: 'name',
        }
    };

    $scope.subscribe = function () {
        alert('x');
    };
    $scope.addToBasket = function () {
        $rootScope.addToBasket($scope.productId, $scope.orderValue);
        $scope.updateBasketCount();
        var _message = $scope.orderValue + ' عدد گرینی مکس 1 به سبد خرید اضافه شد';
        DevExpress.ui.notify({ message: _message, shading: true, rtlEnabled: true,width:'100%' }, "success", 500);
        $scope.orderValue = 1;
         
    };
    $scope.ref = function () {
        AOS.refresh();
    };
     
    $scope.$on('$viewContentLoaded', function () {
        //alert(1);
       
    });
    angular.element(function () {
        AOS.refresh();
    });
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
    ////////////////////////////////////
    
}]);