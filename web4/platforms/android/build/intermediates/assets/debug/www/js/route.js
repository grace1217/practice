// 路由模块，控制全局页面跳转
angular.module('route', [
  'tab.route','home.route','guidePage.route','category.route',
  'goodsList.route','details.route','account.route'
  ])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/guidePage');

  });
