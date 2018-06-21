(function () {
    'use strict';

    var app1=angular.module('BlurAdmin.pages.myNewPage1', []);
       app1.config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('myNewPage1', {
                url: '/myNewPage1',
                templateUrl: 'app/pages/myNewPage1/my-new-page1.html',

                title: 'websocket',
                sidebarMeta: {
                    order: 800,
                    icon: 'ion-stats-bars',
                },
            });
    }






})();
