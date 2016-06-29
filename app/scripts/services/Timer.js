//Timer service
(function() {  
    function Timer(T_25, T_5, T_30) {
        
        Timer.state = "Start";
        Timer.counter = T_25;
        Timer.break = 0;
        
        Timer.sound = new buzz.sound( "assets/music/ding", {
            formats: ['mp3'],
            preload: true
        }); 

        Timer.changeState = function(){
            switch(Timer.state) {
                case "Start":
                    Timer.state = "Reset"
                    angular.element( document.querySelector('#second')).addClass('sec-div');
                    angular.element( document.querySelector('#minute')).addClass('min-div');
                    break;
                case "Reset":
                    Timer.state = "Start"
                    Timer.counter = T_25;
                    angular.element( document.querySelector('#second')).removeClass('sec-div');
                    angular.element( document.querySelector('#minute')).removeClass('min-div');
                    break;
                case "Break":
                    Timer.state = "Restart Pomodoro"
                    Timer.break++;
                        if( Timer.break % 4 == 0){
                            Timer.counter = T_30; 
                        }
                        else{
                            Timer.counter = T_5;  
                        }
                    angular.element( document.querySelector('#second')).addClass('sec-div');
                    angular.element( document.querySelector('#minute')).addClass('min-div');
                    break;
                case "Restart Pomodoro":
                    Timer.state = "Start"
                    angular.element( document.querySelector('#second')).removeClass('sec-div');
                    angular.element( document.querySelector('#minute')).removeClass('min-div');
                    Timer.counter = T_25;
                    break;
            }
        }
        
        
        return Timer;
    }

angular.module('bloctime')
    .constant("T_25", 1500)
    .constant("T_5", 300)
    .constant("T_30", 1800)
    .factory('Timer', Timer);
})();