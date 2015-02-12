angular.module("myApp", [])

    .controller("mainCtrl", function ($scope) {
        $scope.isFormSubmitted = false;
        jQuery("form").on('submit', function () {
            $scope.user = {
                userEmail: document.userForm.uEmail.value,
                userName: document.userForm.uName.value,
                userMobile: document.userForm.uMobile.value
            };
            $scope.isFormSubmitted = true;
            document.userForm.uEmail.value = '';
            document.userForm.uName.value = '';
            document.userForm.uMobile.value = '';
            $scope.userForm.$pristine = true;
            $scope.$apply();
        });
    });
