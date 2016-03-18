app.controller('dmtilescntrl', ['$scope', '$http', '$rootScope', '$location', function ($scope, $http, $rootScope, $location) {

    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        //slideWidth: 100,
        slideWidth: 1000,
        //adaptiveHeight: true,
        ticker: true,
        speed: 42000
    });

    var deliverymanagersParameters = getUrlParameter("selectedvalues", $location.absUrl())
    //var selectedvalues = $location.search();

    $scope.dmlist = deliverymanagersParameters;

    var accountsParameters = getUrlParameter("listofaccounts", $location.absUrl());
    //var selectedvalues = $location.search();

    $scope.accountslist = accountsParameters;

    $scope.gotochmparameters = function () {
        window.location.href = "CHMParameters.html";
    }

    $scope.consolidated = function () {
        window.location.href = "Consolidateddata.html";
    }

    $scope.customerSatification = function () {
        window.location.href = "customersatisfaction.html";
    }

    $scope.openRevenue = function () {
        window.location.href = "revenue.html?listofdeliverynames=" + deliverymanagersParameters;
    }


    $scope.cod = function () {
        //debugger;
        window.location.href = "costofdelivery.html?listofdeliverynames=" + deliverymanagersParameters;
    }

    $scope.openPositions = function () {
        //debugger;
        window.location.href = "openpositions.html";
    }

    $scope.backtoPage = function () {
        window.location.href = "ManagersTiles.html";
    }

}]);