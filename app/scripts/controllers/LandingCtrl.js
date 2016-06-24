(function() {
     function LandingCtrl(Timer) {
         this.timer = Timer;
     }
 
     angular
         .module('bloctime')
         .controller('LandingCtrl', ['Timer',LandingCtrl]);
 })();