/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.morris')
    .controller('morrisCtrl', morrisCtrl);

  /** @ngInject */
  function morrisCtrl($scope, $window, baConfig,socket) {//socket
      //socket.emit('a', {data: {test:'test'}    });

      //socket.on('news',function (data1) {
         // console.log(data1);
          //socket.on('news2',function (data2) {
              //socket.on('news3',function (data3) {
                 // socket.on('news4',function (data4) {
                   //   socket.on('news5',function (data5) {
                     //     socket.on('news6',function (data6) {
                       //       socket.on('news7',function (data7) {

    var layoutColors = baConfig.colors;
    $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    $scope.lineData1 = [
    {y: "2018-07-05 0:00", a:10},
        //{day: "2016-07-11", value: 10 },
      {y: "2018-07-05 02:00", a: 13.90},
      {y: "2018-07-05 04:00", a: 17.46},
      {y: "2018-07-05 06:00", a: 23.58},
      {y: "2018-07-05 08:00", a: 27.05},
        {y: "2018-07-05 10:00", a: 30.30},
        {y: "2018-07-05 12:00", a: 35.25},
      {y: "2018-07-05 14:00", a: 35.75},
      {y: "2018-07-05 16:00", a: 32.17}
    ];
      $scope.lineData2 = [
          {y: "2018-07-05 0:00", b: 989},
          //{day: "2016-07-11", value: 10 },
          {y: "2018-07-05 02:00", b: 1086},
          {y: "2018-07-05 04:00",  b: 1386},
          {y: "2018-07-05 06:00",  b: 1000},
          {y: "2018-07-05 08:00",  b: 780},
          {y: "2018-07-05 10:00",  b:598},
          {y: "2018-07-05 12:00",  b: 590},
          {y: "2018-07-05 14:00",  b: 500},
          {y: "2018-07-05 16:00",  b: 798}
      ];
    $scope.areaData1 = [
      {y: "2018-07-05 0:00", a: 29870},//, b: 90
      {y: "2018-07-05 02:00", a: 43210},//, b: 65
      {y: "2018-07-05 04:00", a: 70098},//, b: 40
      {y: "2018-07-05 06:00", a: 75980},//, b: 65
      {y: "2018-07-05 08:00", a: 80006},//, b: 40
      {y: "2018-07-05 10:00", a: 87652},//, b: 65
      {y: "2018-07-05 12:00", a: 92790},//, b: 90
        {y: "2018-07-05 14:00", a: 99991},//, b: 80
        {y: "2018-07-05 16:00", a: 69631}//, b: 9
    ];
      $scope.areaData2 = [
          {y: "2018-07-05 0:00", b: 87},//, b: 90
          {y: "2018-07-05 02:00", b: 89},//, b: 65
          {y: "2018-07-05 04:00", b: 64},//, b: 40
          {y: "2018-07-05 06:00", b: 94},//, b: 65
          {y: "2018-07-05 08:00", b: 50},//, b: 40
          {y: "2018-07-05 10:00", b: 46},//, b: 65
          {y: "2018-07-05 12:00", b: 38},//, b: 90
          {y: "2018-07-05 14:00", b: 50},//, b: 80
          {y: "2018-07-05 16:00", b: 77}//, b: 9
      ];
    $scope.barData = [
      {y: "2018-07-05 0:00", a: 5.2},//b: 90
      {y: "2018-07-05 02:00", a: 7.4},//, b: 65
      {y: "2018-07-05 04:00", a: 8.1},//, b: 40
      {y: "2018-07-05 06:00", a: 6.3},//, b: 65
      {y: "2018-07-05 08:00", a: 5},//, b: 40
      {y: "2018-07-05 10:00", a: 7},//, b: 65
      {y: "2018-07-05 12:00", a: 4.2},//, b: 90
        {y: "2018-07-05 14:00", a: 5},//, b: 80
        {y: "2018-07-05 16:00", a: 3}//, b: 90
    ];
    $scope.donutData = [
      {label: "日照时数 h", value: 12},
      {label: "太阳辐射 W/m2", value: 30},
      {label: "降雨量 mm", value: 20}
    ];

    angular.element($window).bind('resize', function () {
      //$window.Morris.Grid.prototype.redraw();
    });

                             // })
  //        })
    //  });
//});//}) })});
                          }


})();