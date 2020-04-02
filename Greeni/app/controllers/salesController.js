'use strict';
app.controller('salesController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

    $scope.dataGridBullet = {
        
    };


    $scope.dataGridOptions = {
        dataSource: {
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
                beforeSend: function (request) {
                    request.params.startDate = "2018-05-10";
                    request.params.endDate = "2018-05-15";
                }
            }
        },
        paging: {
            pageSize: 10
        },
       
        remoteOperations: false,
        allowColumnReordering: true,
        rowAlternationEnabled: true,
        showBorders: true,
        rtlEnabled: true,
        columns: [
            {
                dataField: "فروشگاه",
                dataType: "string"
            },
            {
                dataField: "تلفن",
                dataType: "string"
            },
            {
                dataField: "آدرس",
                dataType: "string",
            },
            {
                dataField: "وب سایت",
                dataType: "string",
            },

        ],
    };

    ////////////////////////////////////

}]);