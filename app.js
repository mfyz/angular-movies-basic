angular.module('Movies', ['ngResource']);

function MoviesController($scope, $resource){
	$scope.searchMoviesApi = $resource('http://www.omdbapi.com/', {
		s: 'breaking bad',
		callback: 'JSON_CALLBACK'
	}, {
		get: {
			method: 'JSONP'
		}
	});

	$scope.formSearchMovies = function(){
		$scope.searchResults = $scope.searchMoviesApi.get({
			s: $scope.formMovieTitle
		}, function(result){
			//console.log(result);
		});
	}

	$scope.getMovieDetailApi = $resource('http://www.omdbapi.com/', {
		i: 'tt1245526',
		callback: 'JSON_CALLBACK'
	}, {
		get: {
			method: 'JSONP'
		}
	});

	$scope.getMovieDetail = function(imdbTitle){
		$scope.movieDetails = $scope.getMovieDetailApi.get({
			i: imdbTitle
		}, function(result){
			//console.log(result);
		});
	}
}