'use strict';
app.controller('paymentResult2Controller', ['$scope', '$rootScope', '$location', '$routeParams', 'orderService', function ($scope, $rootScope, $location, $routeParams, orderService) {
    $scope.Id = $routeParams.id;
   
    //$scope.no = '44567';
  //  $scope.date = "1399/01/22";

    $scope.order = null;
    $scope.items = null;
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
    var number = 123456.789;

    // request a currency format
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
    ////////////////////////////////
    $scope.bind = function () {
        $scope.loadingVisible = true;

        orderService.getOrderById($scope.Id).then(function (response) {

            $scope.loadingVisible = false;
            console.log(response);
            $scope.order = response.order;
            $scope.order.invoiceDate = new persianDate(new Date($scope.order.DateG)).format("YYYY/MM/DD");
            $scope.order.payDate = new persianDate(new Date($scope.order.PayConfirmDate)).format("YYYY/MM/DD");
            $scope.order.TotalAmount2 = new Intl.NumberFormat().format($scope.order.TotalAmount.toFixed(0));
            $scope.order.TotalAmountInit2 = new Intl.NumberFormat().format($scope.order.TotalAmountInit.toFixed(0));
            $scope.order.TotalDiscount2 = new Intl.NumberFormat().format($scope.order.TotalDiscount.toFixed(0));
            if (!$scope.order.Transport)
                $scope.order.Transport = 0;

            $scope.order.Transport2 = new Intl.NumberFormat().format($scope.order.Transport.toFixed(0));

            $scope.order.Final = $scope.order.Transport + $scope.order.TotalAmount;
            $scope.order.Final2 = new Intl.NumberFormat().format($scope.order.Final.toFixed(0));
           // alert($scope.order.invoiceDate);
            $scope.items = response.orderItems;
            $.each($scope.items, function (_i, _d) {
                _d.PriceUnit2 = _d.PriceUnit.toFixed(0);
                _d.DiscountUnit2 = _d.DiscountUnit.toFixed(0);
                //'ar-EG'
                _d.PriceUnit2 = new Intl.NumberFormat().format(_d.PriceUnit2);
                _d.Price2 = new Intl.NumberFormat().format(_d.Price);
                _d.Quantity2 = new Intl.NumberFormat().format(_d.Quantity);

                _d.FinalPriceUnit2 = new Intl.NumberFormat().format(_d.FinalPriceUnit.toFixed(0));
            })
            /////////////////////

        }, function (err) { $scope.loadingVisible = false; alert(err.message); });
    };

    $scope.bind();
    //////////////////////
}]);