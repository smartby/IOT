/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('FunnelChartCtrl', FunnelChartCtrl);

  /** @ngInject */
  function FunnelChartCtrl($scope, $element, layoutPaths, baConfig) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var funnelChart = AmCharts.makeChart(id, {
      type: 'funnel',
      theme: 'blur',
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      dataProvider: [
        {
          title: '红壤',
          value: 300
        },
        {
          title: '黄壤',
          value: 123
        },
        {
          title: '水稻土',
          value: 98
        },
        {
          title: '紫色土',
          value: 72
        },
        {
          title: '石灰土',
          value: 35
        },
        {
          title: '棕壤',
          value: 25
        },
        {
          title: ' 褐土',
          value: 18
        }
      ],
      titleField: 'title',
      marginRight: 160,
      marginLeft: 15,
      labelPosition: 'right',
      funnelAlpha: 0.9,
      valueField: 'value',
      startX: 0,
      alpha: 0.8,
      neckWidth: '0%',
      startAlpha: 0,
      outlineThickness: 1,
      neckHeight: '0%',
      balloonText: '[[title]]:<b>[[value]]</b>',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',
      pathToImages: layoutPaths
    });
  }
})();
