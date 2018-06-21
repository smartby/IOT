/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJsWaveCtrl', chartJsWaveCtrl);

  /** @ngInject */
  function chartJsWaveCtrl($scope, $interval, stopableInterval) {
    $scope.labels =["01h", "02h", "03h", "04h", "05h", "06h", "O7h", "08h", "09h"];
    $scope.data = [1, 9, 3, 4, 5, 6, 7, 8, 2].map(function(e){
      return Math.sin(e) * 200 +200;
    });

    stopableInterval.start($interval, function(){
      var tempArray = [];
      var lastElement = $scope.data[$scope.data.length-1];
      for(var i = $scope.data.length-1; i > 0; i--){
       tempArray[i] = $scope.data[i-1];
      }
      tempArray[0] = lastElement;
      $scope.data = tempArray;
    }, 400)
  }

})();