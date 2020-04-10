'use strict';
app.controller('salesController', ['$scope', '$rootScope', '$location' , "authService" , function ($scope, $rootScope, $location , authService) {

    $scope.dg_stores_columns = [

        {
            cellTemplate: function (container, options) {
                $("<div style='text-align:center'/>")
                    .html(options.rowIndex + 1)
                    .appendTo(container);
            }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'right', allowResizing: false, cssClass: 'rowHeader'
        },


        { dataField: 'Name', caption: 'عنوان', allowResizing: true, alignment: 'right', dataType: 'string', allowEditing: false, fixed: true, fixedPosition: 'right', width: 220, sortIndex: 0, sortOrder: 'asc' },
        { dataField: 'WebSite', caption: 'وب سایت', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'right', width: 400 },
        { dataField: 'Phone', caption: 'تلفن', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 200 },
        { dataField: 'Address', caption: 'آدرس', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'right', width: 430 },
    ];



    $scope.dg_stores_selected = null;
    $scope.dg_stores_instance = null;
    $scope.dg_stores_ds = null;
    $scope.dg_stores = {
        rtlEnabled: true,
        searchPanel: {
            visible: false,
            width: 240,
            placeholder: ""
        },
        headerFilter: {
            visible: false
        },
        filterRow: {
            visible: true,
            showOperationChooser: true,
        },
        showRowLines: true,
        showColumnLines: true,
        sorting: { mode: 'none' },

        noDataText: '',

        allowColumnReordering: true,
        allowColumnResizing: true,
        scrolling: { mode: 'infinite' },
        paging: { pageSize: 100 },
        showBorders: true,
        selection: { mode: 'single' },

        columnAutoWidth: false,
        height: $(window).height() - 170,

        columns: $scope.dg_stores_columns,
        onContentReady: function (e) {
            if (!$scope.dg_stores_instance)
                $scope.dg_stores_instance = e.component;

        },
        onSelectionChanged: function (e) {
            var data = e.selectedRowsData[0];

            //if (!data) {
            //    $scope.dg_flight_ds = null;
            //    $scope.dg_flight_total_selected = null;
            //    $scope.dg_flight_instance.columnOption('crew', 'caption', 'Crew');
            //}
            //else {
            //    $scope.dg_flight_total_selected = data;
            //    var caption = data.Name + ' (From ' + moment($scope.dt_from).format('YYYY-MM-DD') + ' to ' + moment($scope.dt_to).format('YYYY-MM-DD') + ' )';
            //    $scope.dg_flight_instance.columnOption('crew', 'caption', caption);
            //    $scope.getCrewFlights($scope.dg_flight_total_selected.CrewId, $scope.dt_from, $scope.dt_to);
            //}

            //nono

        },

        "export": {
            enabled: false,
            fileName: "CREW_TOTAL_TIMES",
            allowExportSelectedData: false
        },

        bindingOptions: {
            dataSource: 'dg_stores_ds'
        }
    };



    $scope.bind = function () {

        var url = 'api/companies';
        if (!$scope.dg_stores_ds) {
            $scope.dg_stores_ds = {
                store: {
                    type: "odata",
                    url: $rootScope.serviceUrl + url,

                    version: 4,
                    onLoaded: function (e) {

                    },
                    beforeSend: function (e) {


                    },
                },


            };
        }



    };
    //////////////////////////////////////////////
    $scope.bind();
    ////////////////////////////////////////////////
}]);