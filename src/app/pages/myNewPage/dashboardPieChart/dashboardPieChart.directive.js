/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage')
      .directive('dashboardPieChart2', dashboardPieChart2);

  /** @ngInject */
  function dashboardPieChart2() {
    return {
      restrict: 'E',
      controller: 'DashboardPieChartCtrl2',
      templateUrl: 'app/pages/myNewPage/dashboardPieChart/dashboardPieChart.html'
    };
  }
})();