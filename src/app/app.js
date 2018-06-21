'use strict';

var app=angular.module('BlurAdmin', [
    //'ngmqtt',
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',

  'angular-progress-button-styles',
  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);
//app.config(['MQTTProvider',function(MQTTProvider){
 //   MQTTProvider.setHref('mqtt://127.0.0.1:7410');
//}]);
app.factory('socket', function ($rootScope) {
    var socket = io.connect('ws://localhost:8000/');
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }
    };
});


/*app.controller('customersCtrl', function($scope, socket) {
    socket.on('news', function (data) {
        $scope.firstName = data;
    });

    socket.emit('a', {data: {test:'test'}    });
});*/