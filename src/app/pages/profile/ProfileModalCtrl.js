/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfileModalCtrl', ProfileModalCtrl);

  /** @ngInject */
  function ProfileModalCtrl($scope, $uibModalInstance) {//$uibModalInstance这个是用来调用函数将模态框内的数据传到外层控制器中的
    $scope.link = '';
    $scope.ok = function () {
      $uibModalInstance.close($scope.link);   //close函数是在模态框关闭后调用的函数,他会将这个参数传到主控制器的results函数中,作为回调值

    };
  }

})();