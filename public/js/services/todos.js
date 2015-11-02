angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			update : function(id,todoData) {
				return $http.post('/api/todos/' + id, todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			},
			getByID : function(id) {
				 return $http.get('/api/todos/' + id);
				//return $http.get('/api/todos/' + id +"&rnd="+new Date().getTime());
			}
		}
	}]);


	