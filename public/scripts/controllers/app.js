function App ($scope) {	
$scope.setActive = function(type){
$scope.homeActive = "";
$scope.searchActive = "";
$scope.contactActive = "";
$scope[type+'Active'] = "active";
}
$scope.topNavURL = 'partials/topNav.html';
$scope.cenNavURL = 'partials/centerNav.html';
 }