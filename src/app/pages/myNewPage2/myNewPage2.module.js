(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myNewPage2', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('myNewPage2', {
                url: '/myNewPage2',
                templateUrl: 'app/pages/myNewPage2/my-new-page2.html',
                title: '设备状态',
                sidebarMeta: {
                    order: 800,
                    icon: 'ion-stats-bars',
                },
            });
    }

})();
