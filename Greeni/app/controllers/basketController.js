'use strict';
app.controller('basketController', ['$scope', '$rootScope', '$location', '$route', 'orderService', function ($scope, $rootScope, $location, $route, orderService) {
    $rootScope.setOrderNo(null);
    $scope.orderNo = $rootScope.getOrderNo();
    if (!$scope.orderNo)
        $('.info').fadeIn();
        else
        $('.confirmed').fadeIn();

    $scope.basketCount = 0;
    $scope.isBasketNoVisible = $scope.basketCount > 0;
    $scope.updateBasketCount = function () {
        $scope.basketCount = $rootScope.getBasketTotalCount();
        $scope.isBasketNoVisible = $scope.basketCount > 0;
    };
    $scope.updateBasketCount();

    $scope.dataSource = [];
    $scope.invoice_price = 0;
    $scope.bind = function () {
        $scope.invoice_price = 0;
        $scope.dataSource = [];
        var basket_items = $rootScope.getBasketItems();
        $.each(basket_items, function (_i, _d) {
            var product = Enumerable.From($rootScope.products).Where('$.id==' + _d.productId).FirstOrDefault();
            var item = {
                id: product.id,
                name: product.name,
                price: product.price,
                discount: product.discount,
                total: _d.total,
                total_price: _d.total * product.price
            };
            $scope.invoice_price += _d.total * product.price;
            $scope.dataSource.push(item);
        });
    };


    $scope.remove = function (id) {
        $rootScope.removeFromBasket(id);
        $scope.updateBasketCount();
        $scope.bind();
    };

    $scope.bind();
    ///////////////////////////////
    $scope.confirm_order = function () {
        //$scope.loadingVisible = true;
        $scope.orderNo = 33412;
        $rootScope.setOrderNo($scope.orderNo);
        
        $('.info').fadeOut(400, function () {
            $('.confirmed').fadeIn();
        });
     
    };
    ///////////////////////////////
    $scope.loadingVisible = false;
    $scope.loadPanel = {
        message: 'لطفا صبر کنید',
        rtlEnabled:true,
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
    ////////////////////////////////////
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
}]);