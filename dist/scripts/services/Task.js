(function() {  
    
    function Task( $firebaseArray) {
        
        var ref = new Firebase("https://bloctime-onur.firebaseio.com/data");
        
        Task.tasks = $firebaseArray(ref);
        
        Task.addUser = function(){
            
//            var currentdate = new Date(); 
//            var datetime = + currentdate.getDate() + "/"
//                + (currentdate.getMonth()+1)  + "/" 
//                + currentdate.getFullYear() + " @ "  
//                + currentdate.getHours() + ":"  
//                + currentdate.getMinutes() + ":" 
//                + currentdate.getSeconds();
            
            Task.tasks.$add({
                text: Task.taskText,
            })  
            
            console.log(Task.taskText);
        };
        return Task;

    };


angular.module('bloctime')
.factory('Task', ['$firebaseArray', Task]);
})();