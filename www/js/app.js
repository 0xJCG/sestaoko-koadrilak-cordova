angular.module('app', ['ionic', 'ngMap', 'ion-floating-menu', 'app.services', 'app.controllers', 'app.routes', 'app.directives'])

.run(function($ionicPlatform, DB) {
    DB.init();

    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})