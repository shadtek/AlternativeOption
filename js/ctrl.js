var app = angular.module('weatherApp');

app.controller('ctrl', function($scope, service) {



	$scope.getWeather = function() {
		service.getWeather().then(function(data){
			console.log(data);
		})
	}

	$scope.cheater = function() {
		service.cheater().then(function(response) {
			$scope.cheaty = response
		})
	}


})


/*


navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});

this returned my lat and lon and then I put it in ang got an object back

http://api.openweathermap.org/data/2.5/weather?lat=40.226186&lon=-111.66075509999999

{"coord":{"lon":-111.66,"lat":40.23},"sys":{"message":0.0545,"country":"US","sunrise":1430569447,"sunset":1430619780},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":293.193,"temp_min":293.193,"temp_max":293.193,"pressure":815.76,"sea_level":1020.4,"grnd_level":815.76,"humidity":32},"wind":{"speed":1.56,"deg":228},"clouds":{"all":48},"dt":1430585184,"id":5780026,"name":"Provo","cod":200}

*/