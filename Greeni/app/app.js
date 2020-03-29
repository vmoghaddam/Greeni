 
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

    $routeProvider.when("/orders", {
        controller: "ordersController",
        templateUrl: "/app/views/orders.html?v=" + version
    });

    $routeProvider.when("/about", {
        controller: "aboutController",
        templateUrl: "/app/views/about.html?v=" + version
    });
    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html?v=" + version
    })

    $routeProvider.when("/signup2", {
        controller: "signup2Controller",
        templateUrl: "/app/views/signup.html?v=" + version
    })

    $routeProvider.when("/signin", {
        controller: "signinController",
        templateUrl: "/app/views/signin.html?v=" + version
    })


    
    $routeProvider.otherwise({ redirectTo: "/greeni1" });

});   

 
 
 
var serviceBase = 'http://localhost:58909/';
//var serviceBase = 'http://api.greeni.epatrin.ir/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});
app.config(['$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push('authInterceptorService');
    }]);
app.run(['$rootScope', '$location', '$window', 'authService', function ($rootScope, $location, $window, authService) {
    $window.ga('create', 'UA-159921170-1', 'auto');
    $rootScope.$on('$routeChangeSuccess', function () {
        $window.ga('send', 'pageview', { page: $location.url() });
        $window.ga('config', 'GA_MEASUREMENT_ID', {
            'page_title': 'homepage',
            'page_path': '/home'
        });


    });

    ///// New
    $rootScope.isSignedIn = true;
    $rootScope.userId = null;
    $rootScope.userTitle = 'سپهر شهرآیینی';
    //////////////////////////
    $rootScope.serviceUrl = serviceBase;
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
    $rootScope.navigate2 = function (target, key, module) {
 
        $location.path(target);


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
    $rootScope.emptyBasket = function () {
        var greeni = $rootScope.getGreeni();
        greeni.basket.items = [];
        localStorage.setItem("epa_greeni", JSON.stringify(greeni));
    };

    $rootScope.setOrderNo = function (no) {
        var greeni = $rootScope.getGreeni();
        greeni.basket.orderNo = no;


        localStorage.setItem("epa_greeni", JSON.stringify(greeni));
    };
    $rootScope.getOrderNo = function () {
        var greeni = $rootScope.getGreeni();
        return greeni.basket.orderNo;

    };

    $rootScope.getOrderDto = function (name, mobile) {
        var greeni = $rootScope.getGreeni();
        var basket = greeni.basket;
        var dto = {};
        dto.Id = -1;//basket.orderNo ? basket.orderNo : -1;
        dto.Mobile = mobile;
        dto.Name = name;
        dto.StatusId = -1;
     

        dto.OrderItems= [];
        var basket_items = greeni.basket.items;
        $.each(basket_items, function (_i, _d) {
            var product = Enumerable.From($rootScope.products).Where('$.id==' + _d.productId).FirstOrDefault();
            var item = {
                ProductId: product.id,
                DiscountUnit: product.discount,
                 OrderId:-1,
                StatusId:-1,
                Quantity: _d.total,
                PriceUnit: product.price,
                Id:-1,
            };
         

            dto.OrderItems.push(item);
        });
        return dto;
    };

    

    
    //////////////////////////////////////////////////////
}]);
 
 
 