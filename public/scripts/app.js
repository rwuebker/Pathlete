'use strict';

function config($stateProvider, $locationProvider, $urlRouterProvider) {

  $stateProvider
    .state('user', {
      templateUrl: '/views/user/user.html',
      controller: 'UserController',
      controllerAs: 'UserCtrl',
      url: '/user/:userId',
      resolve: {
        // inject the user into state via resolve
        user: ['$http', '$stateParams', function($http, $stateParams) {
          // TODO: Make api end point to return users
          // return $http.get('/api/user/' + $stateParams.userId).then(function(response) {
          //   // return user data
          //   return response.data;
          // }).catch(function(err) {
          //   // user doesn't exist?
          // });
          return {
            _id: '1241421414124',
            username: 'RickWuebker',
            age: 36,
            location: {
              city: 'San Francisco',
              state: 'CA'
            },
            totalSteps: 666,
            quote: '"I enjoy walking around my neighborhood at night!"',
            challenge: {
              challengeName: 'Climb Mount Everest',
              createAt: '11-22-2015',
              goalDate: '11-22-2016',
              goal: '$500',
              raised: '$123'
            }
          }
        }]
      }
    })
    .state('main', {
      templateUrl: '/views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'MainCtrl',
      url: '/'
    })
    .state('progress', {
      templateUrl: '/views/progress.html',
      controller: 'ProgressCtrl',
      url: '/progress'
    })
    .state('everest', {
       templateUrl: '/views/everest.html',
       controller: 'EverestCtrl',
       url: '/progress/everest'
    })
    .state('lutetia', {
      templateUrl: '/views/lutetia.html',
      controller: 'LutetiaCtrl',
      url: '/progress/lutetia'
    })
    .state('usa', {
      templateUrl: '/views/usa.html',
      controller: 'UsaCtrl',
      url: '/progress/usa'
    })
    .state('achievements', {
      templateUrl: '/views/achievements.html',
      controller: 'AchievementsCtrl',
      url: '/achievements'
    });

  //$urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({enabled: true, requireBase: false});


  window.Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
}

config.$inject = ['$stateProvider', '$locationProvider','$urlRouterProvider'];

var app = angular
  .module('pathleteApp', [
    'pathleteApp.services',
    'pathleteApp.AchievementsCtrl',
    'pathleteApp.EverestCtrl',
    'pathleteApp.LutetiaCtrl',
    'pathleteApp.UsaCtrl',
    'pathleteApp.MainCtrl',
    'pathleteApp.ProgressCtrl',
    'pathleteApp.ToolbarCtrl',
    'pathleteApp.controllers.user',
    'ui.router',
    'angularPayments'
  ])
  .config(config);