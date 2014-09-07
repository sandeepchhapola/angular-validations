angular.module("myApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'form.html',
                controller: 'homeCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'dashboard.html',
                controller: 'dashboardCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller("homeCtrl", function ($scope, $window, homeService) {
        $("form").on('submit', function () {
            var user = {
                userEmail: document.userForm.uEmail.value,
                userName: document.userForm.uName.value,
                userMobile: document.userForm.uMobile.value
            };
            homeService.setUser(user);
            $window.location.href = "#/dashboard";
        });
    })
    .controller("dashboardCtrl", function ($scope, homeService) {
        $scope.user= homeService.getUser();

    })
    .service("homeService", function () {
        var user = {};
        this.setUser = function (usr) {
            user = usr;
        };
        this.getUser = function () {
            return user;
        };
    });
