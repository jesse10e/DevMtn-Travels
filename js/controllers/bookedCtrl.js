angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
var packageId = $stateParams.id;

$scope.booked = mainSrv.findPackageById(packageId)
})
