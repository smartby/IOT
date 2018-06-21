(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myNewPage', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('myNewPage', {
                url: '/myNewPage',
                templateUrl: 'app/pages/myNewPage/my-new-page.html',
                title: '虫害监控',
                sidebarMeta: {
                    order: 800,
                    icon: 'ion-stats-bars',
                },
            });
    }

})();
