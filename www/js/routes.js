angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('sestaokoKoadrilak.program', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/program.html',
        controller: 'programCtrl'
      }
    }
  })

  .state('sestaokoKoadrilak.groups', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/groups.html',
        controller: 'groupsCtrl'
      }
    }
  })

  .state('sestaokoKoadrilak.bars', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bars.html',
        controller: 'barsCtrl'
      }
    }
  })

  .state('sestaokoKoadrilak', {
    url: '/side-menu21',
    templateUrl: 'templates/sestaokoKoadrilak.html',
    abstract:true
  })

  .state('page', {
    url: '/page4',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});