'use strict';

angular.module('studiocdnWebApp')
    .directive('backToTop', function ($window) {
        return {
            restrict: 'A',
            scope: {
                ready: '@?'
            },
            link: function ($scope, elem, attr) {
                var bttArrow = angular.element('.back-to-top');

                if ((elem.scrollTop() < 100)) {
                    bttArrow.fadeOut('slow');
                }
                attr.$observe('ready', function (val) {
                    if (val == 'false') {
                        bttArrow.fadeOut('slow');
                    } else if ((val == 'true') && (elem.scrollTop() > 50)) {
                        bttArrow.fadeIn('slow');
                    }
                })

                elem.bind('scroll', function () {
                    if (attr.ready == 'false') {
                        return;
                    }
                    if (elem.scrollTop() > 50) {
                        bttArrow.fadeIn('slow');
                    } else {
                        bttArrow.fadeOut('slow');
                    }
                    $scope.$apply();
                });

                bttArrow.on('click', function (e) {
                    e.preventDefault();
                    angular.element(elem).animate({
                        scrollTop: 0
                    }, '200');
                });
            }
        };
    });
