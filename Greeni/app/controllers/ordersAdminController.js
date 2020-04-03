'use strict';
app.controller('ordersAdminController', ['$scope', '$routeParams', '$location', 'authService', 'ngAuthSettings', '$rootScope', 'orderService', function ($scope, $routeParams, $location, authService, ngAuthSettings, $rootScope, orderService) {

    //////////////////////////////////////////
    $scope.dg_orders_columns = [

                  {
                      cellTemplate: function (container, options) {
                          $("<div style='text-align:center'/>")
                              .html(options.rowIndex + 1)
                              .appendTo(container);
                      }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'right', allowResizing: false, cssClass: 'rowHeader'
                  },

 //DateStr
  { dataField: 'DateStr', caption: 'تاریخ', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, fixed: true, fixedPosition: 'right', width: 200,   },
        { dataField: 'Name', caption: 'نام', allowResizing: true, alignment: 'right', dataType: 'string', allowEditing: false, fixed: true, fixedPosition: 'right', width: 200,   },

       
         
        { dataField: 'Mobile', caption: 'موبایل', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 130 },
         { dataField: 'TrackingNo', caption: 'کد رهگیری', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 150 },
          { dataField: 'Status', caption: 'وضعیت', allowResizing: true, dataType: 'string', allowEditing: false, alignment: 'center', width: 150 ,fixed: true, fixedPosition: 'left'},
          {
              dataField: 'TotalAmount', caption: 'مبلغ کل', allowResizing: true, dataType: 'number', allowEditing: false, alignment: 'center',
              customizeText: function (e) {

                  return e.value?(e.value).toFixed(0):0;
              },
              fixed: true, fixedPosition: 'left'
          },







    ];

    $scope.dg_orders_selected = null;
    $scope.dg_orders_instance = null;
    $scope.dg_orders_ds = null;
    $scope.dg_orders = {
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

        columns: $scope.dg_orders_columns,
        onContentReady: function (e) {
            if (!$scope.dg_orders_instance)
                $scope.dg_orders_instance = e.component;

        },
        onSelectionChanged: function (e) {
            var data = e.selectedRowsData[0];

            if (!data) {
                $scope.dg_items_ds = null;
                $scope.dg_orders_selected = null;
                
            }
            else {
                $scope.dg_orders_selected = data;
               
                $scope.getItems($scope.dg_orders_selected.Id );
            }

            //nono

        },

        "export": {
            enabled: false,
            fileName: "CREW_TOTAL_TIMES",
            allowExportSelectedData: false
        },
        summary: {
            totalItems: [{
                column: "TotalAmount",
                showInColumn: "TotalAmount",

                customizeText: function (e) {

                    return (e.value).toFixed(0).toString();
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
    $scope.dg_items_columns = [

                 {
                     cellTemplate: function (container, options) {
                         $("<div style='text-align:center'/>")
                             .html(options.rowIndex + 1)
                             .appendTo(container);
                     }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'right', allowResizing: false, cssClass: 'rowHeader'
                 },


       { dataField: 'Product', caption: 'محصول', allowResizing: true, alignment: 'right', dataType: 'string', allowEditing: false, fixed: false, fixedPosition: 'left',width:150 },
       { dataField: 'Quantity', caption: 'تعداد', allowResizing: true, dataType: 'number', allowEditing: false, alignment: 'center', width: 100 },
       { dataField: 'PriceUnit', caption: 'قیمت', allowResizing: true, dataType: 'number', allowEditing: false, alignment: 'center', width: 100 },
        { dataField: 'DiscountUnit', caption: 'تخفیف', allowResizing: true, dataType: 'number', allowEditing: false, alignment: 'center', width: 100 },
       { dataField: 'FinalPriceUnit', caption: 'مبلغ کل', allowResizing: true, dataType: 'center', allowEditing: false, alignment: 'center', name: 'Amount' },
       







    ];

    $scope.dg_items_selected = null;
    $scope.dg_items_instance = null;
    $scope.dg_items_ds = null;
    $scope.dg_items = {
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

        columns: $scope.dg_items_columns,
        onContentReady: function (e) {
            if (!$scope.dg_items_instance)
                $scope.dg_items_instance = e.component;

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

                    return (e.value).toFixed(0).toString();
                },
                summaryType: "sum"
            },
            {
                column: "Quantity",
                showInColumn: "Quantity",

                customizeText: function (e) {

                    return (e.value).toFixed(0).toString();
                },
                summaryType: "sum"
            },
             

            ]
        },
        bindingOptions: {
            dataSource: 'dg_items_ds'
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
    $scope.getItems = function (Id) {
        $scope.loadingVisible = true;
        orderService.getOrderItems(Id).then(function (result) {
            $scope.loadingVisible = false;

            $scope.dg_items_ds = result;


        }, function (err) { $scope.loadingVisible = false; General.ShowNotify(err.message, 'error'); });
    };
    $scope.bind = function () {

        var url = 'api/orders?$orderby=Id desc';
        if (!$scope.dg_orders_ds) {
            $scope.dg_orders_ds = {
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