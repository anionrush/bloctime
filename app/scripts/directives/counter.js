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
                        if(timer.currentTime == 0){
                            timer.state = "Break";
                            timer.sound.play();
                        }
                    }
                    else if(timer.state == "New Pomodoro" && scope.time > 0 ){ 
                        scope.time -= 1; 
                        timer.currentTime = scope.time;
                        
                        if(timer.currentTime == 0){
                            timer.currentTime = 5;
                            timer.state = "Start";
                            timer.sound.play();
                            
                        }
                    }
                }

                loopTime = $interval(decTime, 1000);

                scope.$watch(timer.currentTime, decTime)
                
            }
        }
    }


angular
    .module('bloctime')
    .directive('counter',['$interval', 'Timer', counter]);
})();