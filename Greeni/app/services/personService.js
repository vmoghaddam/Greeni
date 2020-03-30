'use strict';
app.factory('personService', ['$http', '$q', 'ngAuthSettings', '$rootScope', function ($http, $q, ngAuthSettings, $rootScope) {



    var serviceFactory = {};

     

    var _getCompany = function (id) {


        var deferred = $q.defer();
        $http.get(serviceBase + 'api/company/' +  id).then(function (response) {
            deferred.resolve(response.data);
        }, function (err, status) {

            deferred.reject(Exceptions.getMessage(err));
        });

        return deferred.promise;
    };

    

    serviceFactory.getCompany = _getCompany;

    return serviceFactory;

}]);