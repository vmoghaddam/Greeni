(function () {
    'use strict';

    angular
        .module('app')
        .controller('AboutUscontroller', AboutUscontroller);

    AboutUscontroller.$inject = ['$location'];

    function AboutUscontroller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'AboutUscontroller';

        activate();

        function activate() { }
    }
})();
