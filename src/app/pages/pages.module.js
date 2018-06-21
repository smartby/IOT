/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
     // 'ngmqtt',
   // 'BlurAdmin.pages.dashboard',
    //'BlurAdmin.pages.ui',
    //'BlurAdmin.pages.components',
    //'BlurAdmin.pages.form',
    //'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    //'BlurAdmin.pages.maps',
    //'BlurAdmin.pages.profile',
      'BlurAdmin.pages.myNewPage',
      'BlurAdmin.pages.myNewPage1',
      'BlurAdmin.pages.myNewPage2',
      'BlurAdmin.pages.myNewPage3',
      //'BlurAdmin.pages.myNewPage4'
     // 'BlurAdmin.pages.Weathers'
     // 'BlurAdmin.pages.dashboard3',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/charts/amCharts');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });

     /* baSidebarServiceProvider.addStaticItem({
          title: 'Menu Level 2',
          icon: 'ion-ios-more',
          subMenu: [{
              title: 'Menu Level 2.1',
              disabled: true
          }, {
              title: 'Menu Level 2.2',
              subMenu: [{
                  title: 'Menu Level 2.2.1',
                  disabled: true
              }]
          }]
      });

     /* baSidebarServiceProvider.addStaticItem({
          title: 'nananan',
          icon: 'ion-ios-more',

      });*/

   /* baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });*/
  }

})();
