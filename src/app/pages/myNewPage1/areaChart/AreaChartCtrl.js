/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage1')
      .controller('AreaChartCtrl1', AreaChartCtrl1);

  /** @ngInject */
  function AreaChartCtrl1($scope, baConfig, $element, layoutPaths,socket) {

      socket.emit('a', {data: {test:'test'}    });

      socket.on('news',function (data){

          socket.on('abc',function (data1){
            socket.on('news2',function (data2){
          $scope.h=data1;
          console.log(data1);
      var layoutColors = baConfig.colors;
      var id = $element[0].getAttribute('id');
      var areaChart = AmCharts.makeChart(id, {
          type: 'serial',
          theme: 'blur',
          color: layoutColors.defaultText,

          dataProvider: [
              {
                  lineColor: layoutColors.info,
                  date: '00:00',
                  duration: data
              },

              {
                  date: '02:00',
                  duration: data1,
                  lineColor: layoutColors.danger
              },
              {
                  date: '04:00',
                  duration: data2
              },
              {
                  date: '06:00',
                  duration: 9
              },
              {
                  date: '08:00',
                  duration: 31
              },
              {
                  date: '10:00',
                  duration: 6
              },
              {
                  date: '12:00',
                  duration: 42
              }
          ],
          balloon: {
              cornerRadius: 6,//0
              horizontalPadding: 15,//0
              verticalPadding: 10,//100,
          },
        /*valueAxes: [
         {
         duration: 'mm',
         durationUnits: {
         hh: 'h ',//纵坐标的单位
         mm: 'min'
         },
         gridAlpha: 0.5,//方格颜色的深浅
         gridColor: layoutColors.border,
         }
         ],*/
          //y轴
          valueAxes: [
              {
                  axisAlpha: 0,
                  position: 'left',
                  // title: '土壤吸水力100000/pa',
                  gridAlpha: 0.5,//轴的透明度
                  gridColor: layoutColors.border,
              }
          ],
          graphs: [
              {
                  bullet: 'square',
                  bulletBorderAlpha: 1,
                  bulletBorderThickness: 1,
                  fillAlphas: 0.5,
                  fillColorsField: 'lineColor',
                  slegendValueText: '[[value]]',
                  lineColorField: 'lineColor',
                  title: 'duration',
                  valueField: 'duration'
              }
          ],

        /* chartCursor: {
         categoryBalloonDateFormat: 'YYYY MMM DD',
         cursorAlpha: 0,
         //  fullWidth: true
         },*/
          chartCursor: {
              // categoryBalloonDateFormat: 'YYYY',
              categoryBalloonDateFormat: 'JJ:NN',
              cursorAlpha: 0,
              valueLineEnabled: true,
              valueLineBalloonEnabled: true,
              valueLineAlpha: 0.5,
              fullWidth: true
          },
          //dataDateFormat: 'YYYY-MM-DD',
          dataDateFormat: 'JJ:NN:SS',
          categoryField: 'date',
          //x轴
          categoryAxis: {
            //  dateFormats: [

                //  {period: 'ss', format: 'JJ:NN:SS'},
                 // {period: 'mm', format: 'JJ:NN'},
                 // {period: 'hh', format: 'JJ:NN'},
                  //{period:'DD',format:'MMM DD'},
                  //{period:'WW',format:'MMM DD'},
                  //{period:'MM',format:'MMM'},
                  //{period:'YYYY',format:'YYYY'}
              //],

             // parseDates: true,//是否以日期为X轴的值
              autoGridCount: false,
              gridCount: 50,//纵向线50条
              gridAlpha: 0.5,//网格透明度
              gridColor: layoutColors.border,
          },
          export: {
              enabled: true
          },
          pathToImages: layoutPaths.images.amChart
      });

      // areaChart.addListener('dataUpdated', zoomAreaChart);

      //function zoomAreaChart() {
      ///  areaChart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
      // }
      // }
   //   });
      });
          });
      });
  }
}
)();
