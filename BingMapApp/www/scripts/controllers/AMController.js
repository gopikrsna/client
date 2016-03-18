app.controller('AMCntrl', function ($scope, $http, Serviceurl) {
    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        //slideWidth: 100,
        //adaptiveHeight: true,
        slideWidth: 1000,
        ticker: true,
        speed: 42000
    });
    $scope.backtoPage = function () {
        window.location.href = "ManagersTiles.html";
    }
});