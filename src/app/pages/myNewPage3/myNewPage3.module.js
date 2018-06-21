(function () {
    'use strict';

    var app=angular.module('BlurAdmin.pages.myNewPage3', [])
        .config(routeConfig);
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('myNewPage3', {
                url: '/myNewPage3',
                templateUrl: 'app/pages/myNewPage3/my-new-page3.html',
                controller: 'TablesPageCtrl2',
                title: '数据设置',
                sidebarMeta: {
                    order: 800,
                    icon: 'ion-stats-bars',
                },
            });
    }

})();
