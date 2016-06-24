(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
        .state('landing', {
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: '/templates/landing.html'
         })
        .state('history', {
            url: '/history',
            templateUrl: '/templates/history.html'
         })
    }
    
    angular
        .module('bloctime', ['ui.router', 'firebase'])
        .config(config); 
 })();