/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myNewPage1')
        .directive('areaChart2', areaChart2);

    /** @ngInject */
    function areaChart2() {
        return {
            restrict: 'E',
            controller: 'AreaChartCtrl1',
            templateUrl: 'app/pages/myNewPage1/areaChart/areaChart.html'
        };
    }
})();