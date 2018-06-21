/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage')
      .controller('DashboardPieChartCtrl2', DashboardPieChartCtrl);

  /** @ngInject */
  function DashboardPieChartCtrl($scope, $timeout, baConfig, baUtil,socket) {

     // $scope.n;
      //window.n

      //socket.on('news',function (data) {

       //   $scope.n=data;
       //   console.log($scope.n);
     // });
      //console.log(socket.on());
     // console.log($scope.n);

    // console.log(n);
     // socket.emit('a', {data: {test:'test'}    });


      //$scope.n


    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
     // socket.on('news1',function (data1) {
       // socket.on('news2',function (data2) {
         // console.log(data2);
    $scope.charts = [{
      color: pieColor,
      description:'土壤湿度',
      stats: '1',//data1,
      icon: 'refresh',
    }, {
      color: pieColor,
      description: '土壤温度',
      stats: '2',//data2,
      icon: 'refresh',
    }, {
      color: pieColor,
      description: '土壤盐分',
      stats: '178,391',
      icon: 'refresh',
    }, {
      color: pieColor,
      description: '土壤PH值',
      stats: '32,592',
      icon: 'refresh',
    }
    ];
     // });
     // });
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
    }, 1000);



  }
})();