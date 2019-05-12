 
var app = angular.module('AngularJSApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'dx', 'ngSanitize', 'ngAnimate' ]).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);
 
 
app.config(function ($routeProvider) {
    var version = 0.9;
    
    $routeProvider.when("/greeni1", {
        controller: "greeni1Controller",
        templateUrl: "/app/views/greeni1.html?v="+version
    });
    $routeProvider.when("/greeni2", {
        controller: "greeni2Controller",
        templateUrl: "/app/views/greeni2.html?v=" + version
    });

    $routeProvider.when("/basket", {
        controller: "basketController",
        templateUrl: "/app/views/basket.html?v=" + version
    });

    
    $routeProvider.otherwise({ redirectTo: "/greeni1" });

});   

 
 
 
 
 
app.run([  '$rootScope', '$location' , function ( $rootScope, $location ) {
   
    $rootScope.$on('$viewContentLoaded', function () {
        
        
    });
    
    DevExpress.ui.themes.current('material.gray-light');

    $rootScope.products = [
        {id:1,name:'گرینی مکس 1',price:1000,discount:10},
        { id: 2, name: 'گرینی مکس 2', price: 2000, discount: 15 },
    ];

    $rootScope.getWindowSize = function () {

        var w = $(window).width();
        var h = $(window).height();


        return { width: w, height: h };
    };
    $rootScope.popupHeightFull = function (a, fullscreen) {
        if (!fullscreen)
            return $jq(window).height() * a;
        else
            return $jq(window).height();
    };
    $rootScope.popupHeight = function (h, mobileFull) {
        if (mobileFull) {
            return h;
        }

        return h;
    };
    $rootScope.popupWidth = function (w, fullscreen) {
        if (!fullscreen)
            return w;
        else
            return w;//$jq(window).width();
    };

    $rootScope.getGreeni = function () {
        var epa_greeni = localStorage.getItem("epa_greeni");
        if (!epa_greeni) {
            epa_greeni = {
                basket: {
                    items: [],
                }
            };
            localStorage.setItem("epa_greeni", JSON.stringify(epa_greeni));
        }
        else
            epa_greeni = JSON.parse(epa_greeni);

        return epa_greeni;
    };
    $rootScope.getBasketTotalCount = function () {
        var greeni = $rootScope.getGreeni();
        var basket_items = greeni.basket.items;
        var sum = 0;
        $.each(basket_items, function (_i, _d) {
            sum += _d.total;
        });
        return sum;
    };
    $rootScope.getBasketItems = function () {
        var greeni = $rootScope.getGreeni();
        var basket_items = greeni.basket.items;
        return basket_items;
    };
    $rootScope.addToBasket = function (_productId, _total) {
        var greeni = $rootScope.getGreeni();
        var basket_items = greeni.basket.items;
        var current = Enumerable.From(basket_items).Where('$.productId==' + _productId + ' && $.status==-1').FirstOrDefault();
        if (current) {
            current.total += _total;
            console.log(current.total);
        }
        else {
            basket_items.push({ productId: _productId, total: _total,status:-1 });
        }
        console.log(greeni);
        localStorage.setItem("epa_greeni", JSON.stringify(greeni));
    };


    $rootScope.removeFromBasket = function (_productId) {
        var greeni = $rootScope.getGreeni();
        greeni.basket.items = Enumerable.From(greeni.basket.items).Where('$.productId!=' + _productId).ToArray(); 
        
       
        localStorage.setItem("epa_greeni", JSON.stringify(greeni));
    };

    

    
    //////////////////////////////////////////////////////
}]);
 
 
 