'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:AdviceCtrl
 * @description
 * # AdviceCtrl
 * Controller of the spaceshiplabsApp
 */
angular.module('spaceshiplabsApp')
  .controller('AdviceCtrl', function ($scope, $http) {

  	var vm = this;
  	angular.extend(vm,{
  		sendDataToHS: sendDataToHS
  	});

  	function init(){
			vm.hs_context = JSON.stringify({
				pageUrl: 'http://spaceshiplabs.com/advice',
				pageName: 'Advice Page'
			});  		

  		var portalId = '3014389';
  		var formId = '87681cc5-72ff-4baa-9f3e-eda0cd7ed4d4';
  		vm.hsUrl =  'https://forms.hubspot.com/uploads/form/v2/' +portalId+ '/' + formId;
  	}

  	init();

  	function sendDataToHS(){
  		var portalId = '3014389';
  		var formId = '87681cc5-72ff-4baa-9f3e-eda0cd7ed4d4';
  		var url = 'https://forms.hubspot.com/uploads/form/v2/' +portalId+ '/' + formId;
  		var data = {
				hs_context: JSON.stringify({
					pageUrl: 'http://spaceshiplabs.com/advice',
					pageName: 'Advice Page'
				})
  		};
  		angular.extend(data, vm.formData);
  		var dataStr = querystring.stringify(data);
  		url += '?' + dataStr;
  		$http.post(url)
  			.then(function(response){
  				console.log('response', response);
  			})
  			.catch(function(err){
  				console.log('err', err);
  			});
  	}

  });
