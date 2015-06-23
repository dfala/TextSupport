angular.module('textSupport', [])

.controller('MainController', function ($scope, $http, getData) {

	$scope.texts = [];

	$scope.sendMessage = function () {
		var message = {
			to: '+18016969488',
			body: $scope.messageBody,
			from: '+14155992671'
		}

		$http.post('/support/messages/', message)
		.success(function (response) {
			console.info(response);
		})
		.error(function (err) {
			throw new Error(err);
		});
	}

	var gimmeData = function () {
		getData.getTexts()
		.then(function (data) {
			$scope.texts = data;
			console.warn('this is data on my controller', data);
		})
		.catch(function (err) {
			throw new Error(err);
		});
	}

	gimmeData();

})