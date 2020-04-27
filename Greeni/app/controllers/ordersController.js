'use strict';
app.controller('ordersController', ['$scope', '$rootScope', '$location', '$route', 'orderService', function ($scope, $rootScope, $location, $route, orderService) {
    // $rootScope.setOrderNo(null);
    $scope.hasOrders = true;

   

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
    $scope.bindUser = function () {

        $scope.loadingVisible = true;

        orderService.getOrdersByUser($rootScope.authId).then(function (response) {

            $scope.loadingVisible = false;
            $scope.orders = response;
            $scope.hasOrders = response.length > 0;
            /////////////////////

        }, function (err) { $scope.loadingVisible = false; alert(err.message); });
    };

    $scope.getStatus = function (item) {
        console.log(item);
        return item.Order.Status;
    }
    $scope.goInvoice = function (id) {
        $location.path('/invoice/'+id);
    }
   

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

    if ($rootScope.isSignedIn)
        $scope.bindUser();

}]);