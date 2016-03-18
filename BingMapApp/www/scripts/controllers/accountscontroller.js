
app.controller('accountscntrl', function ($scope, $http, Serviceurl) {
            //debugger
            var uid = window.localStorage.getItem("uid");
    $http.get(Serviceurl + "/getaccounts/" + uid)
    .success(function (response) {

        $scope.managers = response[0].accountslist;
    })
    .error();

    $scope.accountslistnames = function () {
        window.location.href = "DMTilesDisplay.html?listofaccounts=" + $scope.selection;

    }

    $scope.backtoPage = function () {
        window.location.href = "ManagersTiles.html";

    }

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
});