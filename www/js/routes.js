angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('sestaokoKoadrilak.program', {
        url: '/program',
        views: {
            'menu': {
                templateUrl: 'templates/program.html',
                controller: 'programCtrl'
            }
        }
    })

    .state('sestaokoKoadrilak.event', {
        url: '/program/:id',
        views: {
            'menu': {
                templateUrl: 'templates/event.html',
                controller: 'eventCtrl'
            }
        }
    })

    .state('sestaokoKoadrilak.groups', {
        url: '/groups',
        views: {
            'menu': {
                templateUrl: 'templates/groups.html',
                controller: 'groupsCtrl'
            }
        }
    })

    .state('sestaokoKoadrilak.bars', {
        url: '/bars',
        views: {
            'menu': {
                templateUrl: 'templates/bars.html',
                controller: 'barsCtrl'
            }
        }
    })

    .state('sestaokoKoadrilak', {
        url: '/menu',
        templateUrl: 'templates/sestaokoKoadrilak.html',
        abstract: true
    })

    $urlRouterProvider.otherwise('/menu/program')
});