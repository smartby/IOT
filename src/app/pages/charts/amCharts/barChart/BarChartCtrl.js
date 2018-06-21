/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('BarChartCtrl', BarChartCtrl);

  /** @ngInject */
  function BarChartCtrl($scope, baConfig, $element, layoutPaths) {
      //socket.emit('a', {data: {test:'test'}    });
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      /*dataProvider: [
        {
            value: '10',
           //value:111,
          visits: 3025,
          color: layoutColors.primary
        },
        {
            value: '20',
          visits: 1882,
          color: layoutColors.danger

        },
        {
            value: '30',
          visits: 1809,
          color: layoutColors.info
        },
        {
            value: '40',
          visits: 1322,
          color: layoutColors.success
        },
        {
            value: '50',
          visits: 1122,
          color: layoutColors.warning
        },
        {
          value: '60',
          visits: 1114,
          color: layoutColors.primaryLight
        }
      ],*/ dataProvider: [

            {
               hour: '00:00',
                value: 499
            },
            {
                hour: '01:00',
                value: 943
            },
            {
                hour: '02:00',
                value: 575
            },
            {
                hour: '03:00',
                value: 748
            },
            {
                hour: '04:00',
                value: 821
            },
            {
                hour: '05:00',
                value: 980
            },
            {
                hour: '06:00',
                value: 576
            },
            {
                hour: '07:00',
                value: 1021
            },
            {
                hour: '08:00',
                value: 654
            },
            {
                hour: '09:00',
                value: 958
            },
            {
                hour: '10:00',
                value: 1300
            },
            {
                hour: '11:00',
                value: 800
            },
            {
                hour: '12:00',
                value:1000
            }
        ],
        valueAxes: [
            {
                axisAlpha: 0,
                position: 'left',
                title: '土壤吸水力100000/pa',
                gridAlpha: 0.5,
                gridColor: layoutColors.border,
            }
        ],
      startDuration: 1,//?
       /* graphs: [
            {
                id: 'g1',
                balloonText: '[[value]]',
                bullet: 'round',
                bulletSize: 8,
                lineColor: layoutColors.danger,
                lineThickness: 1,
                negativeLineColor: layoutColors.warning,
                type: 'smoothedLine',
                valueField: 'value'
            }
        ],*/
      graphs: [
        {
          //id
          balloonText: '<b>[[category]]: [[value]]</b>',
            //bullet:'round',
            //bulletSize:8,
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
            //lineThickness:1
            //lineColor:layoutColors.danger
            //negativeLineColor:layoutColors.warning
          type: 'column',//'smoothedLine'
          valueField: 'value'//???
        }
      ],

     /* chartCursor: {
        //graph:'g1'
          //girdAlpha:0
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },*/


        chartCursor: {
            categoryBalloonDateFormat: 'JJ:NN',
            cursorAlpha: 0,
            valueLineEnabled: true,
            valueLineBalloonEnabled: true,
            valueLineAlpha: 0.5,
            fullWidth: true
        },
        dataDateFormat: 'JJ:NN',
        // categoryField: 'value',
        categoryField: 'hour',

        categoryAxis: {
            gridPosition: 'start',
            labelRotation: 0,//横坐标是否倾斜原值是45
            gridAlpha: 0.5,
            gridColor: layoutColors.border,
        },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });


  }
})();
