(function () {
    'use strict';

    angular
        .module('app')
        .controller('AboutUscontroller', AboutUscontroller);
    app.controller('AboutUsController', ['$scope', '$rootScope', '$location', '$route', 'orderService', function ($scope, $rootScope, $location, $route, orderService) {
    AboutUscontroller.$inject = ['$location'];

    function AboutUscontroller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'AboutUscontroller';

        activate();

        function activate() { }
    }
})();
