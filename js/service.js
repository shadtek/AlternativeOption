var app = angular.module('weatherApp');

app.service('service', function($http, $q) {

	this.getWeather = function() {
		var dfd = $q.defer();
    navigator.geolocation.getCurrentPosition(function(position) {
  		var lat =position.coords.latitude
  		var lon = position.coords.longitude
  		$http({
  			method: "GET",
  			url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'lon='+lon
  		}).then(function(weather){
  			dfd.resolve(weather.data);
  		})
		})
		return dfd.promise;
  }

  this.cheater = function() {
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?lat=40.226186&lon=-111.66075509999999'
    })
  }
})