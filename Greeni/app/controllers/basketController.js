'use strict';
app.controller('basketController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    

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
    ////////////////////////////////////
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
}]);