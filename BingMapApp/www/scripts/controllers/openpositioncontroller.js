
//open
app.controller('openpositionctrl', function ($scope, $http, Serviceurl) {
    //debugger;
    var uid = window.localStorage.getItem("uid");
    $http.get(Serviceurl + "/getopportunity/" + uid)
   .success(function (response) {
       //debugger;
       $scope.openPositions = response[0].data;
   })
   .error();


    $scope.backtoPage = function () {
        window.location.href = "DMTilesDisplay.html";
    }
});