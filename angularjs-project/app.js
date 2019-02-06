angular.module('NOALVOApp', [])
  .controller('MainController', ['$scope', 'UsersService', async function($scope, UsersService) {
    $scope.name = 'Igor';
    $scope.users = [];
    $scope.hasErros = false;
    $scope.isLoading = false;
    
    try {
      $scope.isLoading = true;
      const { data } = await UsersService.get();
      $scope.users = data;
      $scope.isLoading = false;
      $scope.$digest();
    } catch (error) {
      $scope.hasErros = true;
      $scope.isLoading = false;
      console.log('* Errors', error);
    }
  }]);