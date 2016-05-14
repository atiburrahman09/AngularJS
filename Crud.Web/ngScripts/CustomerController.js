angular.module('userApp', [])
.controller('CustomerController', function ($scope, $http, $location, $window) {
    $scope.customerModel = {};
    $scope.message = '';
    //getallData();

    //******=========Get All Customer=========******
    //function getallData() {



    //    //debugger;
    //    $http({
    //        method: 'GET',
    //        url: '/Home/GetAllData',
    //        params: { index: 10, size: 5 }
    //    })
    //        .success(function (data, status, headers, config) {
    //            console.log(data);
    //            $scope.ListCustomer = data;
    //        })
    //        .error(function (data, status, headers, config) {
    //            $scope.message = 'Unexpected Error while loading data!!';
    //            $scope.result = "color-red";
    //            console.log($scope.message);
    //        });
    //};

    ////******=========Get Single Customer=========******
    //$scope.getCustomer = function (customerModel) {
    //    $http.get('/Home/GetbyID/' + customerModel.Id)
    //    .success(function (data, status, headers, config) {
    //        //debugger;
    //        $scope.customerModel = data;
    //        getallData();
    //        console.log(data);
    //    })
    //    .error(function (data, status, headers, config) {
    //        $scope.message = 'Unexpected Error while loading data!!';
    //        $scope.result = "color-red";
    //        console.log($scope.message);
    //    });
    //};

    //******=========Save Customer=========******
    $scope.saveCustomer = function () {
        $scope.isViewLoading = true;

        $http({
            method: 'POST',
            url: '/Home/Insert',
            param: { name: $scope.customerModel.Name, email: $scope.customerModel.Email }
        }).success(function (data, status, headers, config) {
            if (data.success === true) {
                $scope.message = 'Form data Saved!';
                $scope.result = "color-green";
                getallData();
                $scope.customerModel = {};
                console.log(data);
            }
            else {
                $scope.message = 'Form data not Saved!';
                $scope.result = "color-red";
            }
        }).error(function (data, status, headers, config) {
            $scope.message = 'Unexpected Error while saving data!!' + data.errors;
            $scope.result = "color-red";
            console.log($scope.message);
        });
        //getallData();
        $scope.isViewLoading = false;
    };

    //******=========Edit Customer=========******
    $scope.updateCustomer = function (Id) {
        //debugger;
        $scope.isViewLoading = true;
        $http({
            method: 'POST',
            url: '/Home/Update',
            data: $scope.customerModel
        }).success(function (data, status, headers, config) {
            if (data.success === true) {
                $scope.customerModel = null;
                $scope.message = 'Form data Updated!';
                $scope.result = "color-green";
                getallData();
                console.log(data);
            }
            else {
                $scope.message = 'Form data not Updated!';
                $scope.result = "color-red";
            }
        }).error(function (data, status, headers, config) {
            $scope.message = 'Unexpected Error while updating data!!' + data.errors;
            $scope.result = "color-red";
            console.log($scope.message);
        });
        $scope.isViewLoading = false;
    };

    //******=========Delete Customer=========******
    $scope.deleteCustomer = function (customerModel) {
        //debugger;
        var IsConf = confirm('You are about to delete ' + customerModel.Name + '. Are you sure?');
        if (IsConf) {
            $http.delete('/Home/Delete/' + customerModel.Id)
            .success(function (data, status, headers, config) {
                if (data.success === true) {
                    $scope.message = customerModel.Name + ' deleted from record!!';
                    $scope.result = "color-green";
                    getallData();
                    console.log(data);
                }
                else {
                    $scope.message = 'Error on deleting Record!';
                    $scope.result = "color-red";
                }
            })
            .error(function (data, status, headers, config) {
                $scope.message = 'Unexpected Error while deleting data!!';
                $scope.result = "color-red";
                console.log($scope.message);
            });
        }
    };
})
.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});