app.controller('listofaccountsmanagerCntrl', function ($scope, $http, Serviceurl) {
    //code         
    //$scope.managers = managersData;
    //  $scope.managers = ["Ashok", "Atul Agarwal", "Prabhu", "Sandeep S", "Avinash", "Sandy"];
    $scope.accountmanagerlistnames = function () {
        window.location.href = "Accountmanagertiles.html";
    }

    var uid = window.localStorage.getItem("uid");
    $http.get(Serviceurl + "/getaccountmanagers/" + uid)
    .success(function (response) {
        $scope.managers = response[0].accountmanagerlist;
    })
    .error();

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

    $scope.backtoPage = function () {
        window.location.href = "ManagersTiles.html";
    }
});