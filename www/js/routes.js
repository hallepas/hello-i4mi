angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('tab.form', {
      url: '/form',
      views: {
        'tab-form': {
          templateUrl: 'templates/form.html',
          controller: 'formCtrl'
        }
      }
    })
    .state('tab.list', {
      cache: false,
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'templates/list.html',
          controller: 'listCtrl'
        }
      }
    })

  .state('tab.chart', {
    cache: false,
    url: '/chart',
    views: {
      'tab-chart': {
        templateUrl: 'templates/chart.html',
        controller: 'chartCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/account');

});