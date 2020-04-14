'use strict';
app.controller('basketController', ['$scope', '$rootScope', '$location', '$route', 'orderService', function ($scope, $rootScope, $location, $route, orderService) {
   // $rootScope.setOrderNo(null);
    $scope.orderNo = null;//$rootScope.getOrderNo();
    $scope.basketCount = $rootScope.getBasketTotalCount();
    if ($scope.basketCount > 0)
        $('.info').fadeIn();
    else
        $('.empty').fadeIn();
        //else
        //$('.confirmed').fadeIn();

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
                total_price: _d.total * (product.price - product.price * product.discount*1.0/100)
            };
            $scope.invoice_price += item.total_price;
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
    $rootScope.signIn = function () { $location.path('/signin/basket'); };


    $scope.confirm_order = function () {
        //$scope.loadingVisible = true;
        var dto = $rootScope.getOrderDto($scope.name, $scope.mobile);
        dto.SMS = 1;
        dto.AuthId = $rootScope.authId;
        dto.Role = $rootScope.role;
         

        $scope.loadingVisible = true;

        orderService.save(dto).then(function (response) {
            
            $scope.loadingVisible = false;
            $scope.orderNo = response.Id;

           // $rootScope.setOrderNo($scope.orderNo);
            $rootScope.emptyBasket();
            $scope.updateBasketCount();
           
            window.location.href = serviceBase + '/SalePayment.aspx?id=' + $scope.orderNo;
          //  $('.info').fadeOut(400, function () {
          //      $('.confirmed').fadeIn();
          //  });

            /////////////////////

        }, function (err) { $scope.loadingVisible = false; alert(err.message ); });


      
     
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
            readOnly: 'ro',
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
            readOnly:'ro',
        }
    };


    $rootScope.SignedBtn = true;
    $scope.ro = false;
    if ($rootScope.isSignedIn) {
        $scope.name = $rootScope.userTitle;
        $scope.mobile = $rootScope.userName;
        $scope.ro = true;
        $rootScope.isSignedIn = true;
        $rootScope.SignedBtn = false;
    }


    
    ////////////////////////////////////
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
}]);