var app = angular.module('app',[]);
app.controller('ctrl', function($scope,$http) {
		$scope.login = function(){
			 let url = "http://127.0.0.1/wins/php/data2.php";
      		 let data = $.param({
      		 	Username : $scope.u,
      		 	Password : $scope.p
      		}); 	

		      let config = {
		        headers : {
		                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		                  }
		      }
		     		$http.post(url, data, config)
		           .then(
		               function(response){
		                 console.log(response);
		                 if(response.data == 1){
		                 		alert("Account Registered.");
		                 }else{
		                 	alert("Acount not Found.")
		                 }
		               }, 
		               function(response){
		                 console.log(response);
		               }
		            );
				}


			 $scope.callData = function(){
		      $http.get("http://127.0.0.1/wins/php/data.php")
		        .then(
		          function (success){
		            $scope.persons = success.data;
		          },
		          function (error){
		            console.log("Failed CallData!.");
		          }
		        ); 
		 	  }

			  $scope.insert = function(){
		      let url = "http://127.0.0.1/wins/php/insert.php";
		      let data = $.param({
		          fname : $scope.fn,
		          lname : $scope.ln,
		          mname : $scope.mn,
		          gender : $scope.gen,
		          db	: $scope.bd
		      }); 

		      let config = {
		        headers : {
		                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		                  }
		      }
		     		$http.post(url, data, config)
		           .then(
		               function(response){
		                 console.log(response);
		                 $scope.callData();
		               }, 
		               function(response){
		                 console.log(response);
		               }
		            );
		      }


		      $scope.callUser = function() {
				      $http.get("http://127.0.0.1/wins/php/data1.php")
				        .then(
				          function (success){
				            $scope.users = success.data;
				          },
				          function (error){
				            console.log("Failed CallUser!.");
				          }
				        ); 
		      }
});

