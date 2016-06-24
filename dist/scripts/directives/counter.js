(function() {
    function counter($interval, Timer) {

        timer = Timer;

        return {
            templateUrl: '/templates/directives/counter.html',
            replace: true,
            restrict: 'E',
            scope: { },
            link: function(scope, element, attributes) {

                var loopTime; 
                
                var decTime = function(){
                    scope.time = timer.currentTime;
                    if(timer.state == "Reset" && scope.time > 0 ){ 
                        scope.time -= 1; 
                        timer.currentTime = scope.time;
                    }
                }

                loopTime = $interval(decTime, 1000);

                scope.$watch(timer.state, decTime)
                
            }
        }
    }


angular
    .module('bloctime')
    .directive('counter',['$interval', 'Timer', counter]);
})();