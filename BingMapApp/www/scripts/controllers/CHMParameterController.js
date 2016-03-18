
app.controller('CHMParameterCntrl', function ($scope, $http, $location, Serviceurl) {
    window.localStorage.setItem("chmparameter", "");

    $scope.managers = ["Gross", "Onsite", "Offshore"];

    $scope.selection = [];
    $scope.toggleSelection = function (dmname) {
        var idx = $scope.selection.indexOf(dmname);

        // is currently selected
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.selection.push(dmname);
        }
    }

    $scope.gotoCHMCharts = function () {
        window.location.href = "CHMcharts.html?parameter=" + $scope.selection;

        window.localStorage.setItem("chmparameter", $scope.selection);
    }

    $scope.backtoPage = function () {
        window.location.href = "DMTilesDisplay.html";
    }
})