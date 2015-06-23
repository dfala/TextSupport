angular.module('textSupport')

.factory('getData', function ($q) {
	var service = {};

	var fireRef = new Firebase ('https://textspport.firebaseio.com/texts');

	service.getTexts = function () {
		var deferred = $q.defer();

		fireRef.on('value', function (snapshot) {
			
			var data = snapshot.val();
			var textArray = [];

			for (var key in data) {
				textArray.push(data[key])
			}

			deferred.resolve(textArray);
		})

		return deferred.promise;
	}


	return service;
})