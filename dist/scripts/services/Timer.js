(function() {
     function Timer() {
         var Timer = {};
         
         Timer.state = "Start";
         Timer.currentTime = 1500;
         
         Timer.getCurrentTime = function(){
             return Timer.currentTime;
         }

         Timer.changeState = function(){
            if(Timer.state == "Start"){ 
                Timer.state = "Reset";
            }
            else if(Timer.state == "Reset"){
                Timer.currentTime = 1500;
                Timer.state = "Start";
                console.log(Timer.currentTime)
            }
//            else if(Timer.state == "Break"){ 
//                Timer.state = "Start";
//            }
         };
          return Timer;
     }
 
     angular
         .module('bloctime')
         .factory('Timer', Timer);
 })();