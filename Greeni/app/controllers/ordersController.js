'use strict';
app.controller('ordersController', ['$scope', '$rootScope', '$location', '$route', 'orderService', function ($scope, $rootScope, $location, $route, orderService) {
    // $rootScope.setOrderNo(null);
   

    $scope.basketCount = 0;
    $scope.isBasketNoVisible = $scope.basketCount > 0;
    $scope.updateBasketCount = function () {
        $scope.basketCount = $rootScope.getBasketTotalCount();
        $scope.isBasketNoVisible = $scope.basketCount > 0;
    };
    $scope.updateBasketCount();

    $scope.dataSource = [];
    $scope.invoice_price = 0;
    $scope.orders = null;
    $scope.bind = function () {

        $scope.loadingVisible = true;

        orderService.getOrders($scope.mobile).then(function (response) {

            $scope.loadingVisible = false;
            $scope.orders = response;

            /////////////////////

        }, function (err) { $scope.loadingVisible = false; alert(err.message); });
    };


   

    //$scope.bind();
    ///////////////////////////////
    $scope.show_orders = function () {
        if (!$scope.mobile)
            return;
        $scope.bind();


    };
    ///////////////////////////////
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
    ////////////////////////////////
    $scope.mobile = null;
    $scope.num_mobile = {
        width: '100%',
        height: 45,
        placeholder: 'شماره موبایل',
        bindingOptions: {
            value: 'mobile',
        }
    };
   
    ////////////////////////////////////
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
}]);