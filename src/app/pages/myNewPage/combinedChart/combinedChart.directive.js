/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myNewPage')
        .directive('combinedChart2', combinedChart2);

    /** @ngInject */
    function combinedChart2() {
        return {
            restrict: 'E',
            controller: 'combinedChartCtrl',
            templateUrl: 'app/pages/myNewPage/combinedChart/combinedChart.html'
        };
    }
})();