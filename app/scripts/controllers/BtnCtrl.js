//Btn Ctrl
(function() {
    function BtnCtrl(Timer) {
        this.timer = Timer;
    }

angular.module('bloctime')
    .controller('BtnCtrl', ['Timer', BtnCtrl]);
})(); 