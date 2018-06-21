/**
 * Created by dell on 2018/6/17.
 */


var app1 = angular.module('app1', [
    'ngMQTT'
]);

app1.config(['MQTTProvider',function(MQTTProvider){
    MQTTProvider.setHref('mqtt://127.0.0.1:7410');
}]);

app1.controller('indexCtrl1', ['$scope', 'MQTTService', function ($scope, MQTTService) {
    MQTTService.on('hello', function(data){
        alert(data)
        $scope.firstName = data;
        $scope.lastName = "Doe";
    });


    MQTTService.send('hello','word');
    // MQTTService.send('hello','word1');
    //MQTTService.send('hello','word2');

}]);