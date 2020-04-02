'use strict';
app.controller('storesController', ['$scope', '$routeParams', '$location', 'authService', 'ngAuthSettings', '$rootScope', function ($scope, $routeParams, $location, authService, ngAuthSettings, $rootScope) {

    //////////////////////////////////////////
    $scope.dg_stores_columns = [

                  {
                      cellTemplate: function (container, options) {
                          $("<div style='text-align:center'/>")
                              .html(options.rowIndex + 1)
                              .appendTo(container);
                      }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'right', allowResizing: false, cssClass: 'rowHeader'
                  },


        { dataField: 'Name', caption: 'عنوان', allowResizing: true, alignment: 'right', dataType: 'string', allowEditing: false, fixed: true, fixedPosition: 'right', width: 200, sortIndex: 0, sortOrder: 'asc' },

        { dataField: 'FullName', caption: 'مدیریت', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'right', width: 200 },
        { dataField: 'Phone', caption: 'تلفن', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 130 },
        { dataField: 'Mobile', caption: 'موبایل', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 130 },
        { dataField: 'Email', caption: 'ایمیل', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 200 },
         { dataField: 'NID', caption: 'کد ملی', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 150 },
          { dataField: 'ZIPCode', caption: 'کد پستی', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 150 },
        { dataField: 'Address', caption: 'آدرس', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'right', width: 400 },







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
    /////////////////////////////////////////
    $scope.dg_orders_columns = [

                 {
                     cellTemplate: function (container, options) {
                         $("<div style='text-align:center'/>")
                             .html(options.rowIndex + 1)
                             .appendTo(container);
                     }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'right', allowResizing: false, cssClass: 'rowHeader'
                 },


       { dataField: 'Name', caption: 'تاریخ', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, fixed: false, fixedPosition: 'left' },

       { dataField: 'Legs', caption: 'شماره', allowResizing: true, dataType: 'center', allowEditing: false, alignment: 'right', },
       { dataField: 'Amount', caption: 'مبلغ کل', allowResizing: true, dataType: 'center', allowEditing: false, alignment: 'right', name: 'Amount' },
       { dataField: 'LayOver', caption: 'توضیحات', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'right', },







    ];

    $scope.dg_orders_selected = null;
    $scope.dg_orders_instance = null;
    $scope.dg_orders_ds = null;
    $scope.dg_orders = {
        rtlEnabled: true,
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

        columns: $scope.dg_orders_columns,
        onContentReady: function (e) {
            if (!$scope.dg_orders_instance)
                $scope.dg_orders_instance = e.component;

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
        summary: {
            totalItems: [{
                column: "Amount",
                showInColumn: "Amount",

                customizeText: function (e) {

                    return (e.value).toFixed(1).toString();
                },
                summaryType: "sum"
            },
            ]
        },
        bindingOptions: {
            dataSource: 'dg_orders_ds'
        }
    };
    /////////////////////////////////////////
    $scope.loadingVisible = false;
    $scope.loadPanel = {
        message: 'لطفا صبر کنید',
        rtlEnabled: true,
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

    ////////////////////////////////////////////
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
    //$scope.$on('$viewContentLoaded', function () {
    //    $scope.bind();
    //    setTimeout(function () {
    //        $scope.$apply(function () {
    //           // $scope.dg_stores_instance.refresh();
    //        });

    //    }, 1000);
    //});
    ////////////////////////////////////////////////
}]);