/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('trafficChart2', trafficChart2);

  /** @ngInject */
  function trafficChart2() {
    return {
      restrict: 'E',
      controller: 'TrafficChartCtrl',
      templateUrl: 'app/pages/dashboard/trafficChart/trafficChart.html'
    };
  }
})();