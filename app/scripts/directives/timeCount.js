//Time directive
(function() {  
    function timeCount($interval, Timer) {
        
        return {
            replace: false,
            restrict: 'A',
            scope: false,
            link: function(scope, element, attributes) {
                
                var loopTime; 
                
                var decTime = function(){

                    if(Timer.state == "Reset" && Timer.counter > 0 ){ 
                        Timer.counter -= 1; 
                        if(Timer.counter == 0){
                            Timer.state = "Break";
                            
                            Timer.sound.play();
                        }
                    }
                    else if(Timer.state == "Restart Pomodoro" && Timer.counter > 0 ){ 
                        Timer.counter -= 1; 
                        if(Timer.counter == 0){
                            Timer.state = "Restart Pomodoro";
                            
                            Timer.sound.play();
                        }
                    }
                }
                
                loopTime = $interval(decTime, 1000);
                
                scope.$watch(Timer.state, decTime)
                
            }
        }
    }

angular.module('bloctime')
    .directive('timeCount', ['$interval', 'Timer',  timeCount]);
})();