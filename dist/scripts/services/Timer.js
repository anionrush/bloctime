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
                    break;
                case "Reset":
                    Timer.state = "Start"
                    Timer.counter = T_25;
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
                    break;
                case "Restart Pomodoro":
                    Timer.state = "Start"
                    Timer.counter = T_25;
                    break;
            }
        }
        
        
        return Timer;
    }

angular.module('bloctime')
    .constant("T_25", 5)
    .constant("T_5", 3)
    .constant("T_30", 10)
    .factory('Timer', Timer);
})();