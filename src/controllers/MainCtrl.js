import { APP_NAME } from "../config";
export class MainCtrl {
  constructor($scope) {
    this.test = "Test";
    $scope.test2 = 1;
  }
}

angular.module(APP_NAME)
  .controller("MainCtrl", MainCtrl);
