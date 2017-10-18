var portfolioFilePath = "../json/portfolio.txt";

// Portfolio class object to contain data read from portfolio JSON file 
var Portfolio = class {
    constructor(c=0) {
        this.count = c;
        this.projects = [];
        this.projectFilePath = portfolioFilePath;
    }
};
var portfolio = new Portfolio();



// Self explanitory
function loadPortfolioDataFromJSON() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var portObj = JSON.parse(this.responseText);

            for (var i = 0; i < portObj.portfolioJSON.length; i++) {
                portfolio.projects.push(portObj.portfolioJSON[i]);
                portfolio.count++;
            }
           
            console.log(portfolio);
        }
    };
    xmlhttp.open("GET", portfolio.projectFilePath, true);
    xmlhttp.send();
}


// 
loadPortfolioDataFromJSON();


// AngularJS Application definition
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.appProjects = portfolio.projects;
});

// Document Ready()
$(document).ready(function () {
    InitToolTip();
});



function InitToolTip() {
    $('[data-toggle="tooltip"]').tooltip();
}
