app.controller('listofDMCntrl', ['$scope', '$http', '$rootScope', 'Serviceurl', function ($scope, $http, $rootScope, Serviceurl) {
    //code 
    // $scope.managers = managersData;
    //debugger;
    window.localStorage.setItem("reqchmDM", "");

    var uid = window.localStorage.getItem("uid");
    document.getElementById("Loading").style.display = "block";
    $http.get(Serviceurl + "/getdeliverymanagers/" + uid)
    .success(function (response) {
        $scope.managers = response[0].deliverymanagerlist;
        document.getElementById("Loading").style.display = "none";
    })
    .error(function (data, status) {
        document.getElementById("Loading").style.display = "none";
    });

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

    $rootScope.dmlistnames = function () {
        if ($scope.selection.length >= 4) {
            $scope.error = "You cannot select more than 4 Delivery Managers";
        } else {
            //  $rootScope.$broadcast("Update", $scope.selection);
            // $rootScope.selectedvalues = $scope.selection;
            window.location.href = "DMTilesDisplay.html?selectedvalues=" + $scope.selection;
            window.localStorage.setItem("SelectedDMList", $scope.selection);
            window.localStorage.setItem("reqchmDM", $scope.selection[0]);
        }
    }

    $scope.backtoPage = function () {
        window.location.href = "ManagersTiles.html";
    }
}]);