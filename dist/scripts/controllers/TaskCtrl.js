(function() {
    function TaskCtrl(Task) {
        
        this.taskServ = Task;
    
//        var ref = new Firebase("https://bloctime-onur.firebaseio.com/data");
//        
//        $scope.tasks = $firebaseArray(ref);
//        
//        $scope.addUser = function(){
//            
//          var currentdate = new Date(); 
//            var datetime = + currentdate.getDate() + "/"
//                + (currentdate.getMonth()+1)  + "/" 
//                + currentdate.getFullYear() + " @ "  
//                + currentdate.getHours() + ":"  
//                + currentdate.getMinutes() + ":" 
//                + currentdate.getSeconds();
//            
//            $scope.tasks.$add({
//                text: $scope.taskText,
//            })  
//        };
    }

angular.module('bloctime')
    .controller('TaskCtrl', ['Task', TaskCtrl]);
})(); 
