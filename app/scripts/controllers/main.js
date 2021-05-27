'use strict';

/**
 * @ngdoc function
 * @name spaceshiplabsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaceshiplabsApp
 */
function MainCtrl($scope, $mdSidenav, $location, $routeParams, metaTagsService, $http, windowSize, $mdDialog) {

  $scope.init = function () {
    $scope.emailSent = false;
    $scope.contactError = false;
    $scope.contactData = {};
    $scope.contactModal = {};
    $scope.winSize = "medium";
    $scope.winSizeSingle = "medium";
    $scope.redirectCount = 0;
    $scope.autoScroll = true;
    $scope.domainUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port();
    windowSize.init();
    metaTagsService.setMetaTags();

  };

  $scope.toggleSidebar = function () {
    $mdSidenav('left').open();
  };



  $scope.closeSidebar = function () {
    $mdSidenav('left').close();
  };

  $scope.$on('$locationChangeStart', function (evt, absNewUrl, absOldUrl) {
    $scope.currentUrl = absNewUrl;

    if (absOldUrl.indexOf('/proyectos') >= 0 && absNewUrl.indexOf('/proyectos') >= 0) {
      $scope.autoScroll = false;
    } else {
      $scope.autoScroll = true;
    }

    if (absNewUrl.indexOf('/thankyou') >= 0 || absNewUrl.indexOf('/advice') >= 0) {
      $scope.socialMenu = true;
    } else {
      $scope.socialMenu = false;
    }

    var resetContactForm = function () {
      $scope.contactError = false;
      if ($scope.contactData) {
        $scope.contactData = {
          email: '',
          name: '',
          message: '',
          _gotcha: '',
        };
      }
    };

    var resetModalForm = function () {
      $scope.contactError = false;
      if ($scope.contactModal) {
        $scope.contactModal = {
          formPage: '',
          name: '',
          email: '',
          phone: '',
          website: '',
          _gotcha: '',
        };
      }
    };

    var customizeHeader = function () {
      if ($location.path() === '/') {
        $('.toolbar-head .menu').addClass('menu-home');
      } else {
        $('.toolbar-head .menu').removeClass('menu-home');
      }
    };

    var manageSidebar = function () {
      if ($scope.redirectCount > 0) {
        $scope.closeSidebar();
      }
      $scope.redirectCount++;
    };

    $scope.isHome = ($location.path() === '/') ? true : false;

    setTimeout(customizeHeader, 500);
    manageSidebar();
    resetContactForm();
    resetModalForm();

  });

  $scope.isHome = ($location.path() === '/') ? true : false;

  $scope.getAbsUrl = function () {
    return $location.absUrl();
  };

  $scope.doContact = function (form) {
    if (form.$valid) {
      $scope.loadingContact = true;
      $scope.contactError = false;
      $scope.emailSent = false;
      var params = $.param({
        email: $scope.contactData.email,
        name: $scope.contactData.name,
        content: $scope.contactData.message,
      });
      //params = JSON.stringify(params);
      var req = {
        url: 'https://blog.spaceshiplabs.com/wp-content/themes/spaceshiplabs/composerUtilities/index.php',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      };
      $http(req).then(
        function (response) {
          //console.log(response);
          if (response.data === 'success') {
            $scope.emailSent = true;
            $scope.contactError = false;
          } else {
            $scope.contactError = true;
          }
          $scope.loadingContact = false;
        }, function (err) {
          $scope.contactError = true;
          console.log(err);
          $scope.loadingContact = false;
        }
      );
    } else {
      $scope.contactError = true;
      $scope.emailSent = false;
    }
  };

  $scope.modalContact = function (form) {
    if (form.$valid) {
      $scope.loadingContact = true;
      $scope.contactError = false;
      $scope.emailSent = false;
      var params = $.param({
        formPage: form.$name,
        name: $scope.contactModal.name,
        email: $scope.contactModal.email,
        phone: $scope.contactModal.phone,
        website: $scope.contactModal.website,
      });
      //params = JSON.stringify(params);
      var req = {
        url: 'https://blog.spaceshiplabs.com/wp-content/themes/spaceshiplabs/composerUtilities/marketing.php',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      };
      $http(req).then(
        function (response) {
          console.log(response);
          if (response.data === 'success') {
            $scope.emailSent = true;
            $scope.contactError = false;
          } else {
            $scope.contactError = true;
          }
          $scope.loadingContact = false;
        }, function (err) {
          $scope.contactError = true;
          console.log(err);
          $scope.loadingContact = false;
        }
      );
    } else {
      $scope.contactError = true;
      $scope.emailSent = false;
    }
  };

  $scope.scrollTo = function (target) {
    setTimeout(
      function () {
        var headerHeight = 61;
        $('html, body').animate({
          scrollTop: $('#' + target).offset().top - headerHeight
        }, 600);
      },
      300
    );
  };

  $scope.softwareScrollTo = function (target) {
    setTimeout(
      function () {
        var headerHeight = 200;
        $('html, body').animate({
          scrollTop: $('#' + target).offset().top - headerHeight
        }, 600);
      },
      300
    );
  };



  $scope.getRange = function (n) {
    var arr = new Array(n);
    for (var i = 0; i < n; i++) {
      arr[i] = i + 1;
    }
    return arr;
  };

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/templates/marketing.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };
  
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
  
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };      
  }
  $scope.init();
}  


angular.module('spaceshiplabsApp').controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope', '$mdSidenav', '$location', '$routeParams', 'metaTagsService', '$http', 'windowSize', '$mdDialog'];

