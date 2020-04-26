Exceptions = {};
Exceptions.getMessage = function (error) {
    return {
        message: error.data
        //error.status + ' ' + error.statusText + ' ' + error.data 
    };
};
General = {};
General.ShowNotify = function (str, t) {
    //'info' | 'warning' | 'error' | 'success' | 'custom'
    DevExpress.ui.notify({
        message: str,
        position: {
            my: "center top",
            at: "center top"
        },
        type: t,
        displayTime: 2000,
    });
};
General.Confirm = function (str, callback) {
    var myDialog = DevExpress.ui.dialog.custom({
        rtlEnabled: true,
        title: "Confirm",
        message: str,
        buttons: [{ text: "No", onClick: function () { callback(false); } }, { text: "Yes", onClick: function () { callback(true); } }]
    });
    myDialog.show();

};

General.Modal = function (str, callback) {
    var myDialog = DevExpress.ui.dialog.custom({
        rtlEnabled: true,
        title: "پیغام",
        message: str,
        buttons: [{ text: "برگشت", onClick: function () { callback(); } }]
    });
    myDialog.show();

};




var app = angular.module('AngularJSApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'dx', 'ngSanitize', 'ngAnimate']).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);


app.config(function ($routeProvider) {
    var version = 0.9;

    $routeProvider.when("/greeni1", {
        controller: "greeni1Controller",
        templateUrl: "/app/views/greeni1.html?v=" + version
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

    $routeProvider.when("/signup/user", {
        controller: "signup2Controller",
        templateUrl: "/app/views/signup2.html?v=" + version
    });
    $routeProvider.when("/signup/user/:refer", {
        controller: "signup2Controller",
        templateUrl: "/app/views/signup2.html?v=" + version
    })

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html?v=" + version
    })
    $routeProvider.when("/signup/:refer", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html?v=" + version
    })

    
    $routeProvider.when("/signin", {
        controller: "signinController",
        templateUrl: "/app/views/signin.html?v=" + version
    });

    $routeProvider.when("/signin/:refer", {
        controller: "signinController",
        templateUrl: "/app/views/signin.html?v=" + version
    });


    $routeProvider.when("/profile/company/:id", {
        controller: "profileController",
        templateUrl: "/app/views/profile.html?v=" + version
    });


    $routeProvider.when("/sales", {
        controller: "salesController",
        templateUrl: "/app/views/sales.html?v=" + version
    });

    $routeProvider.when("/admin/stores", {
        controller: "storesController",
        templateUrl: "/app/views/stores.html?v=" + version
    });

    $routeProvider.when("/admin/orders", {
        controller: "ordersAdminController",
        templateUrl: "/app/views/oerdersAdmin.html?v=" + version
    });



    $routeProvider.when("/paymentResult", {
        controller: "paymentResultController",
        templateUrl: "/app/views/paymentResult.html?v=" + version
    });



    $routeProvider.when("/paymentResult2/:id", {
        controller: "paymentResult2Controller",
        templateUrl: "/app/views/paymentResult2.html?v=" + version
    });

    $routeProvider.when("/invoice/:id", {
        controller: "paymentResult2Controller",
        templateUrl: "/app/views/paymentResult2.html?v=" + version
    });



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
    ////4-21
    


    ///// New
    $rootScope.isSignedIn = false;
    $rootScope.userId = null;
    $rootScope.userName = null;
    $rootScope.userTitle = null;
    authService.fillAuthData();
    $rootScope.logOut = function () { authService.logOut(); };
    $rootScope.signIn = function () { $location.path('/signin'); };

    $rootScope.click_contact = function () {

        $rootScope.popup_signin_visible = true;
    };
    $rootScope.isContentVisible = false;
    $rootScope.popup_signin_visible = false;
    $rootScope.popup_signin_title = 'contact info';
    $rootScope.popup_signin = {

        shading: true,
        //position: { my: 'left', at: 'left', of: window, offset: '5 0' },
        width: 500,
        height: 500,
        //fullscreen: false,
        showtitle: false,
        dragenabled: true,
        toolbaritems: [

            { widget: 'dxbutton', location: 'after', options: { type: 'normal', text: 'close', icon: 'remove', onclick: function (e) { $rootScope.popup_signin_visible = false; } }, toolbar: 'bottom' }
        ],

        visible: false,

        closeonoutsideclick: true,
        ontitlerendered: function (e) {
            // $(e.titleelement).addclass('vahid');
            // $(e.titleelement).css('background-color', '#f2552c');
        },
        onshowing: function (e) {

        },
        onshown: function (e) {

        },
        onhiding: function (e) {


            $rootScope.popup_signin_visible = false;

        },
        //قبلا
        //bindingoptions: {
        //    visible: 'popup_signin_visible',
        //    fullscreen: 'isfullscreen',
        //    title: 'popup_signin_title',

        //}
        bindingOptions: {
            visible: 'popup_signin_visible',

            title: 'popup_signin_title',

        }
    };


    //////////////////////////
    $rootScope.serviceUrl = serviceBase;
    $rootScope.$on('$viewContentLoaded', function () {


    });

    DevExpress.ui.themes.current('material.gray-light');
    //4-18
    $rootScope.products = [
        { id: 1, name: 'گرینی مکس 1', price: 180000, discount: 0 },
        { id: 2, name: 'گرینی مکس 2', price: 200000, discount: 0 },
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
    //4-18
    $rootScope.getPrice = function (id) {
        if (id == 1)
            return 180000;
        else
            return 200000;
    };
    $rootScope.getDiscount = function (pid, qty) {
        if ($rootScope.role != 'Company')
            return 0;
        var a = 24;
        if (pid == 1) {
            if (qty <= 5 * a)
                return 10;
            if (qty > 5 * a && qty <= 10 * a)
                return 10.8;
            if (qty > 10 * a && qty <= 15 * a)
                return 11.5;
            if (qty > 15 * a && qty <= 20 * a)
                return 12.3;
            if (qty > 20 * a && qty <= 25 * a)
                return 13;
            if (qty > 25 * a && qty <= 30 * a)
                return 13.8;
            if (qty > 30 * a && qty <= 35 * a)
                return 14.5;
            if (qty > 35 * a)
                return 14.5;
        }

        if (pid == 2) {
            if (qty <= 5 * a)
                return 10;
            if (qty > 5 * a && qty <= 10 * a)
                return 10.8;
            if (qty > 10 * a && qty <= 15 * a)
                return 11.6;
            if (qty > 15 * a && qty <= 20 * a)
                return 12.4;
            if (qty > 20 * a && qty <= 25 * a)
                return 13.2;
            if (qty > 25 * a && qty <= 30 * a)
                return 14;
            if (qty > 30 * a && qty <= 35 * a)
                return 14.8;
            if (qty > 35 * a)
                return 14.8;
        }
    };
    $rootScope.getDiscountHint = function (pid, qty) {
        var price = $rootScope.getPrice(pid);
        var dis = $rootScope.getDiscount(pid, qty);
        var value = Math.round(qty * price * dis / 100);
        var hint = "با توجه به تعداد انتخاب شده به شما "
            + dis + " درصد" + " تخفیف معادل " + new Intl.NumberFormat().format(value.toFixed(0)) + " ریال، تعلق می گیرد";
        return hint;
    }
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
            basket_items.push({ productId: _productId, total: _total, status: -1 });
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


        dto.OrderItems = [];
        var basket_items = greeni.basket.items;
        $.each(basket_items, function (_i, _d) {
            var product = Enumerable.From($rootScope.products).Where('$.id==' + _d.productId).FirstOrDefault();
            var item = {
                ProductId: product.id,
                DiscountUnit: product.discount,
                OrderId: -1,
                StatusId: -1,
                Quantity: _d.total,
                PriceUnit: product.price,
                Id: -1,

            };
             

            dto.OrderItems.push(item);
        });
        return dto;
    };



    $rootScope.isContentVisible = true;
    //////////////////////////////////////////////////////
}]);


