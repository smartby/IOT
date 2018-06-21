/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs3DCtrl', chartJs3DCtrl);

  /** @ngInject */
  function chartJs3DCtrl($scope, baConfig) {
    var layoutColors = baConfig.colors;

    $scope.labels =[" 氮", "磷", "钾", "硫"];
    $scope.data = [20, 40, 5, 35];
    $scope.options = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };

    $scope.changeData = function () {
      $scope.data = shuffle($scope.data);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();