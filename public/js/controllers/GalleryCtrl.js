// public/js/controllers/GalleryCtrl.js
angular.module('GalleryCtrl', []).controller('GalleryController', function($scope, Palindrome) {

  $scope.totalcollection = [];


  var getAllPalindromes = function () {
    Palindrome.get(function() {

    }).then(function(listOfPalindromes) {
      var list = [];
      for (var i = 0; i < listOfPalindromes.data.length; i++) {
        list.push(listOfPalindromes.data[i].name);
      }

      list.sort(function(a, b) {
        return a.length - b.length;
      });

      var end = list.length - 1;
      for (var i = end; i > -1; i--) {
        $scope.totalcollection.push({'entry': list[i]});
      }
    });
  };

  getAllPalindromes();

});