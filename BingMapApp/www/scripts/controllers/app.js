

var app = angular.module("myapp", []);

app.constant('Serviceurl', 'http://localhost:1515/api');

function getCurrentMonthAndYear()
{
    //debugger;
    var d = new Date();
    var year=d.getFullYear();
    var month = d.getMonth() + 1;
    if (month < 10)
    {
        month = "0" + month;
    }
    return year+"-"+month;
}

function getUrlParameter(param, dummyPath) {
    //debugger;
    var sPageURL = dummyPath || window.location.search.substring(1),
        sURLVariables = sPageURL.split(/[&||?]/),
        res;

    for (var i = 0; i < sURLVariables.length; i += 1) {
        var paramName = sURLVariables[i],
            sParameterName = (paramName || '').split('=');

        if (sParameterName[0] === param) {
            res = sParameterName[1];
        }
    }

    return res;
}

function getMonth(graphdate) {
    var months = {
        en: {
            "jan": 0,
            "feb": 1,
            "mar": 2,
            "apr": 3,
            "may": 4,
            "jun": 5,
            "jul": 6,
            "aug": 7,
            "sep": 8,
            "oct": 9,
            "nov": 10,
            "dec": 11
        }
    };

    var dt = new Date(
        parseInt(graphdate.substring(7), 12),               // year
        months.en[graphdate.substring(3, 6).toLowerCase()], // month
        parseInt(graphdate.substring(0, 2), 12)             // day
    );
    return dt.getMonth() + 1;
}
