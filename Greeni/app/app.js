 
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

    
    $routeProvider.otherwise({ redirectTo: "/greeni1" });

});   

 
 
 
 
 
app.run([  '$rootScope', '$location' , function ( $rootScope, $location ) {
   
    $rootScope.$on('$viewContentLoaded', function () {
        
        
    });
    
    DevExpress.ui.themes.current('material.gray-light');

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

    

    
    //////////////////////////////////////////////////////
}]);
 
 
 