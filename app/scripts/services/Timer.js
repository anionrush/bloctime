(function() {
     function Timer() {
         var Timer = {};
         
         Timer.state = "Start";
         Timer.counter = 0;
         Timer.currentTime = 1500;
         Timer.onBreak = function(){
             return Timer.state == "Break" || Timer.state == "New Pomodoro";
         };
         

         Timer.changeState = function(){

            if(Timer.state == "Start"){ 
                Timer.state = "Reset";
            }
            else if(Timer.state == "Reset"){
                Timer.currentTime = 1500;
                Timer.state = "Start"
            }
            else if(Timer.state == "Break"){
                Timer.counter++;
                if( Timer.counter % 4 == 0){
                    Timer.currentTime = 1800; 
                }
                else{
                    Timer.currentTime = 500;  
                }
                
                Timer.state = "New Pomodoro";
            }
            else if(Timer.state == "New Pomodoro"){
                Timer.currentTime = 1500;
                Timer.state = "Start";
            }
         };
         
         
          return Timer;
     }
 
     angular
         .module('bloctime') 
         .factory('Timer', Timer);
 })();